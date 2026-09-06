import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import BrandLogo from "@/components/navigation/BrandLogo";
import { api } from "@/lib/api";

interface UserSession {
  id: string;
  email: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "FINANCE";
}

interface NavItem {
  label: string;
  href: string;
  roles: ("SUPER_ADMIN" | "ADMIN" | "EDITOR" | "FINANCE")[];
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<UserSession | null>(null);
  const [unreadNotifs, setUnreadNotifs] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const rawUser = localStorage.getItem("nxn_admin_user");
    const token = localStorage.getItem("nxn_auth_token");

    if (!token || !rawUser) {
      navigate("/admin/login");
      return;
    }

    try {
      setUser(JSON.parse(rawUser));
    } catch {
      navigate("/admin/login");
    }

    // Load unread notifications
    api.admin.getNotifications()
      .then((data) => {
        const unread = data.notifications?.filter((n: any) => !n.is_read)?.length || 0;
        setUnreadNotifs(unread);
      })
      .catch(() => {});
  }, [navigate]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("nxn_auth_token");
    localStorage.removeItem("nxn_admin_user");
    navigate("/admin/login");
  };

  if (!user) return null;

  // Grouped RBAC Navigation
  const navGroups: NavGroup[] = [
    {
      title: "WORKSPACE",
      items: [
        { label: "Overview", href: "/admin/overview", roles: ["SUPER_ADMIN", "ADMIN", "EDITOR", "FINANCE"] },
        { label: "Inquiries & Leads", href: "/admin/inquiries", roles: ["SUPER_ADMIN", "ADMIN"] },
        { label: "Case Studies", href: "/admin/case-studies", roles: ["SUPER_ADMIN", "ADMIN", "EDITOR"] },
        { label: "Solutions & Services", href: "/admin/services", roles: ["SUPER_ADMIN", "ADMIN", "EDITOR"] },
        { label: "Engagement Pricing", href: "/admin/pricing", roles: ["SUPER_ADMIN", "ADMIN"] },
      ],
    },
    {
      title: "PEOPLE & PROOF",
      items: [
        { label: "Testimonials", href: "/admin/testimonials", roles: ["SUPER_ADMIN", "ADMIN", "EDITOR"] },
        { label: "Insights CMS", href: "/admin/insights", roles: ["SUPER_ADMIN", "ADMIN", "EDITOR"] },
      ],
    },
    {
      title: "OPERATIONS",
      items: [
        { label: "Payments & Ledger", href: "/admin/payments", roles: ["SUPER_ADMIN", "FINANCE"] },
        { label: "User Management", href: "/admin/users", roles: ["SUPER_ADMIN"] },
        { label: "Audit Trail", href: "/admin/audit-logs", roles: ["SUPER_ADMIN", "ADMIN"] },
        { label: "Platform Settings", href: "/admin/settings", roles: ["SUPER_ADMIN", "ADMIN"] },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#0E1720] flex flex-col md:flex-row antialiased selection:bg-[#D4A72C]/25 selection:text-[#0E1720]">
      {/* Mobile Top Navigation Bar */}
      <header className="md:hidden bg-[#0E1720] text-[#F4EFE6] px-5 py-4 border-b border-[#0E1720]/15 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <BrandLogo size="sm" />
          <div className="flex flex-col">
            <span className="font-editorial text-sm font-semibold tracking-wide text-[#FAF7F2]">NEXARYA</span>
            <span className="font-mono text-[9px] text-[#D4A72C] tracking-wider uppercase">Workspace</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {unreadNotifs > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#D4A72C] text-[#0E1720] text-[10px] font-bold flex items-center justify-center">
              {unreadNotifs}
            </span>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#FAF7F2] hover:text-[#D4A72C] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Desktop Navigation Sidebar / Mobile Slide-down Drawer */}
      <aside
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } md:flex w-full md:w-64 bg-[#0E1720] text-[#F4EFE6] border-r border-[#0E1720]/15 flex-col justify-between p-6 shrink-0 z-30`}
      >
        <div className="space-y-6">
          {/* Header Branding */}
          <div className="hidden md:block pb-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <div className="flex flex-col">
                <span className="font-editorial text-base font-semibold tracking-wide text-[#FAF7F2]">NEXARYA</span>
                <span className="font-mono text-[9px] text-[#D4A72C] tracking-widest uppercase">Internal Workspace</span>
              </div>
            </div>
          </div>

          {/* Active Operator Session Card */}
          <div className="p-3.5 bg-white/[0.04] border border-white/10 rounded-sm">
            <div className="font-mono text-[9px] text-[#A7A9A8] uppercase tracking-wider">Active Operator</div>
            <div className="font-sans text-xs font-medium text-[#FAF7F2] mt-0.5 truncate">{user.name}</div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
              <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#D4A72C]/15 text-[#D4A72C] border border-[#D4A72C]/30 uppercase font-semibold">
                {user.role}
              </span>
              <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ONLINE
              </span>
            </div>
          </div>

          {/* Navigation Groups */}
          <nav className="space-y-5">
            {navGroups.map((group) => {
              const allowedInGroup = group.items.filter((item) => item.roles.includes(user.role));
              if (allowedInGroup.length === 0) return null;

              return (
                <div key={group.title} className="space-y-1">
                  <div className="font-mono text-[9px] tracking-[0.18em] text-[#6F7475] uppercase px-3 pb-1">
                    {group.title}
                  </div>
                  <div className="space-y-0.5">
                    {allowedInGroup.map((item) => {
                      const active = location.pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`flex items-center justify-between px-3 py-2 text-xs font-sans transition-all rounded-sm ${
                            active
                              ? "bg-white/10 text-[#FAF7F2] font-semibold border-l-2 border-[#D4A72C]"
                              : "text-[#A7A9A8] hover:text-[#FAF7F2] hover:bg-white/[0.04] border-l-2 border-transparent"
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.label === "Inquiries & Leads" && unreadNotifs > 0 && (
                            <span className="px-1.5 py-0.2 bg-[#D4A72C] text-[#0E1720] text-[9px] font-bold rounded-sm">
                              {unreadNotifs}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 text-xs font-sans text-[#A7A9A8] hover:text-[#FAF7F2] hover:bg-white/[0.04] transition-colors rounded-sm"
          >
            <span>Public Website</span>
            <span className="font-mono text-[10px] text-[#D4A72C]">↗</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full py-2.5 px-3 bg-white/[0.04] hover:bg-red-950/40 text-[#A7A9A8] hover:text-red-300 border border-white/10 font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer text-left flex items-center justify-between rounded-sm"
          >
            <span>Terminate Session</span>
            <span className="text-[10px]">⏻</span>
          </button>
        </div>
      </aside>

      {/* Main Workbench Canvas Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 bg-[#F4EFE6] max-w-full">
        <div className="max-w-7xl mx-auto">
          <Outlet context={{ user }} />
        </div>
      </main>
    </div>
  );
}
