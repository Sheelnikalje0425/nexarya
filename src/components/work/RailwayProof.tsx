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
    <section className="py-24 sm:py-36 bg-[#FAF8F5] border-b border-[#DCD6CA] select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header: Editorial Scale */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.22em] text-[#5C6975] uppercase font-medium">
                  CASE 02 // INSTITUTIONAL PROJECT RECORD
                </span>
              </div>
              <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem] text-[#0E1720] leading-[1.02] tracking-[-0.03em]">
                Software for <br className="hidden sm:inline" />
                <span className="italic font-normal">accountability.</span>
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] max-w-md font-light leading-relaxed">
              An enterprise operations platform engineered to digitize student verification workflows, institutional authorization, and concession record tracking.
            </p>
          </div>
        </RevealOnScroll>

        {/* Editorial Case-File Container */}
        <RevealOnScroll delayMs={60}>
          <div className="bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_16px_50px_rgba(14,23,32,0.07)] overflow-hidden">
            
            {/* Header Docket Bar */}
            <div className="px-6 py-4 bg-[#EAE5DB] border-b border-[#DCD6CA] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-tech text-xs text-[#0E1720] font-bold uppercase tracking-wider">
                  CASE FILE: RAILWAY CONCESSION MANAGEMENT
                </span>
                <span className="text-[#8E9CA8]">/</span>
                <span className="font-tech text-xs text-[#5C6975]">
                  Western Transit & Education Consortium
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-tech text-[10px] text-[#0E1720] uppercase px-2.5 py-1 bg-[#FFFFFF] border border-[#DCD6CA] font-semibold">
                  INSTITUTIONAL PROJECT RECORD
                </span>
              </div>
            </div>

            {/* 5-Stage Verified Workflow Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#DCD6CA]">
              {RAILWAY_WORKFLOW_STATES.map((st) => (
                <div key={st.state} className="p-7 sm:p-8 bg-[#FFFFFF] flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#EAE5DB]">
                      <span className="font-editorial text-3xl text-[#0E1720] font-normal">
                        {st.state}
                      </span>
                      <span className="font-tech text-[9px] tracking-widest text-[#8E9CA8] uppercase">
                        STAGE
                      </span>
                    </div>

                    <h3 className="font-tech text-xs tracking-[0.16em] uppercase text-[#0E1720] font-bold mb-2">
                      {st.name}
                    </h3>

                    <p className="font-sans text-xs text-[#5C6975] leading-relaxed mb-6">
                      {st.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAE5DB]">
                    <span className="font-tech text-[9px] text-[#8E9CA8] uppercase tracking-wider block mb-1">
                      DELIVERABLE
                    </span>
                    <span className="font-sans text-xs text-[#0E1720] font-medium">
                      {st.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Details Bar */}
            <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-tech text-[10px] text-[#8E9CA8] uppercase tracking-wider mr-2 font-semibold">
                  CORE TECH:
                </span>
                {["Python", "Flask", "MySQL (Relational Core)", "Docker", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="font-tech text-[11px] text-[#0E1720] px-3 py-1 bg-[#FFFFFF] border border-[#DCD6CA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to="/work/railway-concession-management"
                className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.14em] uppercase text-[#0E1720] hover:text-[#B58B1E] font-semibold transition-colors"
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
