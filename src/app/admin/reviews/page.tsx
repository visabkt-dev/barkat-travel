"use client";
import { useState, useEffect, useCallback } from "react";
import AdminSidebar from "@/components/admin/Sidebar";
import {
  RefreshCw,
  Star,
  Clock,
  CheckCircle,
  XCircle,
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
interface ReviewRequest {
  id: string;
  created_at: string;
  booking_id: string;
  booking_table: string;
  customer_name: string;
  whatsapp: string;
  scheduled_at: string;
  sent_at?: string;
  status: string;
}
function StatusBadge({ status }: { status: string }) {
  const map: Record<
    string,
    { icon: React.ReactNode; color: string; bg: string; label: string }
  > = {
    sent: {
      icon: <CheckCircle size={11} />,
      color: C.green,
      bg: "rgba(34,197,94,0.12)",
      label: "Sent",
    },
    pending: {
      icon: <Clock size={11} />,
      color: C.amber,
      bg: "rgba(245,158,11,0.12)",
      label: "Pending",
    },
    failed: {
      icon: <XCircle size={11} />,
      color: C.red,
      bg: "rgba(239,68,68,0.12)",
      label: "Failed",
    },
    skipped: {
      icon: <AlertTriangle size={11} />,
      color: C.dim,
      bg: "rgba(148,163,184,0.1)",
      label: "Skipped",
    },
    logged: {
      icon: <AlertTriangle size={11} />,
      color: C.amber,
      bg: "rgba(245,158,11,0.12)",
      label: "Dev Log",
    },
  };
  const s = map[status] || map.pending;
  return (
    <span
      className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-normal"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {s.icon} {s.label}
    </span>
  );
}
export default function ReviewRequestsPage() {
  const [rows, setRows] = useState<ReviewRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const PAGE_SIZE = 30;
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/database?table=review_requests&page=${page}&limit=${PAGE_SIZE}`,
      );
      const json = await res.json();
      setRows(json.data || []);
      setTotal(json.count || 0);
    } finally {
      setLoading(false);
    }
  }, [page]);
  useEffect(() => {
    load();
  }, [load]);
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const sent = rows.filter((r) => r.status === "sent").length;
  const pending = rows.filter((r) => r.status === "pending").length;
  const failed = rows.filter((r) => r.status === "failed").length;
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: C.bg }}>
      <AdminSidebar />
      <main className="flex-1 p-8" style={{ paddingLeft: "18rem" }}>
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-3xl font-normal" style={{ color: C.white }}>
              Review Requests
            </p>
            <p className="text-sm mt-1" style={{ color: C.dim }}>
              Auto-sent 24h after booking completion · {total} total requests
            </p>
          </div>
          <button
            onClick={load}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-normal"
            style={{
              backgroundColor: "rgba(212,175,55,0.1)",
              color: C.gold,
              border: `1px solid rgba(212,175,55,0.2)`,
            }}
          >
            <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total",
              value: total,
              color: C.gold,
              icon: <Star size={20} />,
            },
            {
              label: "Sent",
              value: sent,
              color: C.green,
              icon: <CheckCircle size={20} />,
            },
            {
              label: "Pending",
              value: pending,
              color: C.amber,
              icon: <Clock size={20} />,
            },
            {
              label: "Failed",
              value: failed,
              color: C.red,
              icon: <XCircle size={20} />,
            },
          ].map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${s.color}15`, color: s.color }}
              >
                {s.icon}
              </div>
              <div className="text-2xl font-normal" style={{ color: C.white }}>
                {s.value}
              </div>
              <div
                className="text-xs font-normal mt-1"
                style={{ color: C.dim }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${C.border}`, backgroundColor: C.card }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  style={{
                    borderBottom: `1px solid ${C.border}`,
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  {[
                    "Scheduled",
                    "Customer",
                    "WhatsApp",
                    "Source Table",
                    "Status",
                    "Sent At",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-4 text-xs font-normal "
                      style={{ color: C.gold }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-16">
                      <RefreshCw
                        size={28}
                        className="animate-spin mx-auto mb-2"
                        style={{ color: C.gold }}
                      />
                      <p
                        className="text-sm font-normal"
                        style={{ color: C.dim }}
                      >
                        Loading…
                      </p>
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-16">
                      <Star
                        size={36}
                        className="mx-auto mb-3"
                        style={{ color: C.dim }}
                      />
                      <p
                        className="text-sm font-normal"
                        style={{ color: C.dim }}
                      >
                        No review requests yet
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "rgba(148,163,184,0.5)" }}
                      >
                        They auto-generate when a booking status changes to
                        "completed"
                      </p>
                    </td>
                  </tr>
                ) : (
                  rows.map((r, i) => (
                    <tr
                      key={r.id}
                      style={{
                        borderBottom: `1px solid ${C.border}`,
                        backgroundColor:
                          i % 2 === 0
                            ? "transparent"
                            : "rgba(255,255,255,0.015)",
                      }}
                    >
                      <td
                        className="px-5 py-3 text-xs whitespace-nowrap"
                        style={{ color: C.dim }}
                      >
                        {new Date(r.scheduled_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td
                        className="px-5 py-3 text-sm font-normal"
                        style={{ color: C.white }}
                      >
                        {r.customer_name || "—"}
                      </td>
                      <td
                        className="px-5 py-3 text-xs"
                        style={{ color: C.dim }}
                      >
                        {r.whatsapp}
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-normal"
                          style={{
                            backgroundColor: "rgba(212,175,55,0.1)",
                            color: C.gold,
                          }}
                        >
                          {r.booking_table}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <StatusBadge status={r.status} />
                      </td>
                      <td
                        className="px-5 py-3 text-xs"
                        style={{ color: C.dim }}
                      >
                        {r.sent_at ? (
                          new Date(r.sent_at).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        ) : (
                          <span style={{ color: "rgba(255,255,255,0.2)" }}>
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ borderTop: `1px solid ${C.border}` }}
            >
              <span className="text-xs" style={{ color: C.dim }}>
                Page {page} of {totalPages}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg disabled:opacity-30"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: C.white,
                  }}
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg disabled:opacity-30"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: C.white,
                  }}
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
