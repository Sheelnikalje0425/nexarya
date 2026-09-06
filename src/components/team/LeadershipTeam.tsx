import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Founder {
  id: string;
  num: string;
  name: string;
  role: string;
  responsibility: string;
  pipelineNode: string;
  initials: string;
  focus: string;
}

const FOUNDERS: Founder[] = [
  {
    id: "mahesh-nage",
    num: "01",
    name: "MAHESH NAGE",
    role: "Co-founder",
    responsibility: "Systems Strategy & Executive Governance",
    pipelineNode: "STRATEGY",
    initials: "MN",
    focus: "Business alignment, architectural governance, and strategic software scoping.",
  },
  {
    id: "sheel-nikalje",
    num: "02",
    name: "SHEEL NIKALJE",
    role: "Co-founder",
    responsibility: "Operational Delivery & Engineering Partnerships",
    pipelineNode: "DELIVERY",
    initials: "SN",
    focus: "Delivery cadence, operational execution, and stakeholder engineering partnerships.",
  },
  {
    id: "bhupesh-mukane",
    num: "03",
    name: "BHUPESH MUKANE",
    role: "Co-founder",
    responsibility: "System Architecture & Core Infrastructure",
    pipelineNode: "ARCHITECTURE",
    initials: "BM",
    focus: "Backend pipelines, distributed systems, database schema, and runtime resilience.",
  },
  {
    id: "pravin-epilli",
    num: "04",
    name: "PRAVIN EPILLI",
    role: "Co-founder",
    responsibility: "Technical Communications & Brand Architecture",
    pipelineNode: "COMMUNICATION",
    initials: "PE",
    focus: "Interface clarity, technical documentation, design systems, and brand integrity.",
  },
];

const PIPELINE_NODES = ["STRATEGY", "DELIVERY", "ARCHITECTURE", "COMMUNICATION"];

export default function LeadershipTeam() {
  const [activeFounderId, setActiveFounderId] = useState<string>("mahesh-nage");

  const activeFounder = FOUNDERS.find((f) => f.id === activeFounderId) || FOUNDERS[0];

  return (
    <section
      id="people"
      data-section="founders"
      className="py-24 sm:py-32 bg-[#F4EFE6] border-b border-[#0E1720]/15 text-[#0E1720] relative overflow-hidden select-none"
      aria-label="Founders and Leadership"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Section Header, Editorial Copy, Founder Dossier */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.22em] text-[#8C6D1F] uppercase font-semibold">
                  05 // PEOPLE
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6 font-normal">
                Built by people who <span className="italic font-normal">understand the work.</span>
              </h2>

              {/* Concise Supporting Copy */}
              <p className="font-sans text-base sm:text-lg text-[#3A4753] font-light leading-relaxed mb-8">
                NEXARYA is built around a small founding team with responsibility across product, engineering, operations and communication.
              </p>

              {/* Subtle Responsibility Flow Sequence */}
              <div className="mb-8 p-4 bg-[#FAF8F5] border border-[#0E1720]/15">
                <div className="font-mono text-[10px] text-[#8C6D1F] tracking-[0.16em] uppercase font-semibold mb-2.5 flex items-center justify-between">
                  <span>FOUNDING RESPONSIBILITY CHAIN</span>
                  <span>4 DOMAINS</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#5C6975] flex-wrap gap-1">
                  {PIPELINE_NODES.map((node, idx) => {
                    const isActive = activeFounder.pipelineNode === node;
                    return (
                      <React.Fragment key={node}>
                        <span
                          className={`transition-colors duration-200 font-medium ${
                            isActive ? "text-[#0E1720] font-bold" : "text-[#5C6975]/70"
                          }`}
                        >
                          {node}
                        </span>
                        {idx < PIPELINE_NODES.length - 1 && (
                          <span className="text-[#8C6D1F]/60 select-none">↓</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Deliberate Editorial Founder Dossier / Photo Registration Frame (Desktop) */}
              <div className="hidden lg:block bg-[#FAF8F5] border border-[#0E1720]/15 p-6 relative">
                {/* Registration corner marks */}
                <span className="absolute top-2 left-2 font-mono text-[10px] text-[#8C6D1F]/60 select-none">+</span>
                <span className="absolute top-2 right-2 font-mono text-[10px] text-[#8C6D1F]/60 select-none">+</span>
                <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[#8C6D1F]/60 select-none">+</span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[#8C6D1F]/60 select-none">+</span>

                {/* Dossier Header */}
                <div className="flex items-center justify-between border-b border-[#0E1720]/10 pb-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#8C6D1F] uppercase font-semibold">
                    FOUNDER PROFILE // {activeFounder.num} OF 04
                  </span>
                  <span className="font-mono text-[10px] text-[#5C6975] tracking-widest uppercase">
                    PRACTITIONER
                  </span>
                </div>

                {/* Intentional Photo Registration Frame Placeholder */}
                <div className="w-full h-44 bg-[#EBE5DA]/60 border border-dashed border-[#0E1720]/20 flex flex-col items-center justify-center p-4 mb-4 relative overflow-hidden">
                  {/* Subtle Grid Watermark Pattern */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(#0E1720 1px, transparent 1px), linear-gradient(90deg, #0E1720 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Monogram Initials */}
                  <div className="w-16 h-16 rounded-none border border-[#0E1720]/25 bg-[#FAF8F5] flex items-center justify-center mb-2 z-10 shadow-sm">
                    <span className="font-editorial text-2xl font-normal tracking-wider text-[#0E1720]">
                      {activeFounder.initials}
                    </span>
                  </div>

                  {/* Intentional Registration Label */}
                  <div className="font-mono text-[9px] text-[#5C6975] tracking-[0.14em] uppercase text-center z-10">
                    PORTRAIT REGISTRATION FRAME
                  </div>
                  <div className="font-mono text-[8px] text-[#8C6D1F] tracking-widest uppercase text-center mt-0.5 z-10">
                    {activeFounder.name}
                  </div>
                </div>

                {/* Focus Description */}
                <div>
                  <div className="font-mono text-[10px] text-[#8C6D1F] uppercase tracking-wider mb-1 font-medium">
                    CORE RESPONSIBILITY FOCUS
                  </div>
                  <p className="font-sans text-xs text-[#3A4753] leading-relaxed font-light">
                    {activeFounder.focus}
                  </p>
                </div>
              </div>

              {/* Project Inquiry CTA */}
              <div className="mt-8 p-6 bg-[#FFFFFF] border border-[#0E1720]/15">
                <h3 className="font-editorial text-xl sm:text-2xl text-[#0E1720] mb-2 font-normal">
                  Have a system that needs to be built?
                </h3>
                <p className="font-sans text-xs text-[#5C6975] leading-relaxed font-light mb-4">
                  Speak directly with the founding team regarding architecture, scope, and technical discovery.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1720] text-[#FAF8F5] hover:bg-[#8C6D1F] transition-colors font-mono text-xs uppercase tracking-wider font-medium"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#0E1720]/20 text-[#0E1720] hover:border-[#0E1720] transition-colors font-mono text-xs uppercase tracking-wider"
                  >
                    <span>VIEW OUR WORK</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Vertical Founder Roster (Editorial Horizontal Rows) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <RevealOnScroll delayMs={100}>
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[#0E1720]/20 pb-3 mb-2">
                <span className="font-mono text-xs tracking-[0.18em] text-[#0E1720] uppercase font-semibold">
                  FOUNDER ROSTER
                </span>
                <span className="font-mono text-xs text-[#5C6975] tracking-widest">
                  4 PRACTITIONERS
                </span>
              </div>

              {/* Roster Rows */}
              <div className="border-t border-[#0E1720]/15">
                {FOUNDERS.map((founder) => {
                  const isSelected = activeFounderId === founder.id;

                  return (
                    <div
                      key={founder.id}
                      onMouseEnter={() => setActiveFounderId(founder.id)}
                      onFocus={() => setActiveFounderId(founder.id)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${founder.name}, ${founder.role}, ${founder.responsibility}`}
                      className={`group block w-full text-left py-6 sm:py-8 px-4 sm:px-6 border-b border-[#0E1720]/15 transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#8C6D1F] ${
                        isSelected ? "bg-[#FAF8F5] translate-x-1" : "hover:bg-[#FAF8F5]/60 hover:translate-x-1"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6">
                        {/* Left: Index & Name */}
                        <div className="md:w-5/12">
                          <div className="flex items-baseline gap-3 mb-1">
                            <span className="font-mono text-xs text-[#8C6D1F] font-semibold">
                              {founder.num}
                            </span>
                            <h3 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] group-hover:text-[#8C6D1F] transition-colors font-normal tracking-[-0.01em]">
                              {founder.name}
                            </h3>
                          </div>
                          <div className="pl-7 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C6D1F] font-medium">
                            {founder.role}
                          </div>
                        </div>

                        {/* Right: Responsibility Area & Arrow */}
                        <div className="md:w-7/12 flex items-start justify-between gap-4 pl-7 md:pl-0">
                          <div className="space-y-1.5">
                            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5C6975] font-semibold">
                              RESPONSIBILITY AREA
                            </div>
                            <div className="font-sans text-sm sm:text-base text-[#0E1720] font-normal leading-snug">
                              {founder.responsibility}
                            </div>

                            {/* Mobile-only inline details so no information is hidden behind hover */}
                            <div className="lg:hidden mt-3 pt-3 border-t border-[#0E1720]/10 flex items-start gap-3">
                              <div className="w-9 h-9 shrink-0 border border-[#0E1720]/20 bg-[#FAF8F5] flex items-center justify-center">
                                <span className="font-editorial text-sm text-[#0E1720]">
                                  {founder.initials}
                                </span>
                              </div>
                              <p className="font-sans text-xs text-[#5C6975] leading-relaxed">
                                {founder.focus}
                              </p>
                            </div>
                          </div>

                          <div className="shrink-0 pt-1">
                            <div
                              className={`w-7 h-7 rounded-none border flex items-center justify-center transition-all duration-200 ${
                                isSelected
                                  ? "border-[#0E1720] bg-[#0E1720] text-[#FAF8F5]"
                                  : "border-[#0E1720]/20 text-[#5C6975] group-hover:border-[#0E1720] group-hover:text-[#0E1720]"
                              }`}
                            >
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Roster Bottom Note */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#5C6975] font-mono px-2">
                <span>PRACTITIONER DIRECT ACCESS</span>
                <span className="text-[#8C6D1F]">NO NON-TECHNICAL INTERMEDIARIES</span>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
