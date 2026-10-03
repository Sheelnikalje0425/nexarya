import React from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Founder {
  name: string;
  role: string;
  responsibility: string;
}

const FOUNDERS: Founder[] = [
  {
    name: "Mahesh Nage",
    role: "Co-founder",
    responsibility: "Systems Strategy & Governance",
  },
  {
    name: "Sheel Nikalje",
    role: "Co-founder",
    responsibility: "Operational Delivery & Partnerships",
  },
  {
    name: "Bhupesh Mukane",
    role: "Co-founder",
    responsibility: "Architecture & Core Infrastructure",
  },
  {
    name: "Pravin Epilli",
    role: "Co-founder",
    responsibility: "Design Systems & Communications",
  },
];

export default function LeadershipTeam() {
  return (
    <section
      id="people"
      className="py-14 sm:py-18 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs select-none"
      aria-label="Founders and Leadership"
    >
      <div className="px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3DDCF] mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#765406] uppercase font-semibold">
                  Leadership &amp; Architecture
                </span>
              </div>
              <h2 className="font-editorial text-balance text-3xl sm:text-4xl lg:text-[2.8rem] text-[#141B26] leading-[1.08] font-normal">
                Practitioners who <span className="italic font-normal">engineer the work.</span>
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#4A5363] max-w-md font-light leading-relaxed">
              Nexarya is led by active engineering practitioners who work directly with project partners from architecture to deployment.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Clean Founder Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDERS.map((founder, idx) => (
            <RevealOnScroll key={founder.name} delayMs={idx * 40}>
              <div className="p-6 bg-[#F8F5EE] border border-[#E3DDCF] h-full flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[12px] text-[#765406] font-semibold uppercase tracking-wider block mb-2">
                    {founder.role}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#141B26] font-normal mb-2">
                    {founder.name}
                  </h3>
                  <p className="font-sans text-sm text-[#4A5363] leading-relaxed font-light">
                    {founder.responsibility}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
