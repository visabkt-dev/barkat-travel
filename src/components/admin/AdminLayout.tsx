"use client";
import AdminSidebar from "./Sidebar";
import { ReactNode } from "react";
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans selection:bg-[#2563eb]/20 overflow-x-hidden">
      {/* SIDEBAR: - Premium Royal Blue Theme */}
      <div className="hidden lg:block w-[280px] flex-shrink-0 h-screen sticky top-0 z-[60] shadow-2xl">
        <AdminSidebar />
      </div>
      {/* MAIN CONTENT: - Structured Grid with High-Visual Padding */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header Top Fixed */}
        <div className="lg:hidden flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white sticky top-0 z-[50]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0A2C5A] text-[#D4AF37] flex items-center justify-center font-bold text-xs shadow-inner">
              B
            </div>
            <p className="text-[#0A2C5A] font-semibold text-sm tracking-wide">Barkat Travel</p>
          </div>
          <AdminSidebar mobileOnly />
        </div>
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1700px] mx-auto p-4 md:p-8 lg:p-12 animate-in fade-in duration-700">
            {children}
          </div>
        </main>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap");
        body {
          font-family:
            "Outfit",
            -apple-system,
            blinkmacsystemfont,
            "Segoe UI",
            roboto,
            oxygen,
            ubuntu,
            cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;
          color: #0f172a;
          -webkit-font-smoothing: antialiased;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        } /* Modern Sheet / Box Management */
        .sleek-card {
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: 1.5rem;
          box-shadow: 0 4px 20px -1px rgba(0, 0, 0, 0.02);
        }
        .sleek-table-header {
          background-color: #f8fafc;
          border-bottom: 1px solid #f1f5f9;
          padding: 1rem 1.5rem;
          font-size: 11px;
          text-transform:;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
}
