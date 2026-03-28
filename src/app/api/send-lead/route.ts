import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { bookingConfirmationEmail, adminAlertEmail } from "@/lib/emailTemplates";
import { calculateLeadScore } from "@/lib/leadScoring";

// ─── Supabase (anon key — public form submissions) ───────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "visabkt@gmail.com";

// ─── Zod Schema ───────────────────────────────────────────────────────────
const LeadSchema = z.object({
  name:            z.string().min(2).max(100).trim(),
  whatsapp:        z.string().min(7).max(20).trim(),
  email:           z.string().email().optional().or(z.literal("")),
  service_type:    z.string().min(2).max(100).trim(),
  details:         z.string().max(5000).optional(),
  source_page:     z.string().max(200).optional(),
  pickup:          z.string().max(200).optional(),
  dropoff:         z.string().max(200).optional(),
  travel_date:     z.string().optional(),
  passengers:      z.string().max(10).optional(),
  additional_info: z.string().max(5000).optional(),
  city:            z.string().max(100).optional(),
  check_in:        z.string().optional(),
  check_out:       z.string().optional(),
  nationality:     z.string().max(100).optional(),
  visa_type:       z.string().max(100).optional(),
  metadata:        z.record(z.string(), z.any()).optional(),
});

// ─── In-memory rate limiter (5 req / 60s per IP) ─────────────────────────
const rateMap = new Map<string, { count: number; firstReq: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = rateMap.get(ip);
  if (!rec || now - rec.firstReq > 60_000) {
    rateMap.set(ip, { count: 1, firstReq: now });
    return false;
  }
  if (rec.count >= 5) return true;
  rec.count++;
  return false;
}

// ─── Handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute." },
      { status: 429 }
    );
  }

  // Parse & validate
  let raw: unknown;
  try { raw = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const parsed = LeadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const {
    name, whatsapp, email, service_type, details, source_page,
    pickup, dropoff, travel_date, passengers, additional_info,
    city, check_in, check_out, nationality, visa_type, metadata = {},
  } = data;

  // ── Calculate lead score immediately ──────────────────────────────────
  const { score, category: score_category } = calculateLeadScore({
    whatsapp, email, travel_date, passengers,
    additional_info, details,
  });

  // ── 1. DISTRIBUTED TABLE WRITE ─────────────────────────────────────────
  const st = service_type.toLowerCase();
  let insertedId: string | undefined;

  try {
    if (st.includes("visa")) {
      const { data: row } = await supabase.from("visa_applications").insert({
        name, whatsapp, email: email || null,
        visa_type: visa_type || service_type, nationality: nationality || null,
        applicants: parseInt(passengers || "0") || null,
        travel_date: travel_date || null,
        additional_info: additional_info || details || null,
        score, score_category,
      }).select("id").single();
      insertedId = row?.id;
    } else if (st.includes("hotel")) {
      const { data: row } = await supabase.from("hotel_bookings").insert({
        name, whatsapp, email: email || null,
        city: city || null, check_in: check_in || null, check_out: check_out || null,
        passengers: passengers || null,
        additional_info: additional_info || details || null,
        score, score_category,
      }).select("id").single();
      insertedId = row?.id;
    } else {
      const { data: row } = await supabase.from("transport_trips").insert({
        name, whatsapp, email: email || null, service_type,
        pickup: pickup || null, dropoff: dropoff || null,
        travel_date: travel_date || null, passengers: passengers || null,
        additional_info: additional_info || details || null,
        score, score_category,
      }).select("id").single();
      insertedId = row?.id;
    }
  } catch (e) { console.error("Distributed write failed:", e); }

  // ── 2. MASTER LEADS TABLE ──────────────────────────────────────────────
  const { error: dbError } = await supabase.from("leads").insert({
    name, whatsapp, email: email || null, service_type,
    pickup: pickup || null, dropoff: dropoff || null,
    travel_date: travel_date || null, passengers: passengers || null,
    additional_info: additional_info || details || null,
    city: city || null, check_in: check_in || null, check_out: check_out || null,
    nationality: nationality || null, visa_type: visa_type || null,
    source_page: source_page || "unknown", metadata: metadata || {},
    score, score_category,
  });
  if (dbError) console.error("Master leads insert failed:", dbError);

  // ── 3. ASYNC EVENT ────────────────────────────────────────────────────
  // Instead of sending emails now, create an event for the worker.
  const { error: eventError } = await supabase.from("system_events").insert({
    event_type: "lead_created",
    payload: {
      lead_id: insertedId,
      name, whatsapp, email, service_type,
      details: details || additional_info,
      source_page, pickup, dropoff, travel_date, passengers,
      city, check_in, check_out, nationality, visa_type,
    }
  });
  if (eventError) console.error("Event system failure:", eventError);

  return NextResponse.json({
    success:  true,
    dbSaved:  !dbError,
    evented:  !eventError,
    bookingId: insertedId,
  });
}
