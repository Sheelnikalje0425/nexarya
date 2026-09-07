import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Founder {
  num: string;
  name: string;
  role: string;
  initials: string;
  responsibility: string;
  summary: string;
  imageSrc?: string;
}

const FOUNDERS: Founder[] = [
  {
    num: "01",
    name: "Mahesh Nage",
    role: "Co-founder",
    initials: "MN",
    responsibility: "Systems Strategy & Governance",
    summary: "Oversees business alignment, architectural governance, and strategic software scoping.",
  },
  {
    num: "02",
    name: "Sheel Nikalje",
    role: "Co-founder",
    initials: "SN",
    responsibility: "Operational Delivery & Engineering Partnerships",
    summary: "Manages delivery cadence, operational execution, and stakeholder engineering partnerships.",
  },
  {
    num: "03",
    name: "Bhupesh Mukane",
    role: "Co-founder",
    initials: "BM",
    responsibility: "System Architecture & Core Infrastructure",
    summary: "Engineers backend pipelines, relational schemas, system architecture, and runtime infrastructure.",
  },
  {
    num: "04",
    name: "Pravin Epilli",
    role: "Co-founder",
    initials: "PE",
    responsibility: "Technical Communications & Brand Architecture",
    summary: "Shapes user interface clarity, technical documentation, design systems, and brand consistency.",
  },
];

export default function LeadershipTeam() {
  return (
    <section
      id="people"
      data-section="founders"
      className="py-18 sm:py-22 lg:py-26 bg-[#F4EFE6] border-b border-[#DCD6CA] text-[#0E1720] select-none"
      aria-label="Founders and Leadership"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-[#DCD6CA] mb-11 sm:mb-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  PEOPLE
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#0E1720] leading-[1.05] tracking-[-0.03em] font-normal">
                Built by people who <span className="italic font-normal">understand the work.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              NEXARYA is led by a founding team with direct responsibility across architecture, engineering, delivery, and communication.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="bg-[#FFFFFF] border border-[#DCD6CA] p-6 sm:p-7 flex flex-col justify-between shadow-[0_6px_24px_rgba(14,23,32,0.03)] hover:border-[#0E1720]/40 transition-colors"
            >
              <div>
                {/* Intentional Editorial Monogram & Identity Plate */}
                <div className="aspect-[4/5] bg-[#FAF8F5] border border-[#EAE5DB] mb-6 flex flex-col justify-between p-5 relative overflow-hidden group">
                  {founder.imageSrc ? (
                    <img
                      src={founder.imageSrc}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#8E9CA8]">
                        <span className="font-semibold text-[#8C6D1F]">{founder.num}</span>
                        <span className="uppercase tracking-wider text-[10px]">CO-FOUNDER</span>
                      </div>

                      <div className="my-auto text-center">
                        <div className="w-16 h-16 border border-[#DCD6CA] bg-[#FFFFFF] mx-auto flex items-center justify-center font-editorial text-2xl text-[#0E1720] font-normal tracking-wide shadow-sm">
                          {founder.initials}
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C6D1F] font-semibold mt-3 block">
                          {founder.name}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-[#EAE5DB] flex items-center justify-between text-[9px] font-mono text-[#8E9CA8] uppercase">
                        <span>NEXARYA</span>
                        <span>STUDIO LEAD</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Name & Responsibility */}
                <div className="mb-3.5">
                  <span className="font-mono text-[10px] text-[#8C6D1F] tracking-widest uppercase font-semibold block mb-1">
                    {founder.role}
                  </span>
                  
                  <h3 className="font-editorial text-2xl text-[#0E1720] font-normal leading-snug mb-1">
                    {founder.name}
                  </h3>
                  
                  <div className="font-sans text-xs text-[#0E1720] font-medium leading-snug">
                    {founder.responsibility}
                  </div>
                </div>

                {/* Bio Summary */}
                <p className="font-sans text-xs text-[#5C6975] font-light leading-relaxed mb-6">
                  {founder.summary}
                </p>
              </div>

              {/* Bottom Discipline Badge */}
              <div className="pt-3 border-t border-[#EAE5DB] flex items-center justify-between font-mono text-[10px] text-[#8E9CA8]">
                <span>RESPONSIBILITY</span>
                <span className="text-[#0E1720] font-medium">{founder.num} / 04</span>
              </div>
            </div>
          ))}
        </div>

        {/* Founding Philosophy Note */}
        <div className="mt-10 p-4 sm:p-4.5 bg-[#FAF8F5] border border-[#EAE5DB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#5C6975]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F] shrink-0" />
            <span className="text-[#0E1720] font-semibold">DIRECT ENGAGEMENT:</span>
            <span>Clients work directly with founding engineers who architect and maintain the software.</span>
          </div>
          <span className="text-[#8E9CA8] uppercase text-[10px]">PRACTITIONER-LED STUDIO</span>
        </div>

      </div>
    </section>
  );
}
