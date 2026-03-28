import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";

export async function PUT(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ids, status } = await req.json();
  if (!ids || !Array.isArray(ids) || !status) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    // 1. Update master leads
    const { error: masterError } = await supabase
      .from("leads")
      .update({ status })
      .in("id", ids);

    if (masterError) throw masterError;

    // 2. Log in audit logs
    await supabase.from("audit_logs").insert({
      action: "bulk_status_update",
      details: `Updated ${ids.length} leads to ${status}`,
      metadata: { ids, status }
    });

    return NextResponse.json({ success: true, count: ids.length });
  } catch (err: any) {
    console.error("Bulk update error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ids } = await req.json();
  if (!ids || !Array.isArray(ids)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    // 1. Delete from master leads
    const { error: masterError } = await supabase
      .from("leads")
      .delete()
      .in("id", ids);

    if (masterError) throw masterError;

    // 2. Log in audit logs
    await supabase.from("audit_logs").insert({
      action: "bulk_delete",
      details: `Deleted ${ids.length} leads permanently`,
      metadata: { ids }
    });

    return NextResponse.json({ success: true, count: ids.length });
  } catch (err: any) {
    console.error("Bulk delete error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
