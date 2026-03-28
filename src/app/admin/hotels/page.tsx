"use client";
import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Plus,
  Search,
  Filter,
  Hotel,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Trash2,
  Pencil,
  MoreHorizontal,
  LayoutGrid,
  List,
  RefreshCw,
  Star,
} from "lucide-react";
export default function HotelCRM() {
  const [activeTab, setActiveTab] = useState("pipeline");
  return (
    <AdminLayout>
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div className="space-y-0.5">
          <p className="text-xl font-normal text-[#0f172a] text-brand-gold">
            Hospitality CRM
          </p>
          <p className="text-sm font-normal text-[#94a3b8]">
            Operational Cluster: Makkah / Madinah Registry
          </p>
        </div>
        <div className="flex bg-slate-50 border border-slate-100 p-1 rounded-xl">
          {["pipeline", "calendar", "occupancy"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-normal transition-all ${activeTab === t ? "bg-[#0A2C5A] text-white shadow-xl shadow-[#0A2C5A]/10" : "text-slate-400 hover:text-[#0A2C5A]"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      {/* ── Metric Grid (COMPACT) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            title: "New Inquiries",
            val: 12,
            icon: <Clock size={16} />,
            color: "blue",
          },
          {
            title: "Pending Allocation",
            val: 4,
            icon: <LayoutGrid size={16} />,
            color: "orange",
          },
          {
            title: "Live check-ins",
            val: 45,
            icon: <CheckCircle size={16} />,
            color: "green",
          },
          {
            title: "Haram Proximity",
            val: "High",
            icon: <Star size={16} />,
            color: "gold",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-[#0A2C5A] transition-all"
          >
            <div>
              <p className="text-xs font-normal text-[#94a3b8] mb-1">
                {s.title}
              </p>
              <p className="text-lg font-normal text-[#0f172a] group-hover:text-gold transition-colors">
                {s.val}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-[#0A2C5A] group-hover:text-white text-slate-400 transition-all">
              {s.icon}
            </div>
          </div>
        ))}
      </div>
      {/* ── Pipeline View (THE SHEET) ── */}
      <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm shadow-slate-200/50">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-slate-100">
                <th className="px-8 py-4 text-sm font-normal text-[#94a3b8] ">
                  Inquiry Source / Name
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] ">
                  Property Target
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] text-center">
                  Dates Engine
                </th>
                <th className="px-6 py-4 text-sm font-normal text-[#94a3b8] text-center">
                  Inquiry Score
                </th>
                <th className="px-8 py-4 text-right text-sm font-normal text-[#94a3b8] ">
                  Registry Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                {
                  name: "Suleman Ahmed",
                  hotel: "Voco Makkah",
                  city: "Makkah",
                  from: "March 20",
                  to: "March 25",
                  status: "Hot",
                },
                {
                  name: "Irfan Khan",
                  hotel: "Lu'main Hotel",
                  city: "Madinah",
                  from: "April 01",
                  to: "April 10",
                  status: "Warm",
                },
              ].map((l, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50/50 group transition-all"
                >
                  <td className="px-8 py-6">
                    <p className="text-[15px] font-normal text-[#0f172a] group-hover:text-blue-500 transition-colors ">
                      {l.name}
                    </p>
                    <span className="text-xs font-normal text-[#94a3b8] mt-1 block leading-none">
                      Global Direct Lead
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#D4AF37]" />
                      <span className="text-sm font-normal text-[#0f172a]">
                        {l.hotel} ({l.city})
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-normal text-slate-500 ">
                      <Calendar size={12} /> {l.from} ➔ {l.to}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-normal ${l.status === "Hot" ? "bg-red-50 text-red-600 border border-red-100" : "bg-orange-50 text-orange-600 border border-orange-100"}`}
                    >
                      {l.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 xl:opacity-0 group-hover:opacity-100 transition-all font-normal text-sm text-slate-300">
                      <button className="hover:text-[#0A2C5A] border-b border-transparent hover:border-[#0A2C5A]">
                        Manage
                      </button>
                      <div className="w-1 h-1 rounded-full bg-slate-200" />
                      <button className="hover:text-red-500 border-b border-transparent hover:border-red-500">
                        Archive
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
      <div className="mt-8 flex items-center justify-between px-2 pb-20">
        <p className="text-sm font-normal text-[#94a3b8] ">
          Operational Pulse Integrated ·
          <span className="text-[#0A2C5A]">Barkat Travel Global</span>
        </p>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-[#D4AF37] rounded-xl text-sm font-normal transition-all hover:scale-[1.03] shadow-xl shadow-[#0A2C5A]/10">
          <RefreshCw size={14} /> Synchronize Data
        </button>
      </div>
    </AdminLayout>
  );
}
