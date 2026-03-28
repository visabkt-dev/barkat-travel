import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendWhatsAppMessage } from "@/lib/whatsapp";

// This endpoint is called by Vercel Cron — protected by CRON_SECRET
function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true; // local dev: allow without secret
  const authHeader = req.headers.get("authorization");
  return authHeader === `Bearer ${secret}`;
}

const GOOGLE_REVIEW_LINK =
  process.env.GOOGLE_REVIEW_LINK ||
  "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"; // ← replace in .env

function buildReviewMessage(name: string): string {
  return (
    `Assalamu Alaikum ${name}! 🌙\n\n` +
    `We hope your experience with *Barkat Travel* was excellent.\n\n` +
    `Your feedback means the world to us and helps other pilgrims find trusted services. ` +
    `Could you please spare 30 seconds to leave us a Google review?\n\n` +
    `👉 ${GOOGLE_REVIEW_LINK}\n\n` +
    `JazakAllah Khair! — *Barkat Travel Team* 🕌`
  );
}

export async function GET(req: NextRequest) {
  // Auth check
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const now = new Date().toISOString();

  // Fetch all PENDING review requests where scheduled_at has passed
  const { data: pending, error: fetchErr } = await supabase
    .from("review_requests")
    .select("*")
    .eq("status", "pending")
    .lte("scheduled_at", now)   // scheduled time has arrived
    .limit(50);                  // batch cap per cron run

  if (fetchErr) {
    console.error("Cron fetch error:", fetchErr);
    return NextResponse.json({ error: fetchErr.message }, { status: 500 });
  }

  if (!pending || pending.length === 0) {
    return NextResponse.json({ processed: 0, message: "No pending review requests." });
  }

  const results: { id: string; status: string; whatsapp: string }[] = [];

  for (const request of pending) {
    const { id, booking_id, customer_name, whatsapp } = request;

    if (!whatsapp) {
      // Can't send — mark as skipped
      await supabase
        .from("review_requests")
        .update({ status: "skipped", sent_at: now, wa_response: { reason: "no_whatsapp" } })
        .eq("id", id);
      results.push({ id, status: "skipped", whatsapp: "none" });
      continue;
    }

    const message = buildReviewMessage(customer_name || "Valued Customer");
    const waResult = await sendWhatsAppMessage(whatsapp, message);

    const newStatus = waResult.success
      ? "sent"
      : waResult.fallback
      ? "logged"   // dev mode — message printed to console
      : "failed";

    // Update review_requests record
    await supabase
      .from("review_requests")
      .update({
        status:      newStatus,
        sent_at:     now,
        wa_response: waResult,
      })
      .eq("id", id);

    console.log(`Review request ${id} → ${newStatus} (booking: ${booking_id})`);
    results.push({ id, status: newStatus, whatsapp });
  }

  return NextResponse.json({
    processed: results.length,
    results,
    runAt: now,
  });
}
