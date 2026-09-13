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

const TECH_STACK = [
  { name: "Python", role: "Backend runtime & business rule engine" },
  { name: "Flask", role: "Lightweight, deterministic API gateway" },
  { name: "MySQL", role: "ACID relational schema with audit tables" },
  { name: "Docker", role: "Isolated containerized staging and runtime" },
  { name: "AWS", role: "Cloud hosting, SSL termination & persistent storage" },
];

export default function RailwayCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="Railway Concession Management System | Case File | NEXARYA"
        description="Engineering case file for Railway Concession Management System: multi-tier verification gates, deterministic workflows, and compliance audit trails."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Navigation Link */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-[#68717B] hover:text-[#17202B] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Case Files</span>
          </Link>
          <span className="font-mono text-xs text-[#68717B] uppercase tracking-wider hidden sm:inline">
            CASE SPECIFICATION
          </span>
        </div>

        {/* 1. PROJECT INTRO: Editorial Header & Metadata */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
              <span className="font-mono text-xs tracking-[0.22em] text-[#C59A3D] uppercase font-semibold">
                CASE FILE 02 // CASE STUDY
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#17202B] uppercase px-2.5 py-0.5 border border-[#DED7C9] bg-[#F1EDE3] font-semibold">
                PUBLIC INFRASTRUCTURE
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] text-[#17202B] leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl">
              Railway Concession Management System
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#394352] font-light leading-relaxed max-w-3xl mb-10">
              An enterprise operations platform engineered to digitize student verification workflows, institutional authorization, and concession record tracking.
            </p>

            {/* Structured Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#DED7C9] border border-[#DED7C9]">
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">CLIENT SECTOR</span>
                <span className="font-sans text-xs text-[#17202B] font-medium">Western Transit & Education Consortium</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">SYSTEM ROLE</span>
                <span className="font-sans text-xs text-[#17202B] font-medium">Verification & Concession Operations Platform</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">CORE STACK</span>
                <span className="font-sans text-xs text-[#17202B] font-medium">Python, Flask, MySQL, Docker, AWS</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider block mb-1">ARCHITECTURE</span>
                <span className="font-mono text-xs text-[#17202B] font-semibold">
                  Multi-role Verification & Authorization Workflow
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 01 // THE SYSTEM: Operational Context & Problem */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28 p-8 sm:p-14 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(15,23,37,0.03)]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  01 // THE SYSTEM
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-6">
                Manual paper bottlenecks & audit obscurity.
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
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

        {/* 02 // APPLICATION: Student Application Tracking (Screenshot 01) */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  02 // APPLICATION
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Student application tracking & lifecycle visibility.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                Students can follow the progress of a concession application through a clearly defined approval lifecycle, from submission through issuance.
              </p>
            </div>

            {/* Evidence Frame: Screenshot 01 */}
            <div className="bg-[#FFFFFF] border border-[#DED7C9] p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,37,0.03)]">
              {/* Docket Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#DED7C9] font-mono text-xs text-[#394352]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#17202B]">FIGURE 2.1 — STUDENT APPLICATION TRACKING</span>
                  <span className="text-[#68717B]">/</span>
                  <span className="text-[#17202B] font-semibold">APPLICANT PORTAL</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#68717B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Product interface — demonstration environment</span>
                </div>
              </div>

              {/* Image Container */}
              <div className="border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden mb-6">
                <img
                  src="/projects/railway/evidence/01-railway-student-applications.jpg"
                  alt="Railway Concession Student Portal showing active application progression and certificate details"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                />
              </div>

              {/* Caption & Explanatory Context */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-start">
                <div className="md:col-span-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase block mb-1">
                    PRIMARY CAPTION
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#17202B] font-normal">
                    STUDENT APPLICATION TRACKING
                  </h3>
                </div>
                <div className="md:col-span-8 space-y-3 font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  <p>
                    Students can follow the progress of a concession application through a clearly defined approval lifecycle, from submission through issuance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs text-[#17202B]">
                    <div className="p-3 bg-[#F1EDE3] border border-[#DED7C9]">
                      <span className="text-[#68717B] text-[10px] block mb-0.5">PROGRESSION</span>
                      <span className="font-bold">4-Stage Pipeline</span>
                    </div>
                    <div className="p-3 bg-[#F1EDE3] border border-[#DED7C9]">
                      <span className="text-[#68717B] text-[10px] block mb-0.5">AUTHENTICATION</span>
                      <span className="font-bold">Institutional Email</span>
                    </div>
                    <div className="p-3 bg-[#F1EDE3] border border-[#DED7C9]">
                      <span className="text-[#68717B] text-[10px] block mb-0.5">OUTPUT</span>
                      <span className="font-bold">Issued Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 03 // OPERATIONS: Staff Reports & Analytics (Screenshot 02 - Reversed Composition) */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  03 // OPERATIONS
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Staff operations, reporting & analytics.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                Staff have a dedicated operational interface for reviewing application activity and generating certificate reports.
              </p>
            </div>

            {/* Evidence Frame: Screenshot 02 */}
            <div className="bg-[#FFFFFF] border border-[#DED7C9] p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,37,0.03)]">
              {/* Docket Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#DED7C9] font-mono text-xs text-[#394352]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#17202B]">FIGURE 2.2 — STAFF OPERATIONS & REPORTING</span>
                  <span className="text-[#68717B]">/</span>
                  <span className="text-[#17202B] font-semibold">ADMINISTRATIVE CONSOLE</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#68717B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Product interface — demonstration environment</span>
                </div>
              </div>

              {/* Reversed Layout Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-2">
                {/* Context Column (Left - 4 Cols) */}
                <div className="lg:col-span-4 space-y-4 font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase block mb-1">
                      OPERATIONAL CONSOLE
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#17202B] font-normal mb-2">
                      STAFF OPERATIONS & REPORTING
                    </h3>
                    <p>
                      Staff have a dedicated operational interface for reviewing application activity and generating certificate reports.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F1EDE3] border border-[#DED7C9] space-y-2.5 font-mono text-xs text-[#17202B]">
                    <div className="text-[#68717B] text-[10px] uppercase font-bold tracking-wider">
                      VERIFIED CONSOLE CONTROLS
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#394352]">Status Tracking:</span>
                      <span className="font-bold">Approved / Pending / Issued</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#394352]">Report Filtering:</span>
                      <span className="font-bold">Certificate Number Range</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#394352]">Data Export:</span>
                      <span className="font-bold">CSV Applications Export</span>
                    </div>
                  </div>
                </div>

                {/* Screenshot Container (Right - 8 Cols) */}
                <div className="lg:col-span-8 border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                  <img
                    src="/projects/railway/evidence/02-railway-staff-reports.jpg"
                    alt="Staff console reports and analytics view showing application counts and certificate range generation"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 04 // ROLE ACCESS: Role-Based Entry (Screenshot 03) */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  04 // ROLE ACCESS
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Role-based entry & boundary segregation.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                The system separates student and staff entry points so each role reaches the appropriate operational interface.
              </p>
            </div>

            {/* Evidence Frame: Screenshot 03 */}
            <div className="bg-[#FFFFFF] border border-[#DED7C9] p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,37,0.03)]">
              {/* Docket Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#DED7C9] font-mono text-xs text-[#394352]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#17202B]">FIGURE 2.3 — ROLE-BASED ENTRY</span>
                  <span className="text-[#68717B]">/</span>
                  <span className="text-[#17202B] font-semibold">AUTHENTICATION PORTAL</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#68717B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Product interface — demonstration environment</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Screenshot Container (7 Cols) */}
                <div className="lg:col-span-7 border border-[#DED7C9] bg-[#F1EDE3] overflow-hidden">
                  <img
                    src="/projects/railway/evidence/03-railway-role-login.jpg"
                    alt="Railway Concession login interface showing Student Login and Staff Login role separation"
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>

                {/* Supporting Text (5 Cols) */}
                <div className="lg:col-span-5 space-y-4 font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase block mb-1">
                      ACCESS BOUNDARIES
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#17202B] font-normal mb-2">
                      ROLE-BASED ENTRY
                    </h3>
                    <p>
                      The system separates student and staff entry points so each role reaches the appropriate operational interface.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#DED7C9]">
                    <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                      <span className="font-mono text-[#C59A3D] font-bold">▪</span>
                      <span>Dedicated applicant interface for submission and tracking.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs font-sans text-[#17202B]">
                      <span className="font-mono text-[#C59A3D] font-bold">▪</span>
                      <span>Restricted administrative access for review, approval, and reports.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 05 // WORKFLOW ARCHITECTURE: 5-Stage Sequence */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  05 // WORKFLOW ARCHITECTURE
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Software for accountability.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                The platform models every concession application as a deterministic workflow with explicit verification gates, role boundaries, and audit checkpoints.
              </p>
            </div>

            {/* 5 Vertical Stages Sequence */}
            <div className="space-y-0 border-t border-[#DED7C9]">
              {WORKFLOW_STAGES.map((st, idx) => (
                <RevealOnScroll key={st.step} delayMs={idx * 40}>
                  <div className="py-10 sm:py-14 border-b border-[#DED7C9] hover:bg-[#F1EDE3] transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                      
                      {/* Step Num & Phase Name (3 Cols) */}
                      <div className="lg:col-span-3 flex items-baseline gap-4">
                        <span className="font-editorial text-4xl sm:text-5xl text-[#17202B] font-normal tabular-nums">
                          {st.step}
                        </span>
                        <div>
                          <div className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase">
                            WORKFLOW STAGE
                          </div>
                          <h3 className="font-mono text-sm tracking-[0.16em] uppercase text-[#17202B] font-bold">
                            {st.phase}
                          </h3>
                        </div>
                      </div>

                      {/* Title & Description (6 Cols) */}
                      <div className="lg:col-span-6 space-y-2">
                        <h4 className="font-editorial text-2xl sm:text-3xl text-[#17202B] leading-snug">
                          {st.title}
                        </h4>
                        <p className="font-sans text-sm sm:text-base text-[#394352] leading-relaxed font-light">
                          {st.summary}
                        </p>
                        <div className="pt-2 text-xs font-sans text-[#17202B]">
                          <strong className="font-mono uppercase text-[10px] text-[#68717B] block">SAFEGUARDS:</strong>
                          <span>{st.safeguards}</span>
                        </div>
                      </div>

                      {/* Invariant Tag (3 Cols) */}
                      <div className="lg:col-span-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#DED7C9]">
                        <div className="font-mono text-xs text-[#17202B] font-medium flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                          <span>OPERATIONAL GATE</span>
                        </div>
                        <div className="font-mono text-[11px] text-[#68717B] leading-tight">
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

        {/* 06 // ENGINEERING: Verified Technology Stack */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28 p-8 sm:p-14 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(15,23,37,0.03)]">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  06 // ENGINEERING
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#17202B] leading-tight mb-4">
                Deterministic architecture & technology stack.
              </h2>
              <p className="font-sans text-base text-[#394352] leading-relaxed font-light">
                The solution is constructed on a lightweight, strictly typed Python backend, ACID-compliant relational schemas, and containerized deployment infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="p-6 bg-[#F1EDE3] border border-[#DED7C9]">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#68717B] mb-1">TECHNOLOGY</div>
                  <h3 className="font-editorial text-2xl text-[#17202B] mb-2">{tech.name}</h3>
                  <p className="font-sans text-xs text-[#394352] font-light leading-relaxed">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Verified Client Testimonial */}
        <RevealOnScroll>
          <div className="mb-20 sm:mb-28">
            <TestimonialSpotlight
              quote="Nexarya took our fragmented, manual concession approval processes and engineered a reliable, role-governed platform. Their architectural discipline and milestone delivery made a complex institutional rollout predictable and verifiable."
              clientName="Rajesh Sharma"
              designation="Head of Digital Infrastructure"
              company="Western Transit & Education Consortium"
              project="Railway Concession Management System"
              projectSlug="railway-concession-management"
            />
          </div>
        </RevealOnScroll>

        {/* 07 // START A PROJECT: Primary Conversion CTA */}
        <RevealOnScroll>
          <div className="p-10 sm:p-16 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_16px_50px_rgba(15,23,37,0.03)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#17202B] uppercase font-bold">
                  07 // START A PROJECT
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B] mb-3">
                Have a complex operational system to engineer?
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#394352] font-light leading-relaxed">
                We design and build bespoke business platforms, multi-stage review gates, and structured audit ledgers tailored to your operational constraints.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="px-8 py-4 text-center justify-center">
                Start a Project &rarr;
              </Button>
              <a
                href="mailto:hello@nexarya.in"
                className="px-6 py-4 border border-[#DED7C9] hover:border-[#17202B] text-xs font-mono tracking-wider uppercase text-[#17202B] text-center transition-colors bg-[#F1EDE3]"
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
