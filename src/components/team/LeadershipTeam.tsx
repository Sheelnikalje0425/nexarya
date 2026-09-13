import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Founder {
  num: string;
  name: string;
  role: string;
  initials: string;
  responsibility: string;
}

const FOUNDERS: Founder[] = [
  {
    num: "01",
    name: "Mahesh Nage",
    role: "Co-founder",
    initials: "MN",
    responsibility: "Systems Strategy & Governance",
  },
  {
    num: "02",
    name: "Sheel Nikalje",
    role: "Co-founder",
    initials: "SN",
    responsibility: "Operational Delivery & Partnerships",
  },
  {
    num: "03",
    name: "Bhupesh Mukane",
    role: "Co-founder",
    initials: "BM",
    responsibility: "Architecture & Core Infrastructure",
  },
  {
    num: "04",
    name: "Pravin Epilli",
    role: "Co-founder",
    initials: "PE",
    responsibility: "Design Systems & Communications",
  },
];

export default function LeadershipTeam() {
  return (
    <section
      id="people"
      data-section="founders"
      className="py-18 sm:py-22 lg:py-26 bg-[#F1EDE3] border-b border-[#DED7C9] text-[#17202B] select-none"
      aria-label="Founders and Leadership"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-9 sm:pb-11 border-b border-[#DED7C9] mb-10 sm:mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  06 // PEOPLE
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#17202B] leading-[1.05] tracking-[-0.03em] font-normal">
                Built by people who <span className="italic font-normal">understand the work.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
              NEXARYA is led by a founding team with direct responsibility across architecture, engineering, delivery, and communication.
            </p>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Compact Visual + Stacked Founders Directory (lg:hidden)     */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-4">
          {/* Team Visual */}
          <div className="bg-[#F8F5EE] border border-[#DED7C9] overflow-hidden shadow-[0_4px_16px_rgba(15,23,37,0.03)]">
            <div className="relative bg-[#0F1725] overflow-hidden aspect-[16/10]">
              <picture className="w-full h-full block">
                <source srcSet="/engineering/engineering-studio-team.webp" type="image/webp" />
                <img
                  src="/engineering/engineering-studio-team.jpg"
                  alt="NEXARYA engineering leadership collaboration and review session"
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="576"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
            </div>
            <div className="px-4 py-2.5 bg-[#E8E3D8]/70 border-t border-[#DED7C9] flex items-center justify-between text-xs font-mono text-[#394352]">
              <span className="text-[#17202B] font-semibold text-[11px] uppercase tracking-wider">
                FOUNDING LEADERSHIP
              </span>
              <span className="text-[#C59A3D] text-[10px] uppercase font-semibold">
                DIRECT ACCESS
              </span>
            </div>
          </div>

          {/* Compact Founders List */}
          <div className="bg-[#F8F5EE] border border-[#DED7C9] divide-y divide-[#DED7C9] shadow-[0_4px_16px_rgba(15,23,37,0.03)]">
            {FOUNDERS.map((founder) => (
              <div key={founder.name} className="p-3.5 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#C59A3D]">{founder.num}</span>
                    <span className="font-editorial text-lg text-[#17202B] font-medium leading-none">{founder.name}</span>
                  </div>
                  <p className="font-mono text-[10px] text-[#394352] uppercase tracking-wider mt-1 pl-4">
                    {founder.responsibility}
                  </p>
                </div>
                <span className="font-mono text-[9px] px-2 py-0.5 bg-[#E8E3D8] text-[#17202B] uppercase tracking-wider shrink-0 font-medium">
                  {founder.role}
                </span>
              </div>
            ))}
          </div>

          {/* Meet The Team Link */}
          <div className="pt-2">
            <Link
              to="/about"
              className="flex items-center justify-between w-full px-5 py-3 bg-[#0F1725] hover:bg-[#141F30] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors min-h-[44px]"
            >
              <span>MEET THE TEAM</span>
              <ArrowRight size={12} className="text-[#C59A3D]" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Collaboration Anchor + 4 Monogram Cards (hidden lg:block)   */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          {/* Editorial Collaboration Visual Anchor */}
          <RevealOnScroll delayMs={40}>
            <div className="mb-12 sm:mb-14 bg-[#F8F5EE] border border-[#DED7C9] shadow-[0_6px_24px_rgba(15,23,37,0.03)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 bg-[#0F1725] overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9]">
                  <picture className="w-full h-full block">
                    <source srcSet="/engineering/engineering-studio-team.webp" type="image/webp" />
                    <img
                      src="/engineering/engineering-studio-team.jpg"
                      alt="Multi-disciplinary engineering collaboration, problem solving and technical review session"
                      loading="eager"
                      decoding="async"
                      width="1024"
                      height="576"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                    />
                  </picture>
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#DED7C9]">
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-[#C59A3D] uppercase tracking-widest font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                      <span>FOUNDING LEADERSHIP</span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#17202B] font-normal leading-tight mb-3">
                      Engineers who think in systems, not tickets.
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                      We work in direct alignment with your teams. Architecture, code reviews, and schema decisions are led by active practitioners with end-to-end accountability.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#DED7C9] flex items-center justify-between text-xs font-mono text-[#68717B]">
                    <span>PRACTITIONER ENGAGEMENT</span>
                    <span className="text-[#17202B] font-semibold">DIRECT ACCESS</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 4 Authentic Founders Monogram Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="bg-[#F8F5EE] border border-[#DED7C9] p-6 sm:p-7 flex flex-col justify-between shadow-[0_6px_24px_rgba(15,23,37,0.03)] hover:border-[#17202B]/40 transition-colors"
              >
                <div>
                  {/* Intentional Editorial Monogram Plate */}
                  <div className="aspect-[4/5] bg-[#E8E3D8]/70 border border-[#DED7C9] mb-5 flex flex-col justify-between p-5 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#68717B]">
                      <span className="font-semibold text-[#C59A3D]">{founder.num}</span>
                      <span className="uppercase tracking-wider text-[10px]">CO-FOUNDER</span>
                    </div>

                    <div className="my-auto text-center">
                      <div className="w-16 h-16 border border-[#DED7C9] bg-[#FFFFFF] mx-auto flex items-center justify-center font-editorial text-2xl text-[#17202B] font-normal tracking-wide shadow-xs">
                        {founder.initials}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C59A3D] font-semibold mt-3 block">
                        {founder.name}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-[#DED7C9] flex items-center justify-between text-[9px] font-mono text-[#68717B] uppercase">
                      <span>NEXARYA</span>
                      <span>STUDIO LEAD</span>
                    </div>
                  </div>

                  {/* Name, Role & Responsibility */}
                  <div className="space-y-1">
                    <h3 className="font-editorial text-2xl text-[#17202B] font-normal leading-snug">
                      {founder.name}
                    </h3>
                    
                    <div className="font-mono text-[11px] text-[#C59A3D] uppercase font-semibold tracking-wider">
                      {founder.role} &mdash; {founder.responsibility}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
