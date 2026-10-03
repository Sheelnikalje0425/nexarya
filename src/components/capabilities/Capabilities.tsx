import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const CAPABILITIES = [
  {
    num: "01",
    title: "Custom Software",
    description: "Tailored business applications and operations portals.",
    href: "/solutions/custom-software",
  },
  {
    num: "02",
    title: "AI & Automation",
    description: "Document processing and pragmatic workflow automation.",
    href: "/solutions/ai-automation",
  },
  {
    num: "03",
    title: "Business Systems",
    description: "Integrated databases and operational infrastructure.",
    href: "/solutions/business-systems",
  },
  {
    num: "04",
    title: "Digital Products",
    description: "Modern client portals and digital web platforms.",
    href: "/solutions/digital-products",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-14 sm:py-16 bg-[#F8F5EE] border-b border-[#E8E3D8] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#E8E3D8] mb-8 sm:mb-10">
            <div>
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-2">
                What We Build
              </span>
              <h2
                id="capabilities-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-[3.2rem] text-[#0F1725] leading-tight font-normal"
              >
                What we build. <br />
                <span className="italic">Systems for the work ahead.</span>
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#4A5363] max-w-sm font-light leading-relaxed">
              Four capabilities. One clear outcome: better operations.
            </p>
          </div>
        </RevealOnScroll>

        {/* Simple 4-Column Grid Separated by Rules (No Boxed Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3D8] border-y border-[#E8E3D8]">
          {CAPABILITIES.map((cap, idx) => (
            <RevealOnScroll key={cap.num} delayMs={idx * 40}>
              <div className="py-8 sm:py-10 px-0 sm:px-6 lg:px-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="font-sans text-xs font-semibold text-[#8A6B1E] block mb-2">
                    {cap.num}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#0F1725] font-normal mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-sm text-[#4A5363] font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={cap.href}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
