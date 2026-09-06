import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "@/components/ui/Icons";
import BrandLogo from "./BrandLogo";

const WORKBENCH_NAV = [
  { label: "WORK", href: "/work", number: "01" },
  { label: "CAPABILITIES", href: "/solutions", number: "02" },
  { label: "PROCESS", href: "/process", number: "03" },
  { label: "ABOUT", href: "/about", number: "04" },
  { label: "INSIGHTS", href: "/insights", number: "05" },
  { label: "CONTACT", href: "/contact", number: "06" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#F4EFE6] border-b border-[#DCD6CA]"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#DCD6CA] bg-[#FAF8F5]">
        <BrandLogo size="md" />
        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="p-2 -mr-2 text-[#0E1720] hover:text-[#B58B1E] transition-colors focus:outline-none cursor-pointer"
        >
          <X size={22} />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="font-tech text-[10px] tracking-[0.2em] text-[#6B7885] uppercase">
            STUDIO INDEX
          </div>
          <nav className="flex flex-col space-y-3">
            {WORKBENCH_NAV.map((item) => (
              <div key={item.label} className="border-b border-[#E8E2D6] pb-3">
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between text-2xl font-editorial text-[#0E1720] hover:text-[#B58B1E] transition-colors"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-tech text-[11px] text-[#6B7885]">
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowRight size={16} className="text-[#6B7885] group-hover:text-[#0E1720] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-[#DCD6CA] space-y-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0E1720] text-[#FFFFFF] font-tech text-xs font-medium tracking-[0.1em] uppercase transition-colors hover:bg-[#1A2530]"
          >
            <span>Start a Project</span>
            <ArrowRight size={13} className="text-[#D4A72C]" />
          </Link>

          <div className="flex items-center justify-between text-[10px] font-tech text-[#6B7885] pt-1">
            <span>NEXARYA // SOFTWARE ENGINEERING STUDIO</span>
            <span>MUMBAI, INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
