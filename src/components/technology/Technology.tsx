import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const TECH_CATEGORIES = [
  {
    category: "FRONTEND & INTERFACE",
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Web Accessibility (WCAG)", "State Management"],
  },
  {
    category: "BACKEND & ARCHITECTURE",
    items: ["Node.js", "Express.js", "Python", "Flask", "REST API Gateways", "Role-Based Access Control (RBAC)"],
  },
  {
    category: "DATABASE & PERSISTENCE",
    items: ["SQLite (Write-Ahead Logging)", "PostgreSQL", "MySQL", "ACID Transactions", "Prepared Queries"],
  },
  {
    category: "SECURITY & INFRASTRUCTURE",
    items: ["HMAC SHA-256 Verification", "JWT Authentication", "Docker Containers", "GitHub Actions CI/CD", "AWS Cloud Rails"],
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 sm:py-32 bg-[#08101B] border-b border-[#243247] select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              <span className="font-tech text-xs tracking-[0.24em] text-[#C59A3D] uppercase font-medium">
                ENGINEERING CAPABILITIES
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F8F5EE] leading-[1.08] tracking-[-0.02em] mb-4">
              Core technologies.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#89929B] font-light leading-relaxed">
              We select mature, predictable technologies with strong ecosystem support rather than chasing short-lived frameworks.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4-Category Technology Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <RevealOnScroll key={cat.category} delayMs={idx * 60}>
              <div className="p-6 sm:p-8 bg-[#0F1725] border border-[#243247] h-full flex flex-col justify-between">
                <div>
                  <span className="font-tech text-[10px] tracking-[0.2em] text-[#C59A3D] uppercase font-semibold block mb-4 pb-2 border-b border-white/5">
                    {cat.category}
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#08101B] border border-[#243247] text-xs font-tech text-[#F8F5EE] tracking-wider uppercase hover:border-[#C59A3D]/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
