"use client";
import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  List,
  Search,
  Filter,
  Pencil,
  Trash2,
  X,
  Plus,
  Download,
  Users,
  DollarSign,
  Activity,
  AlertTriangle,
  Printer,
  Copy,
  MapPin,
  MessageSquare,
} from "lucide-react";
const PAGE_SIZE = 15;
export default function BookingsManagement() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = new URLSearchParams({ page: page.toString(), q: search });
      const res = await fetch(`/api/admin/leads?${p}`);
      const json = await res.json();
      setLeads(json.data || []);
      setTotal(json.count || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, search]);
  useEffect(() => {
    load();
  }, [load]);
  return (
    <AdminLayout>
      {/* 1. Header: Compact & Professional */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 gap-4">
        <div className="space-y-0.5">
          <p className="text-xl font-normal text-[#0f172a] ">
            Booking Management
          </p>
          <p className="text-sm text-[#94a3b8] font-normal leading-none">
            Systematic Pipeline Monitor · Cluster Global
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f172a] text-[#D4AF37] font-normal text-sm shadow-lg shadow-[#0A2C5A]/10 transition-all hover:scale-[1.03]">
            <Plus size={16} strokeWidth={3} /> New Booking
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0A2C5A] font-normal text-sm hover:bg-slate-50 transition-all shadow-sm">
            <Download size={16} /> Export
          </button>
        </div>
      </div>
      {/* 2. Compact Stats Bar (NO GIANT BOXES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {[
          {
            title: "Total Bookings",
            val: total,
            icon: <Users size={18} />,
            color: "blue",
          },
          {
            title: "Today's Revenue",
            val: `SAR 1,200`,
            icon: <DollarSign size={18} />,
            color: "green",
          },
          {
            title: "Active Jobs",
            val: 1,
            icon: <Activity size={18} />,
            color: "purple",
          },
          {
            title: "Urgent Units",
            val: 100,
            icon: <AlertTriangle size={18} />,
            color: "red",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-[#0A2C5A] transition-all cursor-pointer group"
          >
            <div>
              <p className="text-sm font-normal text-[#94a3b8] mb-1">
                {s.title}
              </p>
              <p className="text-xl font-normal text-[#0f172a] group-hover:text-[#D4AF37] transition-colors">
                {s.val}
              </p>
            </div>
            <div
              className={`p-3 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#0A2C5A] group-hover:text-white transition-all`}
            >
              {s.icon}
            </div>
          </div>
        ))}
      </div>
      {/* 3. Filter Row: Discrete & Clean */}
      <div className="bg-white p-2 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-3 mb-8 shadow-sm">
        <div className="relative flex-1 min-w-[280px]">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            size={16}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Universal Analysis Strategy..."
            className="w-full bg-[#f8fafc] border border-slate-50 rounded-xl pl-10 pr-4 py-2.5 text-[15px] font-normal text-[#0f172a] focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0A2C5A]/5 transition-all"
          />
        </div>
        <select className="px-4 py-2.5 rounded-xl bg-white border border-slate-100 text-sm font-normal text-[#0f172a] cursor-pointer hover:bg-slate-50 transition-all outline-none min-w-[140px]">
          <option>All Registry</option> <option>Confirmed</option>
          <option>Denied</option>
        </select>
        <button
          onClick={load}
          className="p-2.5 rounded-xl bg-[#0f172a] text-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#0A2C5A]/10"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
        </button>
      </div>
      {/* 4. Sheet Table: High Readability (COMPACT) */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-4 w-12 text-center text-sm font-normal text-[#94a3b8] ">
                  Id
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] ">
                  Customer Profile
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] text-center">
                  Operational Route
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] text-center">
                  Unit / Service
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] text-center">
                  Price
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] text-center">
                  Registry Status
                </th>
                <th className="px-8 py-4 text-right pr-10 text-sm font-normal text-[#94a3b8] ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-24 text-center">
                    <RefreshCw
                      className="animate-spin mx-auto text-slate-200"
                      size={32}
                    />
                  </td>
                </tr>
              ) : (
                leads.map((l) => (
                  <tr
                    key={l.id}
                    className="hover:bg-slate-50/50 transition-all group"
                  >
                    <td className="px-8 py-5 text-center text-sm font-mono text-slate-300">
                      #{l.id.slice(0, 5)}
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-[15px] font-normal text-[#0f172a] group-hover:text-slate-500 transition-colors">
                        {l.name}
                      </p>
                      <p className="text-sm font-normal text-[#94a3b8] mt-0.5">
                        {l.email || "No Email"}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-normal text-[#0A2C5A] bg-slate-100 px-2 py-0.5 rounded">
                          {l.pickup || "Doha"}
                        </span>
                        <div className="w-4 h-px bg-slate-200" />
                        <span className="text-sm font-normal text-[#D4AF37] bg-[#0A2C5A] border border-[#0A2C5A] px-2 py-0.5 rounded">
                          {l.dropoff || "Makkah"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-sm font-normal text-[#94a3b8] ">
                        {l.service_type || "Transport"}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <p className="text-[15px] font-normal text-[#0f172a]">
                        SAR 0
                      </p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="px-3 py-1 rounded-lg bg-slate-50 text-slate-400 text-xs font-normal border border-slate-100">
                        PENDING
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right pr-10">
                      <div className="flex items-center justify-end gap-2 xl:opacity-0 group-hover:opacity-100 transition-all underline decoration-slate-200 underline-offset-4">
                        <button className="text-sm font-normal text-[#0A2C5A] hover:text-[#D4AF37] transition-colors">
                          Edit
                        </button>
                        <button className="text-sm font-normal text-slate-400 hover:text-red-500 transition-colors">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* 5. Pagination Footer */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between px-2 pb-12">
        <p className="text-sm font-normal text-[#94a3b8] ">
          Operational Registry Center ·
          <span className="text-[#0A2C5A]">{total} Items</span> Sync
        </p>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-500 text-sm font-normal disabled:opacity-30 hover:bg-slate-50 transition-all shadow-sm"
          >
            Previous
          </button>
          <button
            disabled={page >= Math.ceil(total / PAGE_SIZE)}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded-xl bg-[#0A2C5A] text-[#D4AF37] text-sm font-normal disabled:opacity-40 shadow-xl shadow-[#0A2C5A]/10"
          >
            Next Page
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
