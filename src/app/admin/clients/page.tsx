"use client";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Users,
  Search,
  Filter,
  Phone,
  Mail,
  FileText,
  MapPin,
  Clock,
  Edit2,
  Archive,
  Star,
} from "lucide-react";
export default function ClientsDirectory() {
  const clients = [
    {
      name: "Suleman Ahmed",
      type: "B2C Elite",
      phone: "+44 7911 123456",
      email: "suleman.ahmed@example.com",
      ltv: "£ 14,500",
      trips: 3,
      last: "Executive Umrah (Nov 25)",
      status: "Active",
    },
    {
      name: "Zainab Ali",
      type: "B2C Standard",
      phone: "+92 300 1234567",
      email: "zainab.ali99@xyz.com",
      ltv: "£ 2,100",
      trips: 1,
      last: "Economy Umrah (Feb 26)",
      status: "Idle",
    },
    {
      name: "Global Travel Center",
      type: "B2B Partner",
      phone: "+971 50 9876543",
      email: "partners@gtcenter.io",
      ltv: "£ 45,000",
      trips: 12,
      last: "Group Visa App (Mar 26)",
      status: "Active",
    },
  ];
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div className="space-y-0.5">
          <p className="text-xl font-normal text-[#0A2C5A] ">
            Global Clients Database
          </p>
          <p className="text-sm font-normal text-slate-400">
            Total Registered Profiles: 1,452
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0A2C5A] text-[#D4AF37] font-normal text-sm shadow-xl hover:scale-105 transition-all">
            <Users size={14} /> Add New Client
          </button>
        </div>
      </div>
      {/* Top Filters */}
      <div className="bg-white rounded-[24px] border border-slate-100 p-2 shadow-sm mb-6 flex flex-wrap gap-2">
        <div className="flex-1 min-w-[300px] flex items-center bg-slate-50 rounded-xl px-4 py-3">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search by Name, Email, or Telephone..."
            className="w-full bg-transparent border-none text-sm font-normal px-4 focus:outline-none placeholder-slate-300 text-[#0A2C5A]"
          />
        </div>
        <button className="px-6 py-3 bg-slate-50 rounded-xl text-sm font-normal text-slate-500 hover:text-[#0A2C5A] flex items-center gap-2 transition-colors">
          <Filter size={14} /> B2B Partners
        </button>
        <button className="px-6 py-3 bg-slate-50 rounded-xl text-sm font-normal text-slate-500 hover:text-[#0A2C5A] flex items-center gap-2 transition-colors">
          <Star size={14} /> Elite VIPs
        </button>
      </div>
      {/* Client Registry */}
      <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-slate-100">
              <th className="px-8 py-4 text-sm font-normal text-slate-400 ">
                Client Identity / Contact
              </th>
              <th className="px-6 py-4 text-sm font-normal text-slate-400 ">
                Profile Type
              </th>
              <th className="px-6 py-4 text-sm font-normal text-slate-400 ">
                Lifetime Value
              </th>
              <th className="px-6 py-4 text-sm font-normal text-slate-400 ">
                Last Activity
              </th>
              <th className="px-8 py-4 text-right text-sm font-normal text-slate-400 ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {clients.map((c, i) => (
              <tr key={i} className="hover:bg-slate-50/50 group transition-all">
                <td className="px-8 py-6">
                  <p className="text-[15px] font-normal text-[#0A2C5A] group-hover:text-blue-600 transition-colors ">
                    {c.name}
                  </p>
                  <div className="flex items-center gap-4 mt-1.5">
                    <span className="flex items-center gap-1 text-xs font-normal text-slate-400 ">
                      <Phone size={10} /> {c.phone}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-normal text-slate-400 ">
                      <Mail size={10} /> {c.email}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-normal ${c.type.includes("Elite") ? "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20" : c.type.includes("B2B") ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-slate-100 text-slate-600 border border-slate-200"}`}
                  >
                    {c.type}
                  </span>
                </td>
                <td className="px-6 py-6 border-l border-slate-50">
                  <p className="text-[15px] font-normal text-[#0A2C5A] leading-none">
                    {c.ltv}
                  </p>
                  <p className="text-sm font-normal text-slate-400 mt-1">
                    From {c.trips} Trips
                  </p>
                </td>
                <td className="px-6 py-6 border-l border-slate-50">
                  <div className="flex items-center gap-2">
                    <Clock
                      size={12}
                      className={
                        c.status === "Idle"
                          ? "text-orange-400"
                          : "text-slate-300"
                      }
                    />
                    <span className="text-sm font-normal text-slate-600 ">
                      {c.last}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-slate-400 hover:text-[#0A2C5A] bg-white border border-slate-200 shadow-sm rounded-lg transition-colors tooltip"
                      title="Edit Profile"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button
                      className="p-2 text-slate-400 hover:text-blue-600 bg-white border border-slate-200 shadow-sm rounded-lg transition-colors tooltip"
                      title="View Invoices"
                    >
                      <FileText size={12} />
                    </button>
                    <button
                      className="p-2 text-slate-400 hover:text-red-600 bg-white border border-slate-200 shadow-sm rounded-lg transition-colors tooltip"
                      title="Archive Client"
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
