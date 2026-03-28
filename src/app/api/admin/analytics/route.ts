import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabase();
  const { searchParams } = new URL(req.url);
  const dateFrom = searchParams.get("from") || new Date(Date.now() - 30 * 86400000).toISOString().split("T")[0];
  const dateTo   = searchParams.get("to")   || new Date().toISOString().split("T")[0];
  const serviceFilter = searchParams.get("service"); // optional

  try {
    // ── 1. TOTAL LEADS (master table) ─────────────────────────────────────
    let leadsQuery = supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");
    if (serviceFilter) leadsQuery = leadsQuery.ilike("service_type", `%${serviceFilter}%`);
    const { count: totalLeads } = await leadsQuery;

    // ── 2. TOTAL TRANSPORT BOOKINGS ────────────────────────────────────────
    let tripQuery = supabase
      .from("transport_trips")
      .select("*", { count: "exact", head: true })
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");
    const { count: totalTransport } = await tripQuery;

    // ── 3. TOTAL VISA APPLICATIONS ─────────────────────────────────────────
    const { count: totalVisa } = await supabase
      .from("visa_applications")
      .select("*", { count: "exact", head: true })
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    // ── 4. TOTAL HOTEL BOOKINGS ────────────────────────────────────────────
    const { count: totalHotels } = await supabase
      .from("hotel_bookings")
      .select("*", { count: "exact", head: true })
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    // ── 5. REVENUE: sum of price_quoted from all confirmed trips ──────────
    const { data: revTransport } = await supabase
      .from("transport_trips")
      .select("price_quoted")
      .in("status", ["confirmed", "completed"])
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    const { data: revVisa } = await supabase
      .from("visa_applications")
      .select("price_quoted")
      .in("status", ["confirmed", "completed"])
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    const { data: revHotel } = await supabase
      .from("hotel_bookings")
      .select("price_quoted")
      .in("status", ["confirmed", "completed"])
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    const totalRevenue = [
      ...(revTransport || []),
      ...(revVisa || []),
      ...(revHotel || []),
    ].reduce((sum, r) => sum + (parseFloat(r.price_quoted) || 0), 0);

    // ── 6. CONVERSION RATE: confirmed+completed / total leads ─────────────
    const { count: convertedLeads } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .in("status", ["confirmed", "completed"])
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    const conversionRate = totalLeads && totalLeads > 0
      ? Math.round(((convertedLeads || 0) / totalLeads) * 100)
      : 0;

    // ── Score breakdown ────────────────────────────────────────────────────
    const { count: hotLeads }  = await supabase
      .from("leads").select("*", { count: "exact", head: true })
      .eq("score_category", "hot")
      .gte("created_at", dateFrom).lte("created_at", dateTo + "T23:59:59");

    const { count: warmLeads } = await supabase
      .from("leads").select("*", { count: "exact", head: true })
      .eq("score_category", "warm")
      .gte("created_at", dateFrom).lte("created_at", dateTo + "T23:59:59");

    const { count: coldLeads } = await supabase
      .from("leads").select("*", { count: "exact", head: true })
      .eq("score_category", "cold")
      .gte("created_at", dateFrom).lte("created_at", dateTo + "T23:59:59");

    // ── 7. BOOKINGS PER DAY (last N days from leads table) ────────────────
    const { data: rawLeadsByDay } = await supabase
      .from("leads")
      .select("created_at")
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59")
      .order("created_at", { ascending: true });

    const dayMap: Record<string, number> = {};
    (rawLeadsByDay || []).forEach((r) => {
      const day = r.created_at.split("T")[0];
      dayMap[day] = (dayMap[day] || 0) + 1;
    });
    const bookingsPerDay = Object.entries(dayMap).map(([date, count]) => ({ date, count }));

    // ── 8. REVENUE PER SERVICE TYPE ───────────────────────────────────────
    const revenueByService = [
      {
        service: "Transport",
        revenue: (revTransport || []).reduce((s, r) => s + (parseFloat(r.price_quoted) || 0), 0),
      },
      {
        service: "Visa",
        revenue: (revVisa || []).reduce((s, r) => s + (parseFloat(r.price_quoted) || 0), 0),
      },
      {
        service: "Hotels",
        revenue: (revHotel || []).reduce((s, r) => s + (parseFloat(r.price_quoted) || 0), 0),
      },
    ];

    // ── 9. TOP ROUTES (transport_trips pickup→dropoff) ────────────────────
    const { data: allTrips } = await supabase
      .from("transport_trips")
      .select("pickup, dropoff")
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59")
      .not("pickup", "is", null)
      .not("dropoff", "is", null);

    const routeMap: Record<string, number> = {};
    (allTrips || []).forEach((t) => {
      if (t.pickup && t.dropoff) {
        const key = `${t.pickup} → ${t.dropoff}`;
        routeMap[key] = (routeMap[key] || 0) + 1;
      }
    });
    const topRoutes = Object.entries(routeMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([route, count]) => ({ route, count }));

    // ── 10. LEADS BY SERVICE TYPE (pie/bar) ───────────────────────────────
    const { data: allLeads } = await supabase
      .from("leads")
      .select("service_type")
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    const serviceMap: Record<string, number> = {};
    (allLeads || []).forEach((l) => {
      const key = l.service_type || "Other";
      serviceMap[key] = (serviceMap[key] || 0) + 1;
    });
    const leadsByService = Object.entries(serviceMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([service, count]) => ({ service, count }));

    // ── 11. STATUS BREAKDOWN (all leads) ─────────────────────────────────
    const { data: statusData } = await supabase
      .from("leads")
      .select("status")
      .gte("created_at", dateFrom)
      .lte("created_at", dateTo + "T23:59:59");

    const statusMap: Record<string, number> = {};
    (statusData || []).forEach((l) => {
      const key = l.status || "new";
      statusMap[key] = (statusMap[key] || 0) + 1;
    });
    const statusBreakdown = Object.entries(statusMap).map(([status, count]) => ({ status, count }));

    return NextResponse.json({
      metrics: {
        totalLeads:     totalLeads || 0,
        totalTransport: totalTransport || 0,
        totalVisa:      totalVisa || 0,
        totalHotels:    totalHotels || 0,
        totalRevenue:   Math.round(totalRevenue * 100) / 100,
        conversionRate,
        convertedLeads: convertedLeads || 0,
        hotLeads:       hotLeads  || 0,
        warmLeads:      warmLeads || 0,
        coldLeads:      coldLeads || 0,
      },
      charts: {
        bookingsPerDay,
        revenueByService,
        topRoutes,
        leadsByService,
        statusBreakdown,
      },
      filters: { dateFrom, dateTo, serviceFilter },
    });

  } catch (err: any) {
    console.error("Analytics API Error:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
