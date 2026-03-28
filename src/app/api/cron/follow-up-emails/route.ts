import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";
import { followUpEmail } from "@/lib/emailTemplates";

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  return req.headers.get("authorization") === `Bearer ${secret}`;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const now = new Date();
  // Find leads submitted 3 days ago (72h) whose status is still 'new'
  // and have an email address but haven't been sent a follow-up yet
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString();
  const fourDaysAgo  = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString();

  const { data: staleLeads, error } = await supabase
    .from("leads")
    .select("id, name, email, service_type, status")
    .eq("status", "new")
    .not("email", "is", null)
    .gte("created_at", fourDaysAgo)   // not too old
    .lte("created_at", threeDaysAgo)  // at least 3 days old
    .limit(30);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!staleLeads || staleLeads.length === 0) {
    return NextResponse.json({ processed: 0, message: "No stale leads for follow-up." });
  }

  const results: { id: string; status: string }[] = [];

  for (const lead of staleLeads) {
    // Duplicate guard — check if we already sent a follow-up for this lead
    const { count } = await supabase
      .from("email_logs")
      .select("*", { count: "exact", head: true })
      .eq("booking_id", lead.id)
      .eq("template", "follow_up");

    if (count && count > 0) {
      results.push({ id: lead.id, status: "already_sent" });
      continue;
    }

    const tpl = followUpEmail({
      name:         lead.name         || "Valued Customer",
      service_type: lead.service_type || "our services",
    });

    const result = await sendEmail({
      to:        lead.email,
      subject:   tpl.subject,
      html:      tpl.html,
      template:  "follow_up",
      bookingId: lead.id,
    });

    results.push({ id: lead.id, status: result.success ? "sent" : "failed" });
  }

  return NextResponse.json({
    processed: results.length,
    results,
    runAt: now.toISOString(),
  });
}
