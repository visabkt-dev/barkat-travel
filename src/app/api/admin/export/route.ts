import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";
import * as XLSX from "xlsx";

export async function GET(req: NextRequest) {
  // 1. Auth Check
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Extract Filters
  const { searchParams } = new URL(req.url);
  const from    = searchParams.get("from");
  const to      = searchParams.get("to");
  const service = searchParams.get("service");
  const status  = searchParams.get("status");
  const format  = searchParams.get("format") || "csv"; // "csv" | "xlsx"

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    let query = supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    // Apply Filters
    if (from)    query = query.gte("created_at", from);
    if (to)      query = query.lte("created_at", to + "T23:59:59");
    if (service && service !== "All") query = query.ilike("service_type", `%${service}%`);
    if (status && status !== "all")   query = query.eq("status", status);

    const { data: leads, error } = await query;
    if (error) throw error;

    if (!leads || leads.length === 0) {
      return NextResponse.json({ error: "No records found to export" }, { status: 404 });
    }

    // 3. Transform Data for Export
    const exportData = leads.map(l => ({
      ID:           l.id,
      Date:         new Date(l.created_at).toLocaleString(),
      Name:         l.name,
      WhatsApp:     l.whatsapp,
      Email:        l.email || "-",
      Service:      l.service_type,
      Status:       l.status || "new",
      Score:        l.score || 0,
      Category:     l.score_category || "cold",
      Travel_Date:  l.travel_date || "-",
      Passengers:   l.passengers || "-",
      Pickup:       l.pickup || "-",
      Dropoff:      l.dropoff || "-",
      City:         l.city || "-",
      Notes:        l.admin_notes || "",
      Source:       l.source_page || "unknown"
    }));

    // 4. Handle CSV Format
    if (format === "csv") {
      const headers = Object.keys(exportData[0]).join(",");
      const rows = exportData.map(d => 
        Object.values(d).map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")
      ).join("\n");
      const csvStr = `${headers}\n${rows}`;

      // Audit Log
      await supabase.from("audit_logs").insert({
        action: "export_leads",
        details: `Exported ${leads.length} leads as CSV`,
        metadata: { from, to, service, status, format }
      });

      return new NextResponse(csvStr, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="barkat_leads_${new Date().toISOString().split("T")[0]}.csv"`
        }
      });
    }

    // 5. Handle Excel Format (XLSX)
    const workbook  = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Barkat Leads");
    
    // Generate buffer
    const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    // Audit Log
    await supabase.from("audit_logs").insert({
      action: "export_leads",
      details: `Exported ${leads.length} leads as XLSX`,
      metadata: { from, to, service, status, format }
    });

    return new NextResponse(buf, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="barkat_leads_${new Date().toISOString().split("T")[0]}.xlsx"`
      }
    });

  } catch (err: any) {
    console.error("Export failure:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
