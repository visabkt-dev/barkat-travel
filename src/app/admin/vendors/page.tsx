"use client";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Building2,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Clock,
  Edit2,
  Archive,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
export default function SupplierNetwork() {
  const vendors = [
    {
      name: "Voco Makkah Hotel",
      type: "Accommodation",
      contact: "Zaid Bin Haris",
      phone: "+966 50 1234567",
      email: "sales@voco.sa",
      volume: "£ 145,000 YTD",
      pmt: "Credit (30 Days)",
      status: "Verified",
    },
    {
      name: "Saudi Arabian Airlines",
      type: "Aviation/Flight",
      contact: "B2B Desk",
      phone: "+966 9200 22222",
      email: "b2b@saudia.com",
      volume: "£ 312,000 YTD",
      pmt: "Pre-Paid",
      status: "Verified",
    },
    {
      name: "Al-Haramain Transfers",
      type: "Ground Transport",
      contact: "Mohammad Ali",
      phone: "+966 55 9876543",
      email: "info@haramaint.com",
      volume: "£ 24,000 YTD",
      pmt: "Credit (15 Days)",
      status: "Active",
    },
  ];
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-[#0A2C5A] tracking-tight">
            Supplier Network
          </h1>
          <p className="text-sm text-slate-500">
            B2B Vendor Management & Contracting
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-[#0A2C5A] font-medium text-sm hover:bg-slate-100 transition-all">
            <Filter size={16} className="text-slate-400"/> Filter
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A2C5A] text-[#D4AF37] font-medium text-sm shadow-md shadow-[#0A2C5A]/20 hover:scale-105 active:scale-95 transition-all">
            <Building2 size={16} /> Onboard Vendor
          </button>
        </div>
      </div>
      {/* Top Filters */}
      <div className="bg-white rounded-3xl border border-slate-100 p-2 shadow-sm mb-6 flex flex-wrap gap-2">
        <div className="flex-1 min-w-[300px] flex items-center bg-slate-50 rounded-2xl px-5 py-3.5 border border-transparent focus-within:border-[#0A2C5A]/20 focus-within:bg-white transition-all">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search Supplier Name, Contact..."
            className="w-full bg-transparent border-none text-sm text-[#0A2C5A] px-4 focus:outline-none placeholder-slate-400 font-medium"
          />
        </div>
        <button className="px-6 py-3.5 bg-slate-50 rounded-2xl text-sm font-medium text-slate-500 hover:text-[#0A2C5A] flex items-center gap-2 transition-colors border border-transparent hover:border-slate-200 hover:bg-white">
          <Filter size={16} /> Service Type
        </button>
      </div>
      {/* Vendors Registry */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-8 py-4 text-sm font-normal text-slate-400 ">
                Supplier Entity
              </th>
              <th className="px-6 py-4 text-sm font-normal text-slate-400 ">
                Category
              </th>
              <th className="px-6 py-4 text-sm font-normal text-slate-400 ">
                Volume & Pmt Terms
              </th>
              <th className="px-6 py-4 text-sm font-normal text-slate-400 text-center">
                Trust Status
              </th>
              <th className="px-8 py-4 text-right text-sm font-normal text-slate-400 ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {vendors.map((v, i) => (
              <tr key={i} className="hover:bg-slate-50/50 group transition-all">
                <td className="px-8 py-6">
                  <p className="text-[15px] font-normal text-[#0A2C5A] group-hover:text-[#D4AF37] transition-colors ">
                    {v.name}
                  </p>
                  <div className="flex flex-col gap-1 mt-1.5 text-xs font-normal text-slate-400 ">
                    <span className="flex items-center gap-1.5">
                      <Phone size={10} /> {v.contact} / {v.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail size={10} /> {v.email}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="px-2.5 py-1 rounded-md text-xs font-normal bg-slate-100 text-slate-600 border border-slate-200">
                    {v.type}
                  </span>
                </td>
                <td className="px-6 py-6 border-l border-slate-50">
                  <p className="text-[15px] font-normal text-[#0A2C5A] leading-none">
                    {v.volume}
                  </p>
                  <p className="flex items-center gap-1 text-sm font-normal text-slate-400 mt-1.5">
                    <CreditCard size={10} /> {v.pmt}
                  </p>
                </td>
                <td className="px-6 py-6 border-l border-slate-50 text-center">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-normal ${v.status === "Verified" ? "text-green-600 bg-green-50 border border-green-100" : "text-blue-600 bg-blue-50 border border-blue-100"}`}
                  >
                    <ShieldCheck size={12} /> {v.status}
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-slate-400 hover:text-[#0A2C5A] bg-white border border-slate-200 shadow-sm rounded-lg transition-colors tooltip"
                      title="Edit Vendor"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button
                      className="p-2 text-slate-400 hover:text-red-600 bg-white border border-slate-200 shadow-sm rounded-lg transition-colors tooltip"
                      title="Archive Vendor"
                    >
                      <Archive size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
