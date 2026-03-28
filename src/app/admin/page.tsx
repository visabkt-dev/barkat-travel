"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6"
            style={{
              backgroundColor: "rgba(212,175,55,0.15)",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            <Lock className="w-8 h-8" style={{ color: "#D4AF37" }} />
          </div>
          <p className="text-3xl font-normal " style={{ color: "#ffffff" }}>
            Barkat <span style={{ color: "#D4AF37" }}>Admin</span>
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Sign in to manage your leads & bookings
          </p>
        </div>
        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="rounded-3xl p-8 shadow-2xl"
          style={{
            backgroundColor: "rgba(30,41,59,0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {error && (
            <div
              className="px-4 py-3 rounded-xl text-sm mb-6 text-center font-normal"
              style={{
                backgroundColor: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                color: "#f87171",
              }}
            >
              {error}
            </div>
          )}
          <div className="space-y-5">
            <div>
              <label
                className="block text-xs font-normal mb-2"
                style={{ color: "#D4AF37" }}
              >
                Email
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#ffffff",
                }}
                placeholder="Enter email"
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label
                className="block text-xs font-normal mb-2"
                style={{ color: "#D4AF37" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all pr-12"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#ffffff",
                  }}
                  placeholder="Enter password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 rounded-xl font-normal text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#D4AF37", color: "#0f172a" }}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <LogIn size={18} /> Sign In
              </>
            )}
          </button>
          <p
            className="text-center text-xs mt-6 font-normal"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Barkat Travel Admin Portal
          </p>
        </form>
      </div>
    </div>
  );
}
