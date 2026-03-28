import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const recordId = searchParams.get("id");
  const table    = searchParams.get("table");

  if (!recordId) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    const { data, error } = await supabase
      .from("admin_notes_history")
      .select("*")
      .eq("record_id", recordId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("History query error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: data || [] });
  } catch (err) {
    console.error("History API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
