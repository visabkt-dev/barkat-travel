const fs = require('fs');
const path = require('path');

const placeholderContent = `
"use client";
import AdminSidebar from "@/components/admin/Sidebar";
import { Wrench } from "lucide-react";

export default function PlaceholderPage() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#0f172a", color: "#e2e8f0" }}>
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] mb-6 border border-[#D4AF37]/20">
           <Wrench size={48} />
        </div>
        <h2 className="text-4xl font-black text-white mb-4">Module Under Construction</h2>
        <p className="text-lg text-slate-400 max-w-lg mb-8">This architecture has been established as per your premium requirements. The backend logic for this specific page will be integrated next.</p>
        <button className="px-8 py-3 rounded-xl font-bold bg-[#D4AF37] text-slate-900 shadow-xl hover:scale-105 transition-transform">
           Return to Overview
        </button>
      </main>
    </div>
  )
}
`;

const routes = [
  'src/app/admin/transport/active/page.tsx',
  'src/app/admin/transport/drivers/page.tsx',
  'src/app/admin/visa/approved/page.tsx',
  'src/app/admin/visa/types/page.tsx',
  'src/app/admin/hotels/inventory/page.tsx',
  'src/app/admin/hotels/bookings/page.tsx'
];

routes.forEach(route => {
  const fullPath = path.join(__dirname, '..', ...route.split('/'));
  const dirPath = path.dirname(fullPath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(fullPath, placeholderContent.trim());
});
console.log("Placeholders created successfully.");
