"use client";
import AdminSidebar from "@/components/admin/Sidebar";
import { DoorOpen, Plus, Search, Filter } from "lucide-react";
export default function HotelInventory() {
  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: "#0f172a", color: "#e2e8f0" }}
    >
      <AdminSidebar />
      <main className="flex-1 p-8 w-full" style={{ paddingLeft: "18rem" }}>
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-3xl font-normal text-white mb-2">
              Hotel Properties Database
            </p>
            <p className="text-sm text-slate-400">
              Manage hotel partnerships, basic info, and images
            </p>
          </div>
          <button className="px-6 py-2.5 rounded-xl font-normal bg-[#D4AF37] text-[#0A2C5A] flex items-center gap-2 transition-transform hover:scale-105">
            <Plus size={16} /> Add New
          </button>
        </header>
        <div className="bg-[#1e293b] p-4 rounded-2xl border border-white/10 mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search records..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] text-white"
            />
          </div>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10">
            <Filter size={16} /> Filter
          </button>
        </div>
        <div className="bg-[#1e293b] rounded-2xl border border-white/10 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-6 py-4 text-xs font-normal text-[#D4AF37]">
                    Hotel Name
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-normal text-[#D4AF37]">
                    City
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-normal text-[#D4AF37]">
                    Star Rating
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-normal text-[#D4AF37]">
                    Contact Person
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-normal text-[#D4AF37]">
                    Status
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-normal text-[#D4AF37]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-slate-500 mb-4">
                        <DoorOpen size={24} />
                      </div>
                      <p className="font-normal">No records found</p>
                      <p className="text-sm mt-1">
                        Click 'Add New' to create the first entry.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
