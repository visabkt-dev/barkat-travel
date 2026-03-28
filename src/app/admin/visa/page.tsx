"use client";
import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Search,
  RefreshCw,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Plus,
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
  blue: "#3b82f6",
  text: "#e2e8f0",
};
export default function VisaManagement() {
  const [visas, setVisas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = new URLSearchParams({
        page: page.toString(),
        q: search,
        status: statusFilter,
      });
      const res = await fetch(`/api/admin/visa?${p}`);
      const json = await res.json();
      setVisas(json.data || []);
      setTotal(json.count || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter]);
  useEffect(() => {
    load();
  }, [load]);
  const handleDelete = async (id: string) => {
    if (!confirm("Delete record?")) return;
    await fetch("/api/admin/visa", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    load();
  };
  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <p className="text-3xl font-normal text-white ">Visa Center</p>
          <p className="text-sm font-normal text-slate-500 mt-1">
            Application Monitoring & Quotas
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={16}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Passport / Name..."
              className="w-full md:w-64 bg-[#0A2C5A] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-gold transition-all shadow-lg"
            />
          </div>
          <button className="px-6 py-2.5 rounded-xl font-normal bg-gold text-[#0A2C5A] flex items-center gap-2 shadow-[0_8px_24px_-5px_rgba(212,175,55,0.4)] active:scale-95 transition-all">
            <Plus size={16} /> Mark Approved
          </button>
        </div>
      </div>
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="p-6 rounded-3xl bg-[#0A2C5A] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all"></div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-400 mb-4 shadow-sm">
            <FileText size={20} />
          </div>
          <p className="text-3xl font-normal text-white mb-1">{total}</p>
          <p className="text-sm text-slate-500 font-normal">Visa Requests</p>
        </div>
        <div className="p-6 rounded-3xl bg-[#0A2C5A] border border-white/5 shadow-2xl relative overflow-hidden group col-span-1">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-0 group-hover:opacity-100 transition-all"></div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10 text-green-500 mb-4 shadow-sm">
            <ShieldCheck size={20} />
          </div>
          <p className="text-3xl font-normal text-white mb-1">98.5%</p>
          <p className="text-sm text-slate-500 font-normal">Success Rate</p>
        </div>
        <div className="p-6 rounded-3xl bg-[#0A2C5A] border border-white/5 shadow-2xl col-span-2 flex flex-col justify-center">
          <p className="text-sm font-normal text-slate-500 mb-4 opacity-50">
            Filter Process Pipeline
          </p>
          <div className="flex gap-2">
            {["all", "pending", "processing", "approved", "rejected"].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-4 py-2 rounded-xl text-sm font-normal transition-all ${statusFilter === s ? "bg-gold text-[#0A2C5A] shadow-lg" : "bg-white/5 text-slate-400 border border-white/5"}`}
                >
                  {s}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
      {/* TABLE */}
      <div className="bg-[#1e293b] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-sm font-normal text-gold">
                  Applicant / Passport
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold">
                  Type / Nationality
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={4} className="py-20 text-center">
                    <Loader2 className="animate-spin mx-auto text-gold" />
                  </td>
                </tr>
              ) : (
                visas.map((visa) => (
                  <tr
                    key={visa.id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <p className="text-sm font-normal text-white">
                        {visa.name || "Global Visa"}
                      </p>
                      <p className="text-xs text-slate-500 font-mono ">
                        {visa.passport_number || "P-000000"}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-xs font-normal text-slate-400 ">
                        {visa.visa_type || "Umrah"}
                      </p>
                      <p className="text-sm text-slate-500 font-normal">
                        {visa.nationality || "INTL"}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-sm font-normal ${visa.status === "approved" ? "bg-green-500/10 text-green-500" : "bg-gold/10 text-gold"}`}
                      >
                        {visa.status || "Applied"}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all">
                        <button className="p-2 rounded-lg bg-white/5 text-gold hover:bg-gold/10">
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(visa.id)}
                          className="p-2 rounded-lg bg-white/5 text-red-500 hover:bg-red-500/10"
                        >
                          <Trash2 size={14} />
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
    </AdminLayout>
  );
}
