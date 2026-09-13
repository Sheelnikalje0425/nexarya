import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronDown, ArrowRight } from "@/components/ui/Icons";
import BrandLogo from "./BrandLogo";
import { PRIMARY_NAVIGATION } from "@/lib/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("solutions");
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close menu only when navigation path changes
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      onClose();
    }
  }, [location.pathname, onClose]);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#08101B] border-b border-[#243247] text-[#F7F5EF]"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#243247] bg-[#0F1725]">
        <BrandLogo size="md" theme="dark" />
        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="min-h-[44px] min-w-[44px] -mr-2 flex items-center justify-center text-[#B9C0C9] hover:text-[#F7F5EF] hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
        >
          <X size={22} />
        </button>
      </div>

      {/* Menu Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#243247]">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
              STUDIO NAVIGATION
            </span>
            <span className="font-mono text-[10px] text-[#7F8A99] uppercase">
              SELECT TO EXPAND
            </span>
          </div>

          <nav className="flex flex-col space-y-2">
            {PRIMARY_NAVIGATION.map((item) => {
              const isExpanded = expandedSection === item.id;
              const isWorkActive = item.id === "work" && (location.pathname === "/work" || location.pathname.startsWith("/work/"));
              const isSolutionsActive = item.id === "solutions" && (location.pathname === "/solutions" || location.pathname.startsWith("/solutions/"));
              const isProcessActive = item.id === "process" && (location.pathname === "/process" || location.pathname.startsWith("/process/"));
              const isAboutActive = item.id === "about" && (location.pathname === "/about" || location.pathname === "/feedback");
              const isInsightsActive = item.id === "insights" && (location.pathname === "/insights" || location.pathname.startsWith("/insights/"));
              const isActive = isWorkActive || isSolutionsActive || isProcessActive || isAboutActive || isInsightsActive;

              return (
                <div key={item.id} className="border-b border-[#243247]/60 pb-2">
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="w-full min-h-[48px] flex items-center justify-between text-left py-2 group cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] text-[#C59A3D] font-semibold">
                        {item.number}
                      </span>
                      <span
                        className={`text-2xl font-editorial transition-colors ${
                          isActive
                            ? "text-[#E0BD68] font-semibold"
                            : "text-[#F7F5EF] group-hover:text-[#FFFFFF]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-[#7F8A99] transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-[#C59A3D]" : "group-hover:text-[#F7F5EF]"
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="pt-2 pb-4 pl-6 space-y-2 animate-in fade-in-50 duration-150">
                      {item.dropdown.primaryItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={onClose}
                          className="min-h-[44px] flex items-center justify-between py-2 px-2 -mx-2 hover:bg-[#0F1725] transition-colors border-l-2 border-transparent hover:border-[#C59A3D]"
                        >
                          <div>
                            <div className="flex items-baseline gap-2">
                              {sub.number && (
                                <span className="font-mono text-[10px] text-[#C59A3D] font-semibold">
                                  {sub.number}
                                </span>
                              )}
                              <span className="font-editorial text-base text-[#F7F5EF]">
                                {sub.label}
                              </span>
                            </div>
                            {sub.description && (
                              <p className="font-sans text-[11px] text-[#B9C0C9] line-clamp-1 pl-4">
                                {sub.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight size={13} className="text-[#7F8A99] shrink-0" />
                        </Link>
                      ))}

                      {item.dropdown.footerLink && (
                        <div className="pt-2">
                          <Link
                            to={item.dropdown.footerLink.href}
                            onClick={onClose}
                            className="min-h-[44px] flex items-center justify-between p-2.5 bg-[#0F1725] border border-[#243247] text-xs font-mono text-[#C59A3D] hover:text-[#E0BD68] uppercase tracking-[0.12em] font-semibold"
                          >
                            <span>{item.dropdown.footerLink.label}</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA & Studio Info */}
        <div className="pt-6 mt-6 border-t border-[#243247] space-y-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-[#C59A3D] text-[#08101B] font-mono text-xs font-bold tracking-[0.12em] uppercase transition-colors hover:bg-[#E0BD68]"
          >
            <span>Start a Project →</span>
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#B9C0C9] pt-1 gap-1">
            <span>NEXARYA // SOFTWARE ENGINEERING STUDIO</span>
            <span>MUMBAI, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
