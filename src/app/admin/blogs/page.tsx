"use client";
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Plus,
  Search,
  Filter,
  Pencil,
  Trash2,
  Globe,
  Clock,
  Calendar,
  Eye,
  BookOpen,
  MoreHorizontal,
  User,
  RefreshCw,
} from "lucide-react"; // ─── Reference Data (Matching Site Blog) ───────────────────────────────────
const INITIAL_BLOGS = [
  {
    id: 1,
    title: "How to travel from Doha to Makkah in 2026?",
    date: "March 10, 2026",
    cat: "Transport Guide",
    views: 1240,
    status: "Published",
  },
  {
    id: 2,
    title: "What are the best hotels near Haram for families?",
    date: "March 05, 2026",
    cat: "Hotel Review",
    views: 890,
    status: "Published",
  },
  {
    id: 3,
    title: "How to apply for an Umrah visa as a Qatar resident?",
    date: "Feb 28, 2026",
    cat: "Visa Advice",
    views: 2100,
    status: "Published",
  },
  {
    id: 4,
    title: "What is the best route for a Doha to Riyadh road trip?",
    date: "Feb 20, 2026",
    cat: "Transport Guide",
    views: 750,
    status: "Draft",
  },
];
export default function BlogManager() {
  const [blogs] = useState(INITIAL_BLOGS);
  return (
    <AdminLayout>
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="space-y-1">
          <p className="text-3xl font-normal text-[#0f172a] ">
            Blogs & Newsroom
          </p>
          <p className="text-sm text-[#64748b] font-normal leading-relaxed">
            Official Knowledge Center Management · Cluster Marketing
          </p>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 rounded-[1.5rem] bg-[#0f172a] text-[#D4AF37] font-normal text-[13px] shadow-2xl shadow-[#0A2C5A]/20 hover:scale-[1.03] active:scale-95 transition-all">
          <Plus size={18} strokeWidth={3} /> CREATE NEW ARTICLE
        </button>
      </div>
      {/* ── Filters Bar ── */}
      <div className="bg-white p-3 rounded-[24px] border border-slate-100 flex flex-wrap items-center gap-4 mb-8 shadow-sm">
        <div className="relative flex-1 min-w-[300px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by title, category, or author..."
            className="w-full bg-[#f8fafc] border border-slate-100/50 rounded-[18px] pl-12 pr-4 py-3.5 text-[14px] text-[#0f172a] font-normal focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0A2C5A]/5"
          />
        </div>
        <select className="px-6 py-3.5 rounded-[18px] bg-white border border-slate-200 text-[15px] font-normal text-[#0f172a] cursor-pointer appearance-none min-w-[160px]">
          <option>All Categories</option> <option>Transport Guide</option>
          <option>Hotel Review</option>
        </select>
        <button className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-[#0f172a] hover:text-[#D4AF37] transition-all shadow-sm">
          <RefreshCw size={18} />
        </button>
      </div>
      {/* ── Registry Table (THE SHEET) ── */}
      <div className="bg-white rounded-[28px] border border-slate-100 overflow-hidden shadow-sm shadow-slate-200/50">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-slate-100">
                <th className="px-10 py-5 text-sm font-normal text-[#94a3b8] ">
                  Article Title / Knowledge Class
                </th>
                <th className="px-8 py-5 text-sm font-normal text-[#94a3b8] ">
                  Publication Date
                </th>
                <th className="px-8 py-5 text-sm font-normal text-[#94a3b8] text-center">
                  Analytic Views
                </th>
                <th className="px-8 py-5 text-sm font-normal text-[#94a3b8] text-center">
                  Status
                </th>
                <th className="px-10 py-5 text-right text-sm font-normal text-[#94a3b8] ">
                  Registry Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {blogs.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-slate-50/50 transition-all group"
                >
                  <td className="px-10 py-7">
                    <p className="text-[14px] font-normal text-[#0f172a] hover:text-[#D4AF37] cursor-pointer transition-colors leading-relaxed mb-1">
                      {b.title}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-sm font-normal text-[#94a3b8] ">
                        <BookOpen size={12} className="text-[#D4AF37]" />
                        {b.cat}
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-sm font-normal text-slate-300 ">
                        Author: Syed Muzammil
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-normal text-[#0f172a]">
                        {b.date}
                      </span>
                      <span className="text-sm text-[#94a3b8] font-normal mt-0.5">
                        Approved in KSA Hive
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-7 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm font-normal">
                      <Globe size={12} /> {b.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-8 py-7 text-center">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-normal border inline-block ${b.status === "Published" ? "bg-green-50 text-green-600 border-green-100" : "bg-slate-50 text-slate-400 border-slate-100"}`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-10 py-7 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 xl:opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="p-3 rounded-2xl bg-[#0f172a] text-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#0A2C5A]/10">
                        <Pencil size={16} />
                      </button>
                      <button className="p-3 rounded-2xl bg-white text-[#0A2C5A] border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                        <Eye size={16} />
                      </button>
                      <button className="p-3 rounded-2xl bg-red-50 text-red-500 border border-red-100 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* ── Footer ── */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-2 gap-4 pb-20">
        <p className="text-sm font-normal text-[#94a3b8] leading-loose">
          Showing
          <span className="text-[#0f172a]">{blogs.length} Active Articles</span>
          from the Barkat Travel Cluster Center
        </p>
        <div className="flex gap-2">
          <button className="p-3.5 rounded-2xl bg-white border border-slate-200 text-[#0f172a] hover:bg-slate-50 transition-all shadow-sm">
            <Calendar size={20} />
          </button>
          <button className="px-6 py-3.5 rounded-2xl bg-[#0f172a] text-[#D4AF37] font-normal text-sm shadow-xl hover:scale-105 transition-all">
            ARCHIVE AUDIT
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
