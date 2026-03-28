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
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const url = new URL(req.url, process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost');
  const sp = url.searchParams;
  
  const q        = sp.get("q") || ""; 
  const status   = sp.get("status") || "all";
  const pageStr  = sp.get("page");
  const limitStr = sp.get("limit");

  const page  = pageStr ? parseInt(pageStr) : 1;
  const limit = limitStr ? parseInt(limitStr) : 20;
  
  // Guard against NaN
  const safePage  = isNaN(page) ? 1 : page;
  const safeLimit = isNaN(limit) ? 20 : limit;
  const offset    = (safePage - 1) * safeLimit;

  try {
    let query = supabase
      .from("hotel_bookings")
      .select("*", { count: "exact" });

    if (q && q.trim()) {
      query = query.or(`name.ilike.%${q}%,whatsapp.ilike.%${q}%,hotel_name.ilike.%${q}%,city.ilike.%${q}%`);
    }

    if (status && status !== "all") {
      query = query.eq("status", status);
    }

    query = query
      .order("created_at", { ascending: false })
      .range(offset, offset + safeLimit - 1);

    const { data, count, error } = await query;
    if (error) {
      console.error("Supabase error in Hotels API:", error);
      throw error;
    }

    return NextResponse.json({ data: data || [], count: count || 0 });
  } catch (err: any) {
    console.error("CRITICAL: Hotel API GET Error", {
      message: err.message,
      stack: err.stack,
      params: { q, status, page, limit }
    });
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    const body = await req.json();
    const { id, ...updates } = body;

    const { data, error } = await supabase
      .from("hotel_bookings")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    const { id } = await req.json();
    const { error } = await supabase.from("hotel_bookings").delete().eq("id", id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
