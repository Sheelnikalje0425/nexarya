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
    title: "CAPABILITIES",
    links: [
      { label: "Overview", href: "/solutions" },
      { label: "Web Applications & SaaS", href: "/solutions/web-applications" },
      { label: "Business & Workflow Systems", href: "/solutions/business-systems" },
      { label: "APIs & Data Rails", href: "/solutions/integrations" },
      { label: "Platforms & Cloud", href: "/solutions/cloud-devops" },
    ],
  },
  {
    title: "METHODOLOGY",
    links: [
      { label: "5-Stage Delivery", href: "/process" },
      { label: "Engineering Standards", href: "/#engineering" },
      { label: "Engagement Models", href: "/pricing" },
    ],
  },
  {
    title: "STUDIO",
    links: [
      { label: "About Nexarya", href: "/about" },
      { label: "Engineering Insights", href: "/insights" },
      { label: "Client Feedback", href: "/feedback" },
      { label: "Start a Project", href: "/contact" },
      { label: "hello@nexarya.in", href: "mailto:hello@nexarya.in" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#EAE5DB] border-t border-[#DCD6CA] pt-24 sm:pt-28 pb-16 sm:pb-20 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-[#DCD6CA]">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-4 space-y-5">
            <div>
              <div className="mb-4">
                <BrandLogo size="lg" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed max-w-sm">
                NEXARYA designs and engineers custom software, internal systems, and digital platforms around the way organizations actually work.
              </p>
            </div>

            <div className="text-xs font-tech text-[#6B7885]">
              <span className="block text-[10px] uppercase tracking-wider text-[#0E1720] font-semibold mb-1">
                LOCATION
              </span>
              <span>Mumbai, India • Operating Worldwide</span>
            </div>
          </div>

          {/* 4 Link Columns (4 Cols) */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col">
              <span className="font-tech text-[10px] tracking-[0.16em] text-[#0E1720] uppercase font-bold mb-4">
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
                        className="font-sans text-xs text-[#5C6975] hover:text-[#0E1720] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="font-sans text-xs text-[#5C6975] hover:text-[#0E1720] transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-[#6B7885]">
          <div>
            &copy; {new Date().getFullYear()} NEXARYA. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#0E1720] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#0E1720] transition-colors">
              Terms of Service
            </Link>
            <Link to="/feedback" className="hover:text-[#0E1720] transition-colors">
              Client Feedback
            </Link>
            <Link to="/admin/login" className="hover:text-[#0E1720] transition-colors">
              Operator Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
