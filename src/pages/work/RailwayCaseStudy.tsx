import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TestimonialSpotlight from "@/components/testimonials/TestimonialSpotlight";
import Button from "@/components/ui/Button";
import { ArrowLeft, Mail } from "@/components/ui/Icons";

const WORKFLOW_STAGES = [
  {
    step: "01",
    phase: "Application Intake",
    title: "Student Identity & Document Intake",
    summary: "Students submit identification details, institutional enrollment documents, and travel route selections through structured digital forms.",
  },
  {
    step: "02",
    phase: "Institutional Verification",
    title: "Institutional Officer Validation Queue",
    summary: "Authorized institutional officers inspect student identity records, cross-referencing academic rosters and active enrollment status.",
  },
  {
    step: "03",
    phase: "Authority Approval",
    title: "Transit Authority Authorization Gates",
    summary: "Railway administration officers review certified applications, applying quota rules and issuing institutional concession authorizations.",
  },
  {
    step: "04",
    phase: "Pass Issuance",
    title: "Digital Pass Generation & QR Verification",
    summary: "Instant generation of digital concession passes embedding verification QR codes for station gatekeepers and inspectors.",
  },
  {
    step: "05",
    phase: "Audit & Telemetry",
    title: "Structured Compliance & Action Logging",
    summary: "Audit logging of officer review actions, status transitions, and administrative decisions to maintain complete operational accountability.",
  },
];

const TECH_STACK = [
  { name: "Python", role: "Backend runtime & business rule validation" },
  { name: "Flask", role: "Lightweight, deterministic API routing" },
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
        title="Railway Concession Management System — Case Study | Nexarya"
        description="Engineering case study for Railway Concession Management System: multi-tier verification gates, deterministic workflows, and compliance audit trails."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Navigation Link */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-sans text-xs text-[#4A5363] hover:text-[#141B26] font-semibold transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to all work</span>
          </Link>
          <span className="font-sans text-xs text-[#765406] uppercase tracking-wider font-semibold">
            Case Study
          </span>
        </div>

        {/* 1. PROJECT INTRO: Editorial Header & Metadata */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
              <span className="font-sans text-[12px] sm:text-[13px] tracking-wider text-[#765406] uppercase font-semibold">
                Public Infrastructure &middot; Operations Platform
              </span>
            </div>

            <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.6rem] text-[#141B26] leading-[1.02] tracking-[-0.03em] mb-6 max-w-4xl">
              Railway Concession Management System
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#4A5363] font-light leading-relaxed max-w-3xl mb-10">
              An institutional operations platform engineered to digitize student verification workflows, institutional authorization, and concession pass issuance for transit authorities.
            </p>

            {/* Structured Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E3DDCF] border border-[#E3DDCF]">
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">Partner Organization</span>
                <span className="font-sans text-xs text-[#141B26] font-medium">Western Transit &amp; Education Consortium</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">System Type</span>
                <span className="font-sans text-xs text-[#141B26] font-medium">Verification &amp; Operations Portal</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">Technology</span>
                <span className="font-mono text-xs text-[#141B26]">Python, Flask, MySQL, Docker, AWS</span>
              </div>
              <div className="p-5 bg-[#FFFFFF]">
                <span className="font-sans text-[11px] text-[#765406] uppercase font-semibold block mb-1">Architecture</span>
                <span className="font-sans text-xs text-[#141B26] font-medium">
                  5-Stage Deterministic Workflow
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Operational Context & Problem */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-24 p-8 sm:p-12 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  The Problem
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141B26] leading-tight mb-5 font-normal">
                Manual paper bottlenecks &amp; audit obscurity.
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                <p>
                  Prior to modernization, concession administration relied on physical paper applications requiring in-person student visits, manual institutional seal verification, and physical register bookkeeping across distributed station counters.
                </p>
                <p>
                  This manual process created substantial operational friction: multi-week verification turnaround times, high risks of unauthorized concession passes, and an inability to trace which institutional officer approved specific applications when audits were conducted.
                </p>
                <p>
                  Nexarya was engaged to architect a structured digital platform: eliminating physical paper handling while enforcing multi-tier verification checks, automated concession certificate generation with verification QR codes, and structured compliance ledgers.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Application Interface Screenshot */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-24">
            <div className="max-w-3xl mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Applicant Portal
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141B26] leading-tight mb-3 font-normal">
                Student application tracking &amp; lifecycle visibility.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                Students follow the progress of their concession application through a clearly defined approval lifecycle, from submission through issuance.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E3DDCF] p-6 sm:p-8 shadow-xs">
              <div className="border border-[#E3DDCF] bg-[#F8F5EE] overflow-hidden mb-6">
                <img
                  src="/projects/railway/evidence/01-railway-student-applications.jpg"
                  alt="Railway Concession Student Portal showing active application progression and certificate details"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-editorial text-2xl text-[#141B26] font-normal">
                    Student Portal
                  </h3>
                  <span className="font-sans text-xs text-[#765406] font-medium">Application tracking &amp; pass downloads</span>
                </div>
                <div className="md:col-span-8 font-sans text-sm text-[#4A5363] leading-relaxed">
                  <p>
                    Applicants log in with institutional credentials, upload required documentation, select their travel routes, and receive notification when verification stages complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Staff Operations Interface Screenshot */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-24">
            <div className="max-w-3xl mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Administrative Console
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141B26] leading-tight mb-3 font-normal">
                Staff operations, verification queues &amp; reporting.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                Staff have a dedicated operational interface for reviewing application batches, verifying records, and generating exportable reports.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E3DDCF] p-6 sm:p-8 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-2">
                <div className="lg:col-span-4 space-y-4 font-sans text-sm text-[#4A5363] leading-relaxed">
                  <div>
                    <h3 className="font-editorial text-2xl text-[#141B26] font-normal mb-2">
                      Review Console
                    </h3>
                    <p>
                      Institutional officers review applications against student rolls and approve passes with timestamped audit logging.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F5EE] border border-[#E3DDCF] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5363]">Status Tracking:</span>
                      <span className="font-semibold text-[#141B26]">Approved / Pending / Issued</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5363]">Report Filtering:</span>
                      <span className="font-semibold text-[#141B26]">Certificate Range</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5363]">Export Format:</span>
                      <span className="font-semibold text-[#141B26]">CSV &amp; PDF</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 border border-[#E3DDCF] bg-[#F8F5EE] overflow-hidden">
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

        {/* 5-Stage Workflow Sequence */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-24">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Workflow Architecture
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141B26] leading-tight mb-4 font-normal">
                Deterministic 5-stage verification pipeline.
              </h2>
              <p className="font-sans text-base text-[#4A5363] leading-relaxed font-light">
                Every concession application moves through sequential verification gates with explicit role boundaries and audit checkpoints.
              </p>
            </div>

            <div className="divide-y divide-[#E3DDCF] border-y border-[#E3DDCF]">
              {WORKFLOW_STAGES.map((st, idx) => (
                <RevealOnScroll key={st.step} delayMs={idx * 40}>
                  <div className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    <div className="md:col-span-1">
                      <span className="font-sans text-base font-semibold text-[#765406]">
                        {st.step}
                      </span>
                    </div>

                    <div className="md:col-span-4">
                      <h3 className="font-editorial text-2xl text-[#141B26]">
                        {st.phase}
                      </h3>
                      <span className="font-sans text-xs text-[#765406] font-medium block mt-0.5">
                        {st.title}
                      </span>
                    </div>

                    <div className="md:col-span-7">
                      <p className="font-sans text-sm text-[#4A5363] leading-relaxed">
                        {st.summary}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Technology Stack Grid */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-24 p-8 sm:p-12 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Technology Stack
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#141B26] leading-tight mb-3 font-normal">
                Reliable, strictly typed architecture.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="p-6 bg-[#F8F5EE] border border-[#E3DDCF]">
                  <span className="font-mono text-xs font-semibold text-[#765406] block mb-1">
                    {tech.name}
                  </span>
                  <p className="font-sans text-xs text-[#4A5363] leading-relaxed">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Verified Client Testimonial */}
        <RevealOnScroll>
          <div className="mb-16 sm:mb-24">
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

        {/* Bottom CTA Block */}
        <RevealOnScroll>
          <div className="p-8 sm:p-12 bg-[#F1EDE3] border border-[#E3DDCF] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] text-[#765406] uppercase tracking-wider font-semibold">
                  Engineering Partnership
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#141B26] mb-2 font-normal">
                Have a complex operational system to engineer?
              </h2>
              <p className="font-sans text-sm text-[#4A5363] leading-relaxed">
                We design and build bespoke business platforms, multi-stage review gates, and structured audit ledgers tailored to your operational constraints.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" variant="primary" size="md">
                Start a project
              </Button>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </div>
  );
}
