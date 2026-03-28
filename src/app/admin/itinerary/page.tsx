"use client";
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Plus,
  Search,
  MapPin,
  Calendar,
  Trash2,
  FileText,
  Send,
  Clock,
  Briefcase,
  ChevronRight,
  Settings,
  UploadCloud,
} from "lucide-react";
export default function TripBuilder() {
  const [days, setDays] = useState([
    {
      day: 1,
      title: "Arrival at Jeddah & Transfer to Makkah",
      desc: "Private GMC Transfer. Check-in at Voco Makkah.",
    },
    {
      day: 2,
      title: "Umrah Performance & Rest",
      desc: "Guided Umrah with Muallim. Rest of the day free for prayers.",
    },
  ]);
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div className="space-y-0.5">
          <p className="text-xl font-normal text-[#0A2C5A] ">
            Itinerary & Quotation Builder
          </p>
          <p className="text-sm font-normal text-slate-400">
            Design Custom B2C / B2B Packages
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-[#0A2C5A] border border-slate-200 font-normal text-sm hover:text-[#D4AF37] transition-all">
            <FileText size={14} /> Preview PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0A2C5A] text-[#D4AF37] font-normal text-sm shadow-xl hover:scale-105 transition-all">
            <Send size={14} /> Publish Link
          </button>
        </div>
      </div>
      {/* Top Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-center">
          <p className="text-xs font-normal text-slate-400 mb-4">
            Package Metadata
          </p>
          <input
            type="text"
            placeholder="e.g. 15 Days Premium Umrah Package (Family of 4)"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-normal text-[#0A2C5A] focus:outline-none focus:border-[#0A2C5A] transition-colors"
            defaultValue="14 Days Executive Umrah Package"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <Calendar
                size={14}
                className="absolute top-3 left-4 text-slate-400"
              />
              <input
                type="text"
                placeholder="Travel Dates"
                defaultValue="15 Ramadan - 30 Ramadan"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-normal text-[#0A2C5A] focus:outline-none focus:border-[#0A2C5A] transition-colors "
              />
            </div>
            <div className="relative">
              <Briefcase
                size={14}
                className="absolute top-3 left-4 text-slate-400"
              />
              <input
                type="text"
                placeholder="Flight PNR / Airline"
                defaultValue="Saudi Airlines (SV-734)"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-normal text-[#0A2C5A] focus:outline-none focus:border-[#0A2C5A] transition-colors "
              />
            </div>
          </div>
        </div>
        <div className="bg-[#0A2C5A] rounded-2xl border border-[#0A2C5A] p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div>
            <p className="text-xs font-normal text-[#D4AF37] mb-2 opacity-80">
              Total Quotation
            </p>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-normal text-white">£ 4,250</p>
              <p className="text-sm font-normal text-slate-400 mb-1.5">GBP</p>
            </div>
          </div>
          <div>
            <button className="w-full flex justify-between items-center px-4 py-3 rounded-xl bg-[#0A2C5A] text-white text-sm font-normal hover:bg-slate-700 transition-colors border border-slate-700">
              Edit Cost Breakdown <Settings size={14} />
            </button>
          </div>
        </div>
      </div>
      {/* Days Pipeline */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 px-2">
          <p className="text-sm font-normal text-slate-400 ">
            Itinerary Timeline
          </p>
          <p className="text-sm font-normal text-slate-400 ">
            {days.length} Days Planned
          </p>
        </div>
        <div className="space-y-3">
          {days.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm group hover:border-[#0A2C5A] transition-all flex gap-4 pr-6 relative overflow-hidden"
            >
              <div className="w-1.5 absolute left-0 top-0 bottom-0 bg-slate-100 group-hover:bg-[#D4AF37] transition-colors"></div>
              <div className="pl-4 flex flex-col justify-center items-center px-4 border-r border-slate-50">
                <p className="text-xs font-normal text-slate-400 leading-none mb-1">
                  Day
                </p>
                <p className="text-2xl font-normal text-[#0A2C5A] leading-none">
                  {d.day}
                </p>
              </div>
              <div className="flex-1 py-1">
                <input
                  type="text"
                  className="w-full text-sm font-normal text-[#0A2C5A] bg-transparent focus:outline-none mb-1"
                  defaultValue={d.title}
                />
                <input
                  type="text"
                  className="w-full text-sm font-normal text-slate-500 bg-transparent focus:outline-none"
                  defaultValue={d.desc}
                />
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-slate-400 hover:text-[#0A2C5A] bg-slate-50 rounded-lg transition-colors">
                  <UploadCloud size={14} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-lg transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() =>
              setDays([...days, { day: days.length + 1, title: "", desc: "" }])
            }
            className="w-full bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 py-4 text-sm font-normal text-slate-400 transition-all"
          >
            <Plus size={14} /> Add Next Day
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-8 flex items-center justify-between px-2 pb-20">
        <p className="text-sm font-normal text-slate-400 ">
          Trip Engine ·
          <span className="text-[#0A2C5A]">Barkat Travel Global</span>
        </p>
      </div>
    </AdminLayout>
  );
}
