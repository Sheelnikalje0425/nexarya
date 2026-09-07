import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Founder {
  num: string;
  name: string;
  role: string;
  responsibility: string;
  discipline: string;
  initials: string;
  summary: string;
}

const FOUNDERS: Founder[] = [
  {
    num: "01",
    name: "MAHESH NAGE",
    role: "Co-founder",
    responsibility: "Systems Strategy & Governance",
    discipline: "SYSTEMS STRATEGY",
    initials: "MN",
    summary: "Oversees business alignment, architectural governance, and strategic software scoping.",
  },
  {
    num: "02",
    name: "SHEEL NIKALJE",
    role: "Co-founder",
    responsibility: "Operational Delivery & Engineering Partnerships",
    discipline: "OPERATIONAL DELIVERY",
    initials: "SN",
    summary: "Manages delivery cadence, operational execution, and stakeholder engineering partnerships.",
  },
  {
    num: "03",
    name: "BHUPESH MUKANE",
    role: "Co-founder",
    responsibility: "System Architecture & Core Infrastructure",
    discipline: "CORE ARCHITECTURE",
    initials: "BM",
    summary: "Engineers backend pipelines, relational schemas, system architecture, and runtime infrastructure.",
  },
  {
    num: "04",
    name: "PRAVIN EPILLI",
    role: "Co-founder",
    responsibility: "Technical Communications & Brand Architecture",
    discipline: "TECHNICAL INTERFACES",
    initials: "PE",
    summary: "Shapes user interface clarity, technical documentation, design systems, and brand consistency.",
  },
];

export default function LeadershipTeam() {
  return (
    <section
      id="people"
      data-section="founders"
      className="py-24 sm:py-32 lg:py-36 bg-[#F4EFE6] border-b border-[#DCD6CA] text-[#0E1720] select-none"
      aria-label="Founders and Leadership"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 sm:pb-16 border-b border-[#DCD6CA] mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  PEOPLE
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#0E1720] leading-[1.04] tracking-[-0.03em] font-normal">
                Built by people who <span className="italic font-normal">understand the work.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              NEXARYA is led by a founding team with direct responsibility across architecture, engineering, delivery, and communication.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="bg-[#FFFFFF] border border-[#DCD6CA] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(14,23,32,0.03)] hover:border-[#0E1720]/40 transition-colors"
            >
              <div>
                {/* Photo Registration Frame / Minimal Architectural Canvas */}
                <div className="aspect-[4/5] bg-[#FAF8F5] border border-[#EAE5DB] mb-6 flex flex-col justify-between p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8E9CA8]">
                    <span>REG // {founder.num}</span>
                    <span>{founder.initials}</span>
                  </div>

                  <div className="my-auto text-center">
                    <div className="w-14 h-14 border border-[#DCD6CA] bg-[#FFFFFF] mx-auto flex items-center justify-center font-editorial text-xl text-[#0E1720] mb-2 font-normal">
                      {founder.initials}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8C6D1F] block">
                      {founder.discipline}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#EAE5DB] flex items-center justify-between text-[9px] font-mono text-[#8E9CA8] uppercase">
                    <span>NEXARYA</span>
                    <span>FOUNDER</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mb-4">
                  <span className="font-mono text-[10px] text-[#8C6D1F] tracking-widest uppercase font-semibold block mb-1">
                    {founder.role}
                  </span>
                  <h3 className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#0E1720] uppercase mb-1">
                    {founder.name}
                  </h3>
                  <div className="font-sans text-xs text-[#0E1720] font-medium leading-snug">
                    {founder.responsibility}
                  </div>
                </div>

                {/* Summary */}
                <p className="font-sans text-xs text-[#5C6975] font-light leading-relaxed mb-6">
                  {founder.summary}
                </p>
              </div>

              {/* Bottom Discipline Badge */}
              <div className="pt-3 border-t border-[#EAE5DB] flex items-center justify-between font-mono text-[10px] text-[#8E9CA8]">
                <span>RESPONSIBILITY</span>
                <span className="text-[#0E1720] font-semibold">{founder.num} / 04</span>
              </div>
            </div>
          ))}
        </div>

        {/* Founding Philosophy Note */}
        <div className="mt-12 p-5 bg-[#FAF8F5] border border-[#EAE5DB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#5C6975]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F] shrink-0" />
            <span className="text-[#0E1720] font-semibold">DIRECT ENGAGEMENT:</span>
            <span>Clients work directly with founding engineers who build and maintain the software.</span>
          </div>
          <span className="text-[#8E9CA8] uppercase text-[10px]">PRACTITIONER-LED STUDIO</span>
        </div>

      </div>
    </section>
  );
}
