import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ArrowRight } from "@/components/ui/Icons";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import { PRIMARY_NAVIGATION } from "@/lib/constants/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isNavyPage =
    location.pathname === "/" ||
    location.pathname === "/solutions" ||
    location.pathname === "/solutions/custom-software";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isNavyPage
            ? isScrolled
              ? "bg-[#08101B]/95 backdrop-blur-md border-b border-[#243247] py-3 shadow-lg shadow-black/20"
              : "bg-transparent border-b border-[#243247]/50 py-4 sm:py-5"
            : isScrolled
            ? "bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#DED7C9] py-3 shadow-sm"
            : "bg-transparent border-b border-[#DED7C9] py-4 sm:py-5"
        }`}
      >
        <div
          ref={navContainerRef}
          className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between relative"
        >
          {/* Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" theme={isNavyPage ? "dark" : "light"} />
          </div>

          {/* Desktop Primary Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {PRIMARY_NAVIGATION.map((item) => {
              const isWorkActive = item.id === "work" && (location.pathname === "/work" || location.pathname.startsWith("/work/"));
              const isSolutionsActive = item.id === "solutions" && (location.pathname === "/solutions" || location.pathname.startsWith("/solutions/"));
              const isProcessActive = item.id === "process" && (location.pathname === "/process" || location.pathname.startsWith("/process/"));
              const isAboutActive = item.id === "about" && (location.pathname === "/about" || location.pathname === "/feedback");
              const isInsightsActive = item.id === "insights" && (location.pathname === "/insights" || location.pathname.startsWith("/insights/"));
              
              const isActive = isWorkActive || isSolutionsActive || isProcessActive || isAboutActive || isInsightsActive;
              const isOpen = activeDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    aria-expanded={isOpen}
                    className={`relative flex items-center gap-1.5 py-2 text-[11px] font-mono tracking-[0.14em] uppercase transition-colors duration-150 focus:outline-none ${
                      isNavyPage
                        ? isActive
                          ? "text-[#F7F5EF] font-semibold"
                          : "text-[#B9C0C9] hover:text-[#F7F5EF]"
                        : isActive
                          ? "text-[#17202B] font-semibold"
                          : "text-[#68717B] hover:text-[#17202B]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 text-[#C59A3D]"
                          : isNavyPage
                          ? "text-[#7F8A99] group-hover:text-[#F7F5EF]"
                          : "text-[#68717B] group-hover:text-[#17202B]"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C59A3D]" />
                    )}
                  </Link>

                  {/* Dropdown Menu — Deep Navy Translucent on all pages */}
                  {isOpen && (
                    <div
                      role="region"
                      aria-label={`${item.label} Submenu`}
                      className={`absolute top-full pt-2 z-50 animate-in fade-in-50 duration-150 ${
                        item.id === "process"
                          ? "left-1/2 -translate-x-1/2 w-[380px]"
                          : item.id === "insights" || item.id === "about"
                          ? "right-0 w-[380px]"
                          : "left-0 w-[380px]"
                      }`}
                    >
                      <div className="bg-[#08101B]/85 backdrop-blur-xl border border-[#243247] shadow-[0_24px_50px_rgba(0,0,0,0.55)] overflow-hidden">
                        <div className="p-5 bg-transparent">
                          <div className="mb-3 pb-2 border-b border-[#243247] flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                              {item.dropdown.title}
                            </span>
                          </div>
                          <div className="space-y-1">
                            {item.dropdown.primaryItems.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                onClick={handleLinkClick}
                                className="group/item block p-2.5 -mx-2 rounded-none hover:bg-white/[0.06] transition-colors border-l-2 border-transparent hover:border-[#C59A3D]"
                              >
                                <div className="flex items-baseline gap-2">
                                  {sub.number && (
                                    <span className="font-mono text-[10px] text-[#C59A3D] font-semibold">
                                      {sub.number}
                                    </span>
                                  )}
                                  <span className="font-editorial text-base text-[#F7F5EF] group-hover/item:text-[#E0BD68] transition-colors">
                                    {sub.label}
                                  </span>
                                </div>
                                {sub.description && (
                                  <p className="font-sans text-[11px] text-[#B9C0C9] leading-relaxed mt-0.5 pl-4">
                                    {sub.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {item.dropdown.footerLink && (
                          <div className="bg-[#08101B]/90 backdrop-blur-md border-t border-[#243247] px-5 py-2.5 flex items-center justify-end">
                            <Link
                              to={item.dropdown.footerLink.href}
                              onClick={handleLinkClick}
                              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] uppercase font-semibold text-[#C59A3D] hover:text-[#E0BD68] transition-colors"
                            >
                              <span>{item.dropdown.footerLink.label}</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: Start a Project */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="px-4 py-2 uppercase font-mono text-[11px] tracking-[0.1em]"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`lg:hidden p-2.5 transition-all cursor-pointer ${
                isNavyPage
                  ? "border border-[#243247] bg-[#0F1725] text-[#F7F5EF] hover:bg-[#141F30] hover:border-[#C59A3D]/50"
                  : "border border-[#DED7C9] bg-[#FFFFFF] text-[#17202B] hover:bg-[#F1EDE3] hover:border-[#C59A3D]/50"
              }`}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
