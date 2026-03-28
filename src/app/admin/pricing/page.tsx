"use client";
import { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  DollarSign,
  Plus,
  Search,
  RefreshCw,
  Pencil,
  Trash2,
  X,
  Save,
  Loader2,
  Car,
  ShieldCheck,
  Hotel,
} from "lucide-react"; // ─── Types ────────────────────────────────────────────────────────────────────
interface PricingRule {
  id: string;
  category: "Transport" | "Visa" | "Hotel" | string;
  route_name?: string;
  vehicle_type?: string;
  price_sar: number;
  is_active: boolean;
}
const C = {
  bg: "#0f172a",
  card: "#1e293b",
  border: "rgba(255,255,255,0.07)",
  gold: "#D4AF37",
  white: "#f8fafc",
  dim: "#94a3b8",
  green: "#22c55e",
  red: "#ef4444",
  text: "#e2e8f0",
};
export default function PricingManagement() {
  const [rules, setRules] = useState<PricingRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editRule, setEditRule] = useState<Partial<PricingRule> | null>(null);
  const [saving, setSaving] = useState(false);
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/pricing");
      const json = await res.json();
      setRules(json.data || []);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);
  const handleSave = async () => {
    if (!editRule) return;
    setSaving(true);
    try {
      const isNew = !editRule.id;
      await fetch("/api/admin/pricing", {
        method: isNew ? "POST" : "PUT",
        body: JSON.stringify(editRule),
        headers: { "Content-Type": "application/json" },
      });
      setEditRule(null);
      load();
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async (id: string) => {
    if (!confirm("Delete rule?")) return;
    await fetch("/api/admin/pricing", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    load();
  };
  const filteredRules = rules.filter((r) => {
    const matchesSearch =
      (r.route_name || "").toLowerCase().includes(search.toLowerCase()) ||
      (r.vehicle_type || "").toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || r.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <div>
          <p className="text-3xl font-normal text-white ">Pricing Master</p>
          <p className="text-sm font-normal text-slate-500 mt-1">
            Global Agency Rate Card
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={16}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search rates..."
              className="w-full md:w-64 bg-[#0A2C5A] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-gold transition-all shadow-lg"
            />
          </div>
          <button
            onClick={() =>
              setEditRule({
                category: "Transport",
                is_active: true,
                price_sar: 0,
              })
            }
            className="px-6 py-2.5 rounded-xl font-normal bg-gold text-[#0A2C5A] flex items-center gap-2 shadow-[0_8px_24px_-5px_rgba(212,175,55,0.4)] active:scale-95 transition-all"
          >
            <Plus size={16} /> New Rule
          </button>
        </div>
      </div>
      {/* CATEGORIES */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["all", "Transport", "Visa", "Hotel"].map((c) => (
          <button
            key={c}
            onClick={() => setCategoryFilter(c)}
            className={`px-5 py-2 rounded-xl text-sm font-normal transition-all ${categoryFilter === c ? "bg-gold text-[#0A2C5A] shadow-lg" : "bg-white/5 text-slate-500 hover:text-white"}`}
          >
            {c}
          </button>
        ))}
      </div>
      {/* TABLE */}
      <div className="bg-[#1e293b] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-sm font-normal text-gold">
                  Category
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold">
                  Route / Detail
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold">
                  Asset Class
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold text-right">
                  Standard Price
                </th>
                <th className="px-6 py-4 text-sm font-normal text-gold text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-20 text-center">
                    <Loader2 className="animate-spin mx-auto text-gold" />
                  </td>
                </tr>
              ) : filteredRules.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-20 text-center text-slate-500 font-normal "
                  >
                    No matching rates found
                  </td>
                </tr>
              ) : (
                filteredRules.map((rule) => (
                  <tr
                    key={rule.id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-normal flex items-center gap-2 w-fit ${rule.category === "Transport" ? "bg-blue-500/10 text-blue-400" : rule.category === "Visa" ? "bg-purple-500/10 text-purple-400" : "bg-green-500/10 text-green-400"}`}
                      >
                        {rule.category === "Transport" ? (
                          <Car size={10} />
                        ) : rule.category === "Visa" ? (
                          <ShieldCheck size={10} />
                        ) : (
                          <Hotel size={10} />
                        )}
                        {rule.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-normal text-white">
                        {rule.route_name || "GLOBAL"}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-xs font-normal text-slate-500 ">
                        {rule.vehicle_type || "ANY"}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <p className="text-sm font-normal text-green-400">
                        {rule.price_sar.toLocaleString()} SAR
                      </p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all">
                        <button
                          onClick={() => setEditRule(rule)}
                          className="p-2 rounded-lg bg-white/5 text-gold hover:bg-gold/10 transition-all"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(rule.id)}
                          className="p-2 rounded-lg bg-white/5 text-red-500 hover:bg-red-500/10 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* EDIT MODAL */}
      {editRule && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#0A2C5A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between">
              <p className="font-normal text-lg text-white">
                {editRule.id ? "Refine Rate" : "Anchor New Rate"}
              </p>
              <button
                onClick={() => setEditRule(null)}
                className="text-slate-500 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8 space-y-4">
              <div>
                <label className="text-sm font-normal text-slate-500 block mb-1.5">
                  Category
                </label>
                <select
                  value={editRule.category}
                  onChange={(e) =>
                    setEditRule({ ...editRule, category: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  <option value="Transport">Transport</option>
                  <option value="Visa">Visa</option>
                  <option value="Hotel">Hotel</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-normal text-slate-500 block mb-1.5">
                  Route Description
                </label>
                <input
                  type="text"
                  value={editRule.route_name || ""}
                  onChange={(e) =>
                    setEditRule({ ...editRule, route_name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-gold outline-none"
                  placeholder="e.g. Jeddah to Makkah"
                />
              </div>
              <div>
                <label className="text-sm font-normal text-slate-500 block mb-1.5">
                  Asset / Vehicle Class
                </label>
                <input
                  type="text"
                  value={editRule.vehicle_type || ""}
                  onChange={(e) =>
                    setEditRule({ ...editRule, vehicle_type: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-gold outline-none"
                  placeholder="e.g. GMC Yukon, Hiace"
                />
              </div>
              <div>
                <label className="text-sm font-normal text-slate-500 block mb-1.5">
                  Standard Base Price (SAR)
                </label>
                <input
                  type="number"
                  value={editRule.price_sar || 0}
                  onChange={(e) =>
                    setEditRule({
                      ...editRule,
                      price_sar: parseFloat(e.target.value),
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-green-400 font-normal focus:outline-none"
                />
              </div>
            </div>
            <div className="p-8 border-t border-white/10">
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full py-4 rounded-2xl bg-gold text-[#0A2C5A] font-normal text-sm transition-all hover:brightness-110 shadow-lg"
              >
                {saving ? "Deploying Rate..." : "Sync Pricing Data"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
