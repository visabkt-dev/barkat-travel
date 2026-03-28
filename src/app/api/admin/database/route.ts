import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Bypass RLS for admin
  );

  const { searchParams } = new URL(req.url);
  const table = searchParams.get("table");
  
  const ALLOWED = [
    "hotel_bookings", "visa_applications", "transport_trips",
    "pricing_rules",  "email_logs",        "review_requests",
    "audit_logs",
  ];
  if (!table || !ALLOWED.includes(table)) {
      return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");
  const offset = (page - 1) * limit;

  try {
    const { data, count, error } = await supabase
      .from(table)
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;
    return NextResponse.json({ data: data || [], count: count || 0, page, limit });
  } catch (err: any) {
    console.error("Database API Error:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
