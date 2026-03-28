"use client";
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  FileText,
  Download,
  Printer,
  Plus,
  Trash2,
  Mail,
  Save,
  Search,
  Calendar,
  User,
  Bus,
  MapPin,
  BadgePercent,
  DollarSign,
} from "lucide-react";
export default function InvoiceCreator() {
  const [items, setItems] = useState([
    { desc: "Transport: Doha to Makkah (VIP)", qty: 1, price: 1200 },
  ]);
  const total = items.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  return (
    <AdminLayout>
      {/* ── Header Área ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="space-y-1">
          <p className="text-3xl font-normal text-[#0f172a] ">
            Invoice Laboratory
          </p>
          <p className="text-sm text-[#64748b] font-normal leading-relaxed">
            Financial Registry v1.2 · Official Barkat Travel Billing Engine
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0f172a] text-[#D4AF37] font-normal text-[13px] shadow-lg shadow-[#0A2C5A]/10 hover:scale-[1.03] transition-all">
            <Printer size={18} /> PRINT OFFICIAL PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-[#0f172a] font-normal text-[13px] hover:bg-slate-50 transition-all shadow-sm">
            <Mail size={18} /> SEND TO CLIENT
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 pb-20">
        {/* LEFT: INVOICE DETAILS FORM */}
        <div className="xl:col-span-2 space-y-8">
          {/* 1. Client Info Section */}
          <div className="bg-white p-10 rounded-[28px] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-slate-50 rounded-xl text-[#0A2C5A] border border-slate-100">
                <User size={20} />
              </div>
              <p className="text-lg font-normal text-[#0f172a] ">
                Recipient Analytics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-normal text-[#94a3b8] tracking-[0.2em]">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  defaultValue="Burhan uddin"
                  className="w-full bg-[#f8fafc] border border-slate-100 rounded-[18px] px-5 py-3.5 text-sm text-[#0f172a] font-normal placeholder:text-slate-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0A2C5A]/5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-normal text-[#94a3b8] tracking-[0.2em]">
                  Contact Reference
                </label>
                <input
                  type="text"
                  defaultValue="burhanuddninmja1@gmail.com"
                  className="w-full bg-[#f8fafc] border border-slate-100 rounded-[18px] px-5 py-3.5 text-sm text-[#0f172a] font-normal placeholder:text-slate-300 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#0A2C5A]/5"
                />
              </div>
            </div>
          </div>
          {/* 2. Line Items Table (THE SHEET) */}
          <div className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden pb-8">
            <div className="bg-[#f8fafc] px-10 py-5 border-b border-slate-100 flex items-center justify-between">
              <p className="text-sm font-normal text-[#0f172a] ">
                Service Components Registry
              </p>
              <button
                onClick={() =>
                  setItems([...items, { desc: "", qty: 1, price: 0 }])
                }
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-normal text-[#0f172a] hover:bg-slate-50 shadow-sm transition-all "
              >
                <Plus size={14} /> APPEND ROW
              </button>
            </div>
            <div className="p-4 md:p-10 space-y-6">
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center gap-6 group"
                >
                  <div className="flex-1 space-y-1">
                    <label className="text-sm font-normal text-slate-300 ml-1 md:hidden">
                      Service Description
                    </label>
                    <input
                      type="text"
                      placeholder="Route / Visa / Accomodation description..."
                      className="w-full bg-[#f8fafc] border border-slate-100 rounded-[18px] px-6 py-3.5 text-sm font-normal text-[#0f172a] focus:outline-none transition-all focus:bg-white"
                      value={it.desc}
                      onChange={(e) => {
                        const n = [...items];
                        n[idx].desc = e.target.value;
                        setItems(n);
                      }}
                    />
                  </div>
                  <div className="w-24 space-y-1">
                    <label className="text-sm font-normal text-slate-300 ml-1 md:hidden">
                      QTY
                    </label>
                    <input
                      type="number"
                      className="w-full bg-[#f8fafc] border border-slate-100 rounded-[18px] px-4 py-3.5 text-sm font-normal text-[#0f172a] focus:outline-none text-center"
                      value={it.qty}
                      onChange={(e) => {
                        const n = [...items];
                        n[idx].qty = parseInt(e.target.value);
                        setItems(n);
                      }}
                    />
                  </div>
                  <div className="w-40 space-y-1">
                    <label className="text-sm font-normal text-slate-300 ml-1 md:hidden">
                      Price (SAR)
                    </label>
                    <input
                      type="number"
                      className="w-full bg-[#f8fafc] border border-slate-100 rounded-[18px] px-6 py-3.5 text-sm font-normal text-[#0f172a] focus:outline-none"
                      value={it.price}
                      onChange={(e) => {
                        const n = [...items];
                        n[idx].price = parseFloat(e.target.value);
                        setItems(n);
                      }}
                    />
                  </div>
                  <button
                    onClick={() => setItems(items.filter((_, i) => i !== idx))}
                    className="p-3.5 rounded-2xl bg-red-50 text-red-500 border border-red-100 hover:bg-red-500 hover:text-white transition-all xl:opacity-0 group-hover:opacity-100 shadow-sm"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT: SUMMARY & ACTIONS */}
        <div className="space-y-8">
          <div className="bg-[#0f172a] p-10 rounded-[30px] shadow-2xl shadow-[#0A2C5A]/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <DollarSign size={100} fill="white" />
            </div>
            <div className="relative z-10 space-y-10">
              <div>
                <p className="text-sm font-normal text-[#D4AF37] mb-2 opacity-60 ">
                  Financial Summary
                </p>
                <p className="text-4xl font-normal text-white">
                  SAR {total.toLocaleString()}
                </p>
              </div>
              <div className="space-y-4 pt-10 border-t border-white/5">
                <div className="flex items-center justify-between text-sm font-normal text-[#64748b] tracking-wider">
                  <span>GROSS TOTAL</span>
                  <span className="text-white">SAR {total}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-normal text-[#64748b] tracking-wider">
                  <span>TAX EXEMPT (0%)</span>
                  <span className="text-white">SAR 0</span>
                </div>
                <div className="flex items-center justify-between text-lg font-normal text-white pt-4 border-t border-white/5">
                  <span className="text-[#D4AF37]">NET REVENUE</span>
                  <span>SAR {total}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[28px] border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-normal text-[#0A2C5A] ">
                Master Synchronizer
              </span>
            </div>
            <p className="text-[15px] text-slate-400 font-normal leading-loose">
              Invoices generated are automatically archived in the global
              business history. Please ensure all tax fields comply with local
              KSA/Qatar regulations before exporting.
            </p>
            <button className="w-full py-5 rounded-[22px] bg-[#D4AF37] text-[#0A2C5A] font-normal text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-yellow-600/10">
              ENCODE & ARCHIVE RECORD
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
