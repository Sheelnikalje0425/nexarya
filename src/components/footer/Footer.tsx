import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/navigation/BrandLogo";

const FOOTER_COLUMNS = [
  {
    title: "WORK",
    links: [
      { label: "All Work", href: "/work" },
      { label: "STEMFUSION", href: "/work/stemfusion" },
      { label: "Railway Concession", href: "/work/railway-concession-management" },
      { label: "STEMFUSION Live ↗", href: "https://stemfusion.in" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "All Solutions", href: "/solutions" },
      { label: "Custom Software", href: "/solutions/custom-software" },
      { label: "AI & Automation", href: "/solutions/ai-automation" },
      { label: "Digital Products", href: "/solutions#launch-digital-product" },
      { label: "Systems Unification", href: "/solutions#unify-disconnected-systems" },
    ],
  },
  {
    title: "METHODOLOGY",
    links: [
      { label: "Engineering Process", href: "/process" },
      { label: "01 Understand", href: "/process#understand" },
      { label: "02 Structure", href: "/process#structure" },
      { label: "03 Engineer", href: "/process#engineer" },
      { label: "04 Deliver", href: "/process#deliver" },
    ],
  },
  {
    title: "STUDIO",
    links: [
      { label: "About Nexarya", href: "/about" },
      { label: "Founders & Team", href: "/about#people" },
      { label: "Engineering Principles", href: "/about#principles" },
      { label: "Client Feedback", href: "/about#feedback" },
      { label: "Start a Project", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#08101B] border-t border-[#243247] pt-24 sm:pt-28 pb-16 sm:pb-20 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-[#243247]">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-4 space-y-5">
            <div>
              <div className="mb-4">
                <BrandLogo size="lg" theme="dark" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#B9C0C9] leading-relaxed max-w-sm">
                NEXARYA designs and engineers custom software, internal systems, and digital platforms around the way organizations actually work.
              </p>
            </div>

            <div className="text-xs font-mono text-[#B9C0C9]">
              <span className="block text-[10px] uppercase tracking-wider text-[#F7F5EF] font-semibold mb-1">
                LOCATION
              </span>
              <span>Mumbai, India • Operating Worldwide</span>
            </div>
          </div>

          {/* 4 Link Columns (4 Cols) */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#C59A3D] uppercase font-bold mb-4">
                {col.title}
              </span>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-sans text-xs text-[#B9C0C9] hover:text-[#F7F5EF] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="font-sans text-xs text-[#B9C0C9] hover:text-[#F7F5EF] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar: Legal & Admin */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7F8A99]">
          <div>
            &copy; {new Date().getFullYear()} NEXARYA. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#F7F5EF] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#F7F5EF] transition-colors">
              Terms of Service
            </Link>
            <Link to="/about#feedback" className="hover:text-[#F7F5EF] transition-colors">
              Client Feedback
            </Link>
            <Link to="/admin/login" className="hover:text-[#C59A3D] transition-colors">
              Operator Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
