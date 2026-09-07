import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface TestimonialSpotlightProps {
  quote?: string;
  clientName?: string;
  designation?: string;
  company?: string;
  project?: string;
  projectSlug?: string;
}

export default function TestimonialSpotlight({
  quote = "Nexarya took our fragmented, manual concession approval processes and engineered a reliable, role-governed platform. Their architectural discipline and milestone delivery made a complex institutional rollout predictable and verifiable.",
  clientName = "RAJESH SHARMA",
  designation = "Head of Digital Infrastructure",
  company = "Western Transit & Education Consortium",
  project = "Railway Concession Management System",
  projectSlug = "railway-concession-management-system",
}: TestimonialSpotlightProps) {
  return (
    <section
      id="feedback"
      data-section="testimonials"
      className="py-18 sm:py-22 lg:py-26 bg-[#FAF8F5] border-b border-[#DCD6CA] text-[#0E1720] select-none"
      aria-label="Client Feedback and Proof"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Section Tag, Editorial Header, Proof Structure */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold">
                  PROOF & FEEDBACK
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0E1720] leading-[1.05] tracking-[-0.03em] mb-4.5 font-normal">
                Built with clients, <br className="hidden sm:inline" />
                <span className="italic font-normal">not just for them.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="font-sans text-base text-[#3A4753] font-light leading-relaxed mb-5.5">
                We partner directly with operational stakeholders throughout architecture, engineering, and delivery to ensure software aligns with the work.
              </p>

              {/* Verified Engagement Reference Flow */}
              <div className="p-4 sm:p-5 bg-[#FFFFFF] border border-[#DCD6CA] space-y-2.5 font-mono text-xs shadow-[0_4px_20px_rgba(14,23,32,0.02)]">
                <div className="text-[10px] text-[#8C6D1F] uppercase tracking-wider font-semibold pb-2 border-b border-[#EAE5DB]">
                  ENGAGEMENT CONTEXT
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#8E9CA8] uppercase text-[11px]">PROJECT:</span>
                  <span className="text-[#0E1720] font-medium text-right text-[11px]">{project}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#8E9CA8] uppercase text-[11px]">ORGANIZATION:</span>
                  <span className="text-[#0E1720] font-medium text-right text-[11px]">{company}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#8E9CA8] uppercase text-[11px]">STAKEHOLDER:</span>
                  <span className="text-[#0E1720] font-medium text-right text-[11px]">{clientName} ({designation})</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT COLUMN: Testimonial Quote & Case File Anchor */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#DCD6CA] lg:pl-10 xl:pl-14">
            <RevealOnScroll delayMs={100}>
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4.5 border-b border-[#EAE5DB]">
                <span className="font-mono text-xs tracking-widest text-[#8C6D1F] uppercase font-semibold">
                  CLIENT PERSPECTIVE
                </span>
                <span className="font-mono text-[10px] text-[#8E9CA8] uppercase">
                  VERIFIED ENGAGEMENT
                </span>
              </div>

              {/* Large Editorial Quote */}
              <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#0E1720] leading-[1.28] tracking-[-0.02em] mb-6 font-normal">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Client Attribution */}
              <cite className="not-italic block pt-4.5 border-t border-[#DCD6CA]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <div className="font-mono text-sm uppercase tracking-wider text-[#0E1720] font-bold">
                      {clientName}
                    </div>
                    <div className="font-sans text-xs text-[#5C6975] font-light mt-0.5">
                      {designation}, <span className="text-[#0E1720] font-medium">{company}</span>
                    </div>
                  </div>

                  {projectSlug && (
                    <Link
                      to={`/work/${projectSlug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#0E1720] hover:text-[#8C6D1F] font-semibold underline underline-offset-4 transition-colors shrink-0"
                    >
                      <span>EXPLORE CASE FILE</span>
                      <ArrowRight size={11} />
                    </Link>
                  )}
                </div>
              </cite>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
