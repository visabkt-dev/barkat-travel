import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";
import { sendEmail } from "@/lib/email";
import { statusUpdateEmail } from "@/lib/emailTemplates";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// DELETE a lead
export async function DELETE(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    const supabase = getSupabase();
    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
       await supabase.from("audit_logs").insert({
           action_type: "DELETE",
           table_name: "leads",
           record_id: id,
           admin_user: "admin",
           ip_address: req.headers.get("x-forwarded-for") || "unknown"
       });
    } catch(err) { console.error("Audit fail", err); }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT (update) a lead
export async function PUT(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, ...updates } = body;
    
    // Remove null/undefined values
    const cleanUpdates: Record<string, string | null> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (key !== "metadata") {
        cleanUpdates[key] = (value as string) || null;
      }
    }

    const supabase = getSupabase();
    const { error } = await supabase.from("leads").update(cleanUpdates).eq("id", id);

    if (error) {
      console.error("Update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // ── Audit log ──────────────────────────────────────────────────────
    try {
      await supabase.from("audit_logs").insert({
        action_type: "UPDATE", table_name: "leads", record_id: id,
        admin_user:  "admin",  new_data:   cleanUpdates,
        ip_address:  req.headers.get("x-forwarded-for") || "unknown",
      });
    } catch (err) { console.error("Audit fail", err); }

    // ── 3. ASYNC EVENT ────────────────────────────────────────────────────
    const newStatus = cleanUpdates.status as string | undefined;
    if (newStatus && ["confirmed", "completed", "cancelled", "contacted"].includes(newStatus)) {
      await supabase.from("system_events").insert({
        event_type: "status_updated",
        payload: {
          lead_id: id,
          status:  newStatus,
          email:   updates.email,
          name:    updates.name,
          service: updates.service_type,
          notes:   updates.admin_notes,
        }
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Update API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
