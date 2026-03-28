import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";
import { 
  adminAlertEmail, 
  bookingConfirmationEmail, 
  statusUpdateEmail,
  followUpEmail 
} from "@/lib/emailTemplates";

const CRON_SECRET = process.env.CRON_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@barkattravel.com";

export async function GET(req: NextRequest) {
  // 1. Auth check
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    // 2. SCANNER: Find leads older than 24h that haven't been followed up
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const { data: leadsToFollow } = await supabase
      .from("leads")
      .select("id, name, email, service_type")
      .eq("status", "new")
      .is("last_follow_up_at", null)
      .lt("created_at", oneDayAgo.toISOString())
      .not("email", "is", null)
      .limit(10);

    if (leadsToFollow && leadsToFollow.length > 0) {
      for (const lead of leadsToFollow) {
        await supabase.from("system_events").insert({
          event_type: "follow_up",
          payload: {
            lead_id: lead.id,
            name: lead.name,
            email: lead.email,
            service: lead.service_type
          }
        });
        await supabase.from("leads").update({ last_follow_up_at: new Date().toISOString() }).eq("id", lead.id);
      }
    }

    // 3. Fetch unprocessed events
    const { data: events, error: fetchError } = await supabase
      .from("system_events")
      .select("*")
      .eq("processed", false)
      .lte("next_retry", new Date().toISOString())
      .limit(20);

    if (fetchError) throw fetchError;
    if (!events || events.length === 0) {
      return NextResponse.json({ success: true, processed: 0 });
    }

    const results = [];

    for (const event of events) {
      const { id, event_type, payload, attempts } = event;
      let success = false;
      let errorMsg = "";

      try {
        if (event_type === "lead_created") {
          const adminTpl = adminAlertEmail({
            name: payload.name,
            whatsapp: payload.whatsapp,
            email: payload.email,
            service_type: payload.service_type,
            details: payload.details,
            source_page: payload.source_page,
            pickup: payload.pickup,
            dropoff: payload.dropoff,
            travel_date: payload.travel_date,
            passengers: payload.passengers,
            city: payload.city,
            check_in: payload.check_in,
            check_out: payload.check_out,
            nationality: payload.nationality,
            visa_type: payload.visa_type,
          });
          
          await sendEmail({
            to: ADMIN_EMAIL,
            subject: adminTpl.subject,
            html: adminTpl.html,
            template: "admin_alert",
            bookingId: payload.lead_id
          });

          if (payload.email && payload.email.includes("@")) {
            const custTpl = bookingConfirmationEmail({
              name: payload.name,
              whatsapp: payload.whatsapp,
              service_type: payload.service_type,
              travel_date: payload.travel_date,
              pickup: payload.pickup,
              dropoff: payload.dropoff,
              passengers: payload.passengers,
              city: payload.city,
              check_in: payload.check_in,
              check_out: payload.check_out,
            });

            await sendEmail({
              to: payload.email,
              subject: custTpl.subject,
              html: custTpl.html,
              template: "booking_confirmation",
              bookingId: payload.lead_id
            });
          }
          success = true;
        } 
        else if (event_type === "status_updated") {
          const { status, email, name, service, notes, lead_id } = payload;
          if ((status === "confirmed" || status === "completed") && email) {
            const tpl = statusUpdateEmail({
              name: name || "Customer",
              service_type: service || "Booking",
              status: status,
              admin_notes: notes,
            });

            await sendEmail({
              to: email,
              subject: tpl.subject,
              html: tpl.html,
              template: "status_update",
              bookingId: lead_id
            });
          }
          success = true;
        }
        else if (event_type === "follow_up") {
          const { email, name, service, lead_id } = payload;
          if (email && email.includes("@")) {
            const tpl = followUpEmail({ name, service_type: service });
            await sendEmail({
              to: email,
              subject: tpl.subject,
              html: tpl.html,
              template: "follow_up",
              bookingId: lead_id
            });
          }
          success = true;
        }

        if (success) {
          await supabase
            .from("system_events")
            .update({ processed: true, last_error: null })
            .eq("id", id);
        }

      } catch (err: any) {
        errorMsg = err.message || "Unknown error";
        const nextRetry = new Date();
        nextRetry.setMinutes(nextRetry.getMinutes() + Math.pow(2, (attempts || 0) + 1));
        await supabase
          .from("system_events")
          .update({ 
            attempts: (attempts || 0) + 1, 
            last_error: errorMsg,
            next_retry: nextRetry.toISOString(),
            processed: (attempts || 0) >= 3 ? true : false
          })
          .eq("id", id);
      }
      results.push({ id, status: success ? "success" : "failed", error: errorMsg });
    }

    return NextResponse.json({ success: true, processed: events.length, results });

  } catch (err: any) {
    console.error("Worker error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
