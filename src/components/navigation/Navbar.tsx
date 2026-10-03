import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "@/components/ui/Icons";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isNavyPage = location.pathname === "/" || location.pathname === "/work";

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 select-none ${
          isNavyPage
            ? isScrolled
              ? "bg-[#08101B]/95 backdrop-blur-md border-b border-[#1A2638] py-3.5 shadow-sm"
              : "bg-transparent border-b border-[#1A2638]/40 py-4 sm:py-5"
            : isScrolled
            ? "bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#E8E3D8] py-3.5 shadow-sm"
            : "bg-transparent border-b border-[#E8E3D8]/50 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <BrandLogo size="md" theme={isNavyPage ? "dark" : "light"} />
          </div>

          {/* Desktop Direct Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(`${item.href}/`));

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-[14px] font-sans font-medium transition-colors ${
                    isNavyPage
                      ? isActive
                        ? "text-[#F8F5EE] font-semibold"
                        : "text-[#B9C0C9] hover:text-[#F8F5EE]"
                      : isActive
                      ? "text-[#0F1725] font-semibold"
                      : "text-[#4A5363] hover:text-[#0F1725]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D2AA4E] hover:bg-[#E0BD68] text-[#0F1725] font-sans text-xs sm:text-[13px] font-semibold transition-colors shadow-2xs"
              >
                <span>Start a Project</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`lg:hidden p-2 transition-all cursor-pointer ${
                isNavyPage
                  ? "border border-[#1A2638] bg-[#0F1725] text-[#F8F5EE]"
                  : "border border-[#E8E3D8] bg-[#FFFFFF] text-[#0F1725]"
              }`}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
