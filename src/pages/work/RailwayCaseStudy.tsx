import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TestimonialSpotlight from "@/components/testimonials/TestimonialSpotlight";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "@/components/ui/Icons";

const WORKFLOW_STAGES = [
  {
    step: "01",
    phase: "APPLICATION",
    title: "Student Identity & Document Intake",
    summary: "Students submit identification details, institutional enrollment documents, and travel route selections through structured digital forms.",
    safeguards: "Standardized intake validation and required institutional document attachments.",
    invariant: "INVARIANT: Application requires verified enrollment attachments before review entry.",
  },
  {
    step: "02",
    phase: "VERIFICATION",
    title: "Institutional Officer Validation Queue",
    summary: "Authorized institutional officers inspect student identity records, cross-referencing academic rosters and active enrollment status.",
    safeguards: "Role-segregated verification queue with mandatory review reason logging.",
    invariant: "INVARIANT: Only accredited institutional officers can certify applicant eligibility.",
  },
  {
    step: "03",
    phase: "APPROVAL",
    title: "Transit Authority Authorization Gates",
    summary: "Railway administration officers review certified applications, applying quota rules and issuing institutional concession authorizations.",
    safeguards: "Multi-tier administrative sign-off and role-gated state transitions.",
    invariant: "INVARIANT: State transition to APPROVED requires explicit administrator credentials.",
  },
  {
    step: "04",
    phase: "PASS ISSUANCE",
    title: "Digital Pass Generation & QR Verification",
    summary: "Instant generation of digital concession passes and certificates embedding verification QR codes for station verification.",
    safeguards: "Standardized digital concession certificate with embedded verification QR code.",
    invariant: "INVARIANT: Pass is generated upon completed administrative approval.",
  },
  {
    step: "05",
    phase: "AUDIT",
    title: "Structured Compliance & Action Logging",
    summary: "Structured audit logging of officer review actions, status transitions, and administrative decisions to maintain complete operational accountability.",
    safeguards: "Relational audit log tracking review history and officer actions.",
    invariant: "INVARIANT: Administrative actions record timestamped officer attribution.",
  },
];

export default function RailwayCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Railway Concession Management System | Case File | NEXARYA"
        description="Engineering case file for Railway Concession Management System: multi-tier verification gates, deterministic workflows, and compliance audit trails."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Navigation Link */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.16em] uppercase text-[#5C6975] hover:text-[#0E1720] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Case Files</span>
          </Link>
          <span className="font-tech text-xs text-[#8E9CA8] uppercase tracking-wider">
            CASE SPECIFICATION // INSTITUTIONAL PROJECT RECORD
          </span>
        </div>

        {/* 1. PROJECT INTRO: Editorial Header & Metadata */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-semibold">
                CASE FILE 02 // INSTITUTIONAL PROJECT RECORD
              </span>
              <span className="font-tech text-[10px] tracking-[0.16em] text-[#0E1720] uppercase px-2.5 py-0.5 border border-[#DCD6CA] bg-[#FAF8F5] font-semibold">
                PUBLIC INFRASTRUCTURE
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] text-[#0E1720] leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl">
              Railway Concession Management System
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#3A4753] font-light leading-relaxed max-w-3xl mb-10">
              An enterprise operations platform engineered to digitize student verification workflows, institutional authorization, and concession record tracking.
            </p>

            {/* Structured Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#DCD6CA] border border-[#DCD6CA]">
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">CLIENT SECTOR</span>
                <span className="font-sans text-xs text-[#0E1720] font-medium">Western Transit & Education Consortium</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">SYSTEM ROLE</span>
                <span className="font-sans text-xs text-[#0E1720] font-medium">Verification & Concession Operations Platform</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">CORE STACK</span>
                <span className="font-sans text-xs text-[#0E1720] font-medium">Python, Flask, MySQL, Docker, AWS</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider block mb-1">ARCHITECTURE</span>
                <span className="font-tech text-xs text-[#0E1720] font-semibold">
                  Multi-role Verification & Authorization Workflow
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 2. THE OPERATIONAL PROBLEM */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28 p-8 sm:p-14 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.05)]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  01 // THE OPERATIONAL PROBLEM
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-6">
                Manual paper bottlenecks & audit obscurity.
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#5C6975] font-light leading-relaxed">
                <p>
                  Prior to modernization, railway concession administration relied on physical paper applications requiring in-person student visits, manual institutional seal verification, and physical register bookkeeping across distributed station counters.
                </p>
                <p>
                  This manual process created substantial operational friction: multi-week verification turnaround times, high risks of unauthorized concession passes, and an inability to trace which institutional officer approved specific applications when audits were conducted.
                </p>
                <p>
                  NEXARYA was engaged to architect a structured digital platform: eliminating physical paper handling while enforcing multi-tier verification checks, automated concession certificate generation with verification QR codes, and structured compliance ledgers.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3. 5-STAGE OPERATIONAL WORKFLOW SEQUENCE */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  02 // 5-STAGE OPERATIONAL WORKFLOW
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] leading-tight mb-4">
                Software for accountability.
              </h2>
              <p className="font-sans text-base text-[#5C6975] leading-relaxed font-light">
                The platform models every concession application as a deterministic workflow with explicit verification gates, role boundaries, and audit checkpoints.
              </p>
            </div>

            {/* 5 Vertical Stages Sequence */}
            <div className="space-y-0 border-t border-[#DCD6CA]">
              {WORKFLOW_STAGES.map((st, idx) => (
                <RevealOnScroll key={st.step} delayMs={idx * 40}>
                  <div className="py-10 sm:py-14 border-b border-[#DCD6CA] hover:bg-[#FAF8F5] transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                      
                      {/* Step Num & Phase Name (3 Cols) */}
                      <div className="lg:col-span-3 flex items-baseline gap-4">
                        <span className="font-editorial text-4xl sm:text-5xl text-[#0E1720] font-normal tabular-nums">
                          {st.step}
                        </span>
                        <div>
                          <div className="font-tech text-[10px] tracking-[0.2em] text-[#8E9CA8] uppercase">
                            WORKFLOW STAGE
                          </div>
                          <h3 className="font-tech text-sm tracking-[0.16em] uppercase text-[#0E1720] font-bold">
                            {st.phase}
                          </h3>
                        </div>
                      </div>

                      {/* Title & Description (6 Cols) */}
                      <div className="lg:col-span-6 space-y-2">
                        <h4 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] leading-snug">
                          {st.title}
                        </h4>
                        <p className="font-sans text-sm sm:text-base text-[#5C6975] leading-relaxed font-light">
                          {st.summary}
                        </p>
                        <div className="pt-2 text-xs font-sans text-[#0E1720]">
                          <strong className="font-tech uppercase text-[10px] text-[#8E9CA8] block">SAFEGUARDS:</strong>
                          <span>{st.safeguards}</span>
                        </div>
                      </div>

                      {/* Invariant Tag (3 Cols) */}
                      <div className="lg:col-span-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#EAE5DB]">
                        <div className="font-tech text-xs text-[#0E1720] font-medium flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
                          <span>OPERATIONAL GATE</span>
                        </div>
                        <div className="font-tech text-[11px] text-[#8E9CA8] leading-tight">
                          {st.invariant}
                        </div>
                      </div>

                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* 4. VERIFIED CLIENT TESTIMONIAL */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <TestimonialSpotlight
              quote="Nexarya took our fragmented, manual concession approval processes and engineered a reliable, role-governed platform. Their architectural discipline and milestone delivery made a complex institutional rollout seamless."
              clientName="Rajesh Sharma"
              designation="Head of Digital Infrastructure"
              company="Western Transit & Education Consortium"
              project="Railway Concession Management System"
              projectSlug="railway"
            />
          </div>
        </RevealOnScroll>

        {/* 5. PROJECT INITIATION CTA BLOCK */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.06)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#0E1720] uppercase font-bold">
                  ENTERPRISE SYSTEM INITIATION
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] mb-3">
                Have a complex operational system to engineer?
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#5C6975] font-light leading-relaxed">
                We design and build bespoke business platforms, multi-stage review gates, and structured audit ledgers tailored to your operational constraints.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="px-8 py-4 text-center justify-center">
                Start a Discussion
              </Button>
              <a
                href="mailto:hello@nexarya.in"
                className="px-6 py-4 border border-[#DCD6CA] hover:border-[#0E1720] text-xs font-tech tracking-wider uppercase text-[#0E1720] text-center transition-colors bg-[#FAF8F5]"
              >
                hello@nexarya.in
              </a>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
