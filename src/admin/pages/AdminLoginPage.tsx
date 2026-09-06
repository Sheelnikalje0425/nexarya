import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "@/components/navigation/BrandLogo";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      localStorage.setItem("nxn_auth_token", data.token);
      localStorage.setItem("nxn_admin_user", JSON.stringify(data.user));
      navigate("/admin/overview");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#0E1720] flex items-center justify-center p-6 selection:bg-[#D4A72C]/25 selection:text-[#0E1720]">
      <div className="max-w-md w-full bg-[#FAF7F2] border border-[#0E1720]/15 p-8 sm:p-10 shadow-[0_4px_24px_rgba(14,23,32,0.04)] rounded-sm">
        <div className="mb-8 text-center">
          <div className="inline-block mb-3">
            <BrandLogo size="md" />
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase mt-2">
            ADMINISTRATION // WORKSPACE
          </div>
          <h1 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] mt-2 font-semibold">
            Internal Operations Sign In
          </h1>
          <p className="font-sans text-xs text-[#576371] mt-1.5 leading-relaxed">
            Authorized access for engineering leadership, content editors, and financial administration.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-800 font-sans text-xs rounded-sm" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-mono text-[10px] tracking-[0.14em] text-[#576371] uppercase mb-1.5">
              Operator Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="e.g. architect@nexarya.in"
              className="w-full px-3.5 py-2.5 bg-white border border-[#0E1720]/15 text-sm text-[#0E1720] placeholder-[#A7A9A8] focus:outline-none focus:border-[#D4A72C] rounded-sm transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-[0.14em] text-[#576371] uppercase mb-1.5">
              Access Secret / Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••••••"
              className="w-full px-3.5 py-2.5 bg-white border border-[#0E1720]/15 text-sm text-[#0E1720] placeholder-[#A7A9A8] focus:outline-none focus:border-[#D4A72C] rounded-sm transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-sans text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50 rounded-sm border border-[#0E1720]"
            >
              {loading ? "Authenticating Session..." : "Authorize Workspace Access"}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-[#0E1720]/10 text-center flex items-center justify-between text-[11px] text-[#6F7475] font-sans">
          <Link to="/" className="hover:text-[#0E1720] transition-colors">
            ← Return to Website
          </Link>
          <span className="font-mono text-[10px] text-[#8C6D1F]">
            SECURE RBAC
          </span>
        </div>
      </div>
    </div>
  );
}
