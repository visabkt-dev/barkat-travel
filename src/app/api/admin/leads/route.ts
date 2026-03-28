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

  const { searchParams } = req.nextUrl;
  const q        = searchParams.get("q");         // Full-text search
  const type     = searchParams.get("type");      // transport | visa | hotel
  const status   = searchParams.get("status");
  const score    = searchParams.get("score");     // "hot" | "warm" | "cold"
  const from     = searchParams.get("from");      // date range from
  const to       = searchParams.get("to");        // date range to
  const sortBy   = searchParams.get("sort") || "created_at"; // "id" | "score" | "created_at"
  const page     = parseInt(searchParams.get("page")  || "1");
  const limit    = parseInt(searchParams.get("limit") || "50");
  const offset   = (page - 1) * limit;


  try {
    let query = supabase
      .from("leads")
      .select("*", { count: "exact" });

    // 1. Full-Text Search
    if (q && q.trim().length > 0) {
      // Use websearch_to_tsquery for better user experience (google style search)
      // but in postgrest we use plainText, phrase, or websearch
      query = query.textSearch('fts_token', q, { config: 'english', type: 'websearch' });
    }

    // 2. Service-type filter
    if (type === "booking") {
      query = query.or("service_type.ilike.%transport%,service_type.ilike.%doha%,service_type.ilike.%makkah%,service_type.ilike.%gcc%");
    } else if (type === "visa") {
      query = query.ilike("service_type", "%visa%");
    } else if (type === "hotel") {
      query = query.ilike("service_type", "%hotel%");
    }

    // 3. Status filter
    if (status && status !== "all") {
      query = query.eq("status", status);
    }

    // 4. Score-category filter
    if (score && ["hot", "warm", "cold"].includes(score)) {
      query = query.eq("score_category", score);
    }

    // 5. Date Range filter
    if (from) query = query.gte("created_at", from);
    if (to)   query = query.lte("created_at", to + "T23:59:59");

    // 6. Sorting & Pagination
    const isScore = sortBy === "score";
    query = query
      .order(isScore ? "score" : "created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    const { data, count, error } = await query;

    if (error) {
      console.error("Supabase leads query error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: data || [], count: count || 0, page, limit });
  } catch (err) {
    console.error("Leads API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
