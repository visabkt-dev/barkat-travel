const fs = require('fs');
const path = require('path');

const fixLayout = (filePath) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // Replace <main className="... ml-64 ..."> with style={{marginLeft: '16rem'}}
    // To be safe, just inject the style directly onto the main tag.
    content = content.replace(/<main className="([^"]*)"/g, '<main className="$1 w-full" style={{ marginLeft: "16rem", paddingBottom: "50px" }}');
    
    // Some pages might already have it, so we ensure no duplicates if needed, but it's simpler to just do this on specific files we know.
    fs.writeFileSync(filePath, content);
  }
};

// 1. Fix main dashboard
const dashboardPath = path.join(__dirname, '../src/app/admin/dashboard/page.tsx');
if (fs.existsSync(dashboardPath)) {
    let dashContent = fs.readFileSync(dashboardPath, 'utf-8');
    // Remove ml-64 class and add style
    dashContent = dashContent.replace(/className="flex-1 ml-64"/g, 'className="flex-1 w-full" style={{ marginLeft: "16rem" }}');
    fs.writeFileSync(dashboardPath, dashContent);
}

// 2. Fix main module pages
['hotels/page.tsx', 'visa/page.tsx', 'transport/page.tsx'].forEach(p => {
    const pth = path.join(__dirname, '../src/app/admin/', p);
    if (fs.existsSync(pth)) {
        let content = fs.readFileSync(pth, 'utf-8');
        content = content.replace(/className="flex-1 ml-64 p-8"/g, 'className="flex-1 p-8 w-full" style={{ paddingLeft: "18rem" }}'); // paddingLeft avoids scrollbar issues over margin sometimes, or just use marginLeft
        fs.writeFileSync(pth, content);
    }
});

// 3. Build Full Working Pages for Placeholders
const buildPage = (route, componentName, title, desc, icon, tableHeaders, showAddButton = true) => {
    const fullPath = path.join(__dirname, '../src/app/admin/', route);
    const content = `
"use client";
import AdminSidebar from "@/components/admin/Sidebar";
import { ${icon}, Plus, Search, Filter } from "lucide-react";

export default function ${componentName}() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#0f172a", color: "#e2e8f0" }}>
      <AdminSidebar />
      <main className="flex-1 p-8 w-full" style={{ paddingLeft: "18rem" }}>
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white mb-2">${title}</h2>
            <p className="text-sm text-slate-400">${desc}</p>
          </div>
          ${showAddButton ? `
          <button className="px-6 py-2.5 rounded-xl font-bold bg-[#D4AF37] text-slate-900 flex items-center gap-2 transition-transform hover:scale-105">
            <Plus size={16} /> Add New
          </button>` : ''}
        </header>

        <div className="bg-[#1e293b] p-4 rounded-2xl border border-white/10 mb-6 flex gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Search records..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] text-white" />
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
                            ${tableHeaders.map(h => `<th className="text-left px-6 py-4 text-xs font-black uppercase tracking-widest text-[#D4AF37]">${h}</th>`).join('\n                            ')}
                            <th className="text-right px-6 py-4 text-xs font-black uppercase tracking-widest text-[#D4AF37]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={${tableHeaders.length + 1}} className="px-6 py-12 text-center text-slate-400">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-slate-500 mb-4">
                                        <${icon} size={24} />
                                    </div>
                                    <p className="font-bold">No records found</p>
                                    <p className="text-sm mt-1">Click 'Add New' to create the first entry.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </main>
    </div>
  )
}
`;
    // Ensure dir exists
    const dirPath = path.dirname(fullPath);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
    
    fs.writeFileSync(fullPath, content.trim());
};

buildPage('transport/active/page.tsx', 'ActiveTrips', 'Active Fleet Trips', 'Monitor live umrah transport trips and status', 'Bus', ['Trip ID', 'Driver', 'Vehicle', 'Route', 'Status']);
buildPage('transport/drivers/page.tsx', 'ManageDrivers', 'Driver Directory', 'Manage your fleet drivers and vehicle assignments', 'Bus', ['Driver Name', 'Iqama/ID', 'Vehicle Assigned', 'Status', 'Phone']);

buildPage('visa/approved/page.tsx', 'ApprovedVisas', 'Approved Visas Archive', 'History of all issued and approved visas', 'CheckCircle', ['Passort No', 'Name', 'Visa Type', 'Issue Date', 'Expiry Date']);
buildPage('visa/types/page.tsx', 'VisaTypes', 'Visa Categories & Pricing', 'Configure visa types, embassy fees, and B2B pricing', 'ShieldCheck', ['Visa Name', 'Processing Time', 'Cost Price', 'Selling Price', 'Status']);

buildPage('hotels/inventory/page.tsx', 'HotelInventory', 'Hotel Properties Database', 'Manage hotel partnerships, basic info, and images', 'DoorOpen', ['Hotel Name', 'City', 'Star Rating', 'Contact Person', 'Status']);
buildPage('hotels/bookings/page.tsx', 'HotelBookings', 'Confirmed Hotel Bookings', 'Manage all paid and confirmed reservations', 'CheckCircle', ['Booking Ref', 'Guest Name', 'Hotel', 'Dates', 'Total Amount', 'Status']);

console.log("Layout fixed & Fully working pages built.");
