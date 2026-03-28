"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bus,
  FileText,
  Hotel,
  LogOut,
  List,
  BadgeDollarSign,
  Mail,
  Star,
  Menu,
  X,
  Settings,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  MapPin,
  Users,
} from "lucide-react";
const menuGroups = [
  {
    title: "OVERVIEW",
    items: [
      {
        path: "/admin/dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard size={14} />,
      },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      {
        path: "/admin/leads",
        label: "Inquiry Registry",
        icon: <List size={14} />,
      },
      {
        path: "/admin/itinerary",
        label: "Trip Builder",
        icon: <MapPin size={14} />,
      },
      {
        path: "/admin/visa",
        label: "Visa Center",
        icon: <ShieldCheck size={14} />,
      },
      {
        path: "/admin/transport",
        label: "Fleet Mgmt",
        icon: <Bus size={14} />,
      },
      { path: "/admin/hotels", label: "Hotels CRM", icon: <Hotel size={14} /> },
    ],
  },
  {
    title: "RELATIONS & B2B",
    items: [
      {
        path: "/admin/clients",
        label: "Clients Database",
        icon: <Users size={14} />,
      },
      {
        path: "/admin/vendors",
        label: "Supplier Network",
        icon: <Settings size={14} />,
      },
    ],
  },
  {
    title: "FINANCIALS",
    items: [
      {
        path: "/admin/invoice",
        label: "Invoice Engine",
        icon: <FileText size={14} />,
      },
      {
        path: "/admin/pricing",
        label: "Pricing Rules",
        icon: <BadgeDollarSign size={14} />,
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        path: "/admin/blogs",
        label: "Content Manager",
        icon: <BookOpen size={14} />,
      },
    ],
  },
];
export default function AdminSidebar({
  mobileOnly = false,
}: {
  mobileOnly?: boolean;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-[#0A2C5A] text-white shadow-2xl relative overflow-hidden">
      {/* Subtle background glow for premium feel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Small, Professional Branding */}
      <div className="px-6 py-8 border-b border-white/10 flex items-center gap-3 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
          <Bus size={18} className="text-[#D4AF37]" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white leading-none tracking-wide">
            Barkat Travel
          </span>
          <span className="text-[10px] font-medium text-[#D4AF37] mt-1 tracking-[0.15em] uppercase">
            Administration
          </span>
        </div>
      </div>
      
      {/* Navigation: Compact, Clear, Categories */}
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto scrollbar-hide relative z-10">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <p className="px-3 text-[10px] font-semibold text-slate-400/80 uppercase tracking-widest mb-3">
              {group.title}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                      isActive 
                        ? "bg-[#D4AF37] text-[#0A2C5A] shadow-lg shadow-[#D4AF37]/20" 
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span
                      className={`transition-colors ${isActive ? "text-[#0A2C5A]" : "text-slate-400 group-hover:text-[#D4AF37]"}`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      
      {/* Footer Branding: Small & Clean */}
      <div className="p-4 border-t border-white/10 flex flex-col gap-3 relative z-10 bg-black/10">
        <div className="px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center flex items-center justify-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
           <p className="text-[10px] font-medium text-slate-300">System Online v1.0</p>
        </div>
        <button className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-red-400 hover:bg-red-400/10 transition-all border border-transparent hover:border-red-400/20">
          <LogOut size={14} /> Session Exit
        </button>
      </div>
    </div>
  );
  if (mobileOnly) {
    return (
      <>
        <button onClick={() => setIsOpen(true)} className="p-2 text-slate-500">
          <Menu size={20} />
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-[100] bg-[#0A2C5A]/20 backdrop-blur-sm">
            <div className="w-[80vw] h-full shadow-2xl relative animate-in slide-in-from-left duration-300 bg-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 -right-10 p-2 bg-white rounded-full text-[#0A2C5A] shadow-xl border border-slate-100"
              >
                <X size={20} />
              </button>
              {SidebarContent()}
            </div>
          </div>
        )}
      </>
    );
  }
  return SidebarContent();
}
