"use client";
import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Users,
  DollarSign,
  TrendingUp,
  RefreshCw,
  BarChart3,
  Activity,
  Briefcase,
  LayoutGrid,
  ArrowUpRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
export default function AnalyticsDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const fetchAnalytics = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/analytics`);
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);
  const m = data?.metrics || {};
  const c = data?.charts || {};
  const MetricCard = ({ title, val, icon, trend, highlight = false }: any) => (
    <div className={`relative rounded-3xl p-6 flex flex-col justify-between shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      highlight 
        ? "bg-gradient-to-br from-[#0A2C5A] to-[#123b73] border-[#0A2C5A] text-white" 
        : "bg-white border-slate-100 text-slate-800"
    }`}>
      {highlight && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      )}
      <div className="flex justify-between items-start mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
          highlight ? "bg-white/10 text-[#D4AF37]" : "bg-slate-50 border border-slate-100 text-[#0A2C5A]"
        }`}>
          {icon}
        </div>
        {trend && (
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
            highlight ? "bg-green-400/20 text-green-300" : "bg-green-50 text-green-600 border border-green-100"
          }`}>
            <TrendingUp size={12} /> {trend}
          </span>
        )}
      </div>
      <div>
        <p className={`text-sm mb-2 ${highlight ? "text-slate-300" : "text-slate-500"}`}>{title}</p>
        <p className={`text-3xl font-medium tracking-tight ${highlight ? "text-white" : "text-[#0A2C5A]"}`}>{val}</p>
      </div>
    </div>
  );
  return (
    <AdminLayout>
      {/* 1. Header: Professional & Rich */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0A2C5A] tracking-tight">Intelligence Center</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time performance analytics and global registry.</p>
        </div>
        <button
          onClick={fetchAnalytics}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-[#0A2C5A] text-sm font-medium shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
        >
          <RefreshCw size={14} className={loading ? "animate-spin text-[#D4AF37]" : "text-slate-400"} /> 
          Sync Data
        </button>
      </div>

      {/* 2. Rich Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <MetricCard
          title="Gross Inquiries"
          val={m.totalLeads || 0}
          icon={<Users size={18} />}
          trend="+12%"
          highlight={true}
        />
        <MetricCard
          title="Captured Revenue"
          val={`${m.totalRevenue || 0} SAR`}
          icon={<DollarSign size={18} />}
          trend="+8%"
        />
        <MetricCard
          title="Operational Pulse"
          val="14.8%"
          icon={<Activity size={18} />}
          trend="Stable"
        />
        <MetricCard
          title="Pending Missions"
          val={m.pendingVisas || 0}
          icon={<Briefcase size={18} />}
        />
      </div>

      {/* 3. Deep Analysis Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
            <div>
              <h2 className="text-lg font-medium text-[#0A2C5A]">Volume Projection</h2>
              <p className="text-sm text-slate-500 mt-1">Rolling 30-Day Analysis Strategy</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
              <ArrowUpRight size={18} />
            </div>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={c.leadsOverTime || []}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0A2C5A" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#0A2C5A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#94a3b8" fontSize={11} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A2C5A",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "12px",
                    color: "#fff",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Area type="monotone" dataKey="count" stroke="#0A2C5A" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm flex flex-col">
          <h2 className="text-lg font-medium text-[#0A2C5A] mb-2">Market Share</h2>
          <p className="text-sm text-slate-500 mb-8 pb-4 border-b border-slate-50">Sectoral Distribution Overview</p>

          <div className="space-y-6 flex-1">
            {Array.isArray(c.leadsByType) && c.leadsByType.map((t: any, i: number) => (
              <div key={t.type} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600 group-hover:text-[#0A2C5A] transition-colors">
                    {t.type}
                  </span>
                  <span className="text-sm font-medium text-[#0A2C5A] bg-slate-50 px-2 py-0.5 rounded-md">
                    {t.count}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-[#0A2C5A] group-hover:bg-[#D4AF37] transition-all duration-700 ease-out rounded-full"
                    style={{ width: `${Math.min(100, (t.count / (m.totalLeads || 1)) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100/50 flex flex-col justify-center items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                <LayoutGrid size={14} className="text-[#0A2C5A]"/>
             </div>
             <p className="text-xs text-slate-500 text-center">Registry Data Snapshot (Cluster Global)</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
