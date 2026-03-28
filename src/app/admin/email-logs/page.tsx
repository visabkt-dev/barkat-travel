"use client";
import { useState, useEffect, useCallback } from "react";
import AdminSidebar from "@/components/admin/Sidebar";
import {
  RefreshCw,
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
const C = {
  bg: "#0f172a",
  card: "#1e293b",
  border: "rgba(255,255,255,0.07)",
  gold: "#D4AF37",
  white: "#f8fafc",
  dim: "#94a3b8",
  green: "#22c55e",
  red: "#ef4444",
  amber: "#f59e0b",
};
interface EmailLog {
  id: string;
  created_at: string;
  recipient: string;
  subject: string;
  template: string;
  status: string;
  attempts: number;
  sent_at?: string;
  error?: string;
  resend_id?: string;
}
function StatusBadge({ status }: { status: string }) {
  const map: Record<
    string,
    { icon: React.ReactNode; color: string; bg: string }
  > = {
    sent: {
      icon: <CheckCircle size={12} />,
      color: C.green,
      bg: "rgba(34,197,94,0.12)",
    },
    failed: {
      icon: <XCircle size={12} />,
      color: C.red,
      bg: "rgba(239,68,68,0.12)",
    },
    pending: {
      icon: <Clock size={12} />,
      color: C.amber,
      bg: "rgba(245,158,11,0.12)",
    },
    logged: {
      icon: <AlertTriangle size={12} />,
      color: C.amber,
      bg: "rgba(245,158,11,0.12)",
    },
  };
  const s = map[status] || map.pending;
  return (
    <span
      className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-normal capitalize"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {s.icon} {status}
    </span>
  );
}
function TemplateBadge({ t }: { t: string }) {
  const colors: Record<string, string> = {
    admin_alert: "#ef4444",
    booking_confirmation: "#22c55e",
    status_update: "#3b82f6",
    follow_up: "#a855f7",
  };
  const c = colors[t] || C.gold;
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-normal"
      style={{ backgroundColor: `${c}15`, color: c }}
    >
      {t?.replace(/_/g, " ") || "—"}
    </span>
  );
}
export default function EmailLogsPage() {
  const [logs, setLogs] = useState<EmailLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState<string>("all");
  const PAGE_SIZE = 30;
  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        table: "email_logs",
        page: page.toString(),
        limit: PAGE_SIZE.toString(),
      });
      const res = await window.fetch(`/api/admin/database?${params}`);
      const json = await res.json();
      setLogs(json.data || []);
      setTotal(json.count || 0);
    } finally {
      setLoading(false);
    }
  }, [page]);
  useEffect(() => {
    fetch();
  }, [fetch]);
  const filtered =
    filter === "all" ? logs : logs.filter((l) => l.status === filter);
  const totalPages = Math.ceil(total / PAGE_SIZE); // Stats const sent = logs.filter(l => l.status === "sent").length; const failed = logs.filter(l => l.status === "failed").length; const pending = logs.filter(l => l.status === "pending").length; return ( <div className="min-h-screen flex" style={{ backgroundColor: C.bg }}> <AdminSidebar /> <main className="flex-1 p-8" style={{ paddingLeft: "18rem" }}> {/* Header */} <div className="flex items-start justify-between mb-8"> <div> <p className="text-3xl font-normal " style={{ color: C.white }}>Email Logs</p> <p className="text-sm mt-1" style={{ color: C.dim }}>{total} total emails tracked with retry history</p> </div> <button onClick={fetch} disabled={loading} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-normal" style={{ backgroundColor: "rgba(212,175,55,0.1)", color: C.gold, border: `1px solid rgba(212,175,55,0.2)` }}> <RefreshCw size={15} className={loading ? "animate-spin" : ""} /> Refresh </button> </div> {/* Stats Row */} <div className="grid grid-cols-4 gap-4 mb-8"> {[ { label: "Total Sent", value: sent, color: C.green, icon: <CheckCircle size={20} /> }, { label: "Failed", value: failed, color: C.red, icon: <XCircle size={20} /> }, { label: "Pending", value: pending, color: C.amber, icon: <Clock size={20} /> }, { label: "Delivery Rate", value: sent + failed > 0 ? `${Math.round((sent / (sent + failed)) * 100)}%` : "—", color: C.gold, icon: <Mail size={20} /> }, ].map((s, i) => ( <div key={i} className="p-5 rounded-2xl" style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}> <div className="flex justify-between items-start mb-3"> <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}15`, color: s.color }}> {s.icon} </div> </div> <div className="text-2xl font-normal" style={{ color: C.white }}>{s.value}</div> <div className="text-xs font-normal mt-1" style={{ color: C.dim }}>{s.label}</div> </div> ))} </div> {/* Filter tabs */} <div className="flex gap-2 mb-5"> {["all", "sent", "failed", "pending"].map(f => ( <button key={f} onClick={() => setFilter(f)} className="px-4 py-1.5 rounded-full text-xs font-normal capitalize transition-all" style={{ backgroundColor: filter === f ? C.gold : "rgba(255,255,255,0.05)", color: filter === f ? C.bg : C.dim, }}> {f} </button> ))} </div> {/* Table */} <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}`, backgroundColor: C.card }}> <div className="overflow-x-auto"> <table className="w-full"> <thead> <tr style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: "rgba(255,255,255,0.03)" }}> {["Date", "Recipient", "Subject", "Template", "Status", "Attempts", "Resend ID"].map(h => ( <th key={h} className="text-left px-5 py-4 text-xs font-normal " style={{ color: C.gold }}>{h}</th> ))} </tr> </thead> <tbody> {loading ? ( <tr><td colSpan={7} className="text-center py-16" style={{ color: C.dim }}> <RefreshCw size={28} className="animate-spin mx-auto mb-2" style={{ color: C.gold }} /> <p className="text-sm font-normal">Loading logs…</p> </td></tr> ) : filtered.length === 0 ? ( <tr><td colSpan={7} className="text-center py-16"> <Mail size={36} className="mx-auto mb-3" style={{ color: C.dim }} /> <p className="text-sm font-normal" style={{ color: C.dim }}>No email logs found</p> </td></tr> ) : filtered.map((log, i) => ( <tr key={log.id} style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}> <td className="px-5 py-3 text-xs whitespace-nowrap" style={{ color: C.dim }}> {new Date(log.created_at).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })} </td> <td className="px-5 py-3 text-sm font-normal max-w-[160px] truncate" style={{ color: C.white }}>{log.recipient}</td> <td className="px-5 py-3 text-xs max-w-[200px] truncate" style={{ color: C.dim }}> <span title={log.subject}>{log.subject}</span> </td> <td className="px-5 py-3"><TemplateBadge t={log.template} /></td> <td className="px-5 py-3"><StatusBadge status={log.status} /></td> <td className="px-5 py-3 text-center"> <span className="text-xs font-normal px-2 py-1 rounded-lg" style={{ backgroundColor: log.attempts > 1 ? "rgba(245,158,11,0.1)" : "rgba(34,197,94,0.08)", color: log.attempts > 1 ? C.amber : C.green, }}> {log.attempts}× </span> </td> <td className="px-5 py-3 text-xs font-mono" style={{ color: C.dim }}> {log.resend_id ? ( <span className="truncate block max-w-[120px]" title={log.resend_id}> {log.resend_id.slice(0, 12)}… </span> ) : ( <span style={{ color: "rgba(255,255,255,0.2)" }}>—</span> )} </td> </tr> ))} </tbody> </table> </div> {/* Pagination */} {totalPages > 1 && ( <div className="px-5 py-4 flex items-center justify-between" style={{ borderTop: `1px solid ${C.border}` }}> <span className="text-xs" style={{ color: C.dim }}>Page {page} of {totalPages}</span> <div className="flex gap-2"> <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg disabled:opacity-30" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: C.white }}> <ChevronLeft size={15} /> </button> <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 rounded-lg disabled:opacity-30" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: C.white }}> <ChevronRight size={15} /> </button> </div> </div> )} </div> </main> </div> );
}
