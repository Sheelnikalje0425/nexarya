import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const RAILWAY_WORKFLOW_STATES = [
  {
    state: "01",
    name: "APPLICATION",
    summary: "Student identity intake, institutional eligibility validation, and document staging.",
    deliverable: "Structured Application & Document Intake",
  },
  {
    state: "02",
    name: "VERIFICATION",
    summary: "Institutional officer review, academic roster checks, and validation queue.",
    deliverable: "Officer Verification Queue",
  },
  {
    state: "03",
    name: "APPROVAL",
    summary: "Role-gated administrative authorization with status transition tracking.",
    deliverable: "Role-Gated Approval Record",
  },
  {
    state: "04",
    name: "PASS ISSUANCE",
    summary: "Digital concession pass generation with embedded verification QR code.",
    deliverable: "Digital Concession Pass & QR",
  },
  {
    state: "05",
    name: "AUDIT",
    summary: "Structured audit logging of officer review actions, timestamps, and administrative decisions.",
    deliverable: "Operational Audit Trail",
  },
];

export default function RailwayProof() {
  return (
    <section className="py-24 sm:py-36 bg-[#F8F5EE] border-b border-[#DED7C9] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header: Editorial Scale */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
                <span className="font-mono text-xs tracking-[0.22em] text-[#394352] uppercase font-medium">
                  CASE 02 // CASE STUDY
                </span>
              </div>
              <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem] text-[#17202B] leading-[1.02] tracking-[-0.03em]">
                Software for <br className="hidden sm:inline" />
                <span className="italic font-normal">accountability.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#394352] max-w-md font-light leading-relaxed">
              An enterprise operations platform engineered to digitize student verification workflows, institutional authorization, and concession record tracking.
            </p>
          </div>
        </RevealOnScroll>

        {/* Editorial Case-File Container */}
        <RevealOnScroll delayMs={60}>
          <div className="bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_16px_50px_rgba(14,23,32,0.07)] overflow-hidden">
            
            {/* Header Docket Bar */}
            <div className="px-6 py-4 bg-[#F1EDE3] border-b border-[#DED7C9] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#17202B] font-bold uppercase tracking-wider">
                  CASE FILE: RAILWAY CONCESSION MANAGEMENT
                </span>
                <span className="text-[#68717B]">/</span>
                <span className="font-mono text-xs text-[#394352]">
                  Western Transit & Education Consortium
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#17202B] uppercase px-2.5 py-1 bg-[#FFFFFF] border border-[#DED7C9] font-semibold">
                  CASE SPECIFICATION
                </span>
              </div>
            </div>

            {/* 5-Stage Verified Workflow Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#DED7C9]">
              {RAILWAY_WORKFLOW_STATES.map((st) => (
                <div key={st.state} className="p-7 sm:p-8 bg-[#FFFFFF] flex flex-col justify-between hover:bg-[#F1EDE3] transition-colors">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DED7C9]">
                      <span className="font-editorial text-3xl text-[#17202B] font-normal">
                        {st.state}
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-[#68717B] uppercase">
                        STAGE
                      </span>
                    </div>

                    <h3 className="font-mono text-xs tracking-[0.16em] uppercase text-[#17202B] font-bold mb-2">
                      {st.name}
                    </h3>

                    <p className="font-sans text-xs text-[#394352] leading-relaxed mb-6">
                      {st.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DED7C9]">
                    <span className="font-mono text-[9px] text-[#68717B] uppercase tracking-wider block mb-1">
                      DELIVERABLE
                    </span>
                    <span className="font-sans text-xs text-[#17202B] font-medium">
                      {st.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Details Bar */}
            <div className="p-6 sm:p-8 bg-[#F1EDE3] border-t border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider mr-2 font-semibold">
                  CORE TECH:
                </span>
                {["Python", "Flask", "MySQL (Relational Core)", "Docker", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-[#17202B] px-3 py-1 bg-[#FFFFFF] border border-[#DED7C9]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to="/work/railway-concession-management"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#17202B] hover:text-[#C59A3D] font-semibold transition-colors"
              >
                <span>READ COMPLETE CASE SPECIFICATION</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
