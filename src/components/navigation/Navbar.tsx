import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@/components/ui/Icons";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

const WORKBENCH_NAV = [
  { label: "WORK", href: "/work" },
  { label: "CAPABILITIES", href: "/solutions" },
  { label: "PROCESS", href: "/process" },
  { label: "ABOUT", href: "/about" },
  { label: "INSIGHTS", href: "/insights" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#DCD6CA] py-3 shadow-xs"
            : "bg-[#F4EFE6]/80 backdrop-blur-xs border-b border-[#E8E2D6] py-4"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" />
          </div>

          {/* Minimal Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {WORKBENCH_NAV.map((item) => {
              const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative py-1 text-[11px] font-tech tracking-[0.14em] uppercase transition-colors duration-150 ${
                    isActive
                      ? "text-[#0E1720] font-semibold"
                      : "text-[#5C6975] hover:text-[#0E1720]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#0E1720]" />
                  )}
                </Link>
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
                className="px-4 py-2 uppercase font-tech text-[11px] tracking-[0.1em]"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded border border-[#DCD6CA] bg-[#FFFFFF] text-[#0E1720] hover:bg-[#EAE5DB] transition-all cursor-pointer"
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
