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
      className="py-24 sm:py-36 bg-[#F9F8F6] border-b border-[#0E1720]/15 text-[#0E1720] relative select-none overflow-hidden"
      aria-label="Client Feedback and Testimonials"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Section Header, Editorial Context, Proof Badge  */}
          {/* ============================================================ */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                <span className="font-mono text-xs tracking-[0.22em] text-[#8C6D1F] uppercase font-semibold">
                  06 // CLIENT FEEDBACK
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6 font-normal">
                Built with clients, <br className="hidden sm:inline" />
                <span className="italic font-normal">not just for them.</span>
              </h2>

              {/* Factual Contextual Copy */}
              <p className="font-sans text-base sm:text-lg text-[#3A4753] font-light leading-relaxed mb-8">
                We work directly with stakeholders throughout architecture, design, and production delivery to ensure software aligns with operational reality.
              </p>

              {/* Archival Verification Card */}
              <div className="p-5 bg-[#FAF8F5] border border-[#0E1720]/15 space-y-2.5">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#8C6D1F] tracking-[0.16em] uppercase font-semibold border-b border-[#0E1720]/10 pb-2">
                  <span>AUTHENTIC CLIENT RECORD</span>
                  <span>VERIFIED</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-[#5C6975]">
                  <span>DELIVERY SCOPE:</span>
                  <span className="text-[#0E1720] font-medium">Enterprise Workflow</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-[#5C6975]">
                  <span>RECORD STATUS:</span>
                  <span className="text-emerald-700 font-medium">● Published with Consent</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Editorial Testimonial Blockquote & Attribution */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#0E1720]/15 lg:pl-12 xl:pl-16">
            <RevealOnScroll delayMs={100}>
              
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#0E1720]/10">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8C6D1F] uppercase font-semibold">
                  PRODUCTION FEEDBACK // CASE FILE 01
                </span>
                <span className="font-mono text-[10px] text-[#5C6975] uppercase tracking-widest">
                  WESTERN TRANSIT
                </span>
              </div>

              {/* Large Editorial Quote */}
              <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#0E1720] leading-[1.32] tracking-[-0.015em] mb-8 font-normal">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Client Attribution */}
              <cite className="not-italic block pt-6 border-t border-[#0E1720]/15">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <div className="font-mono text-sm sm:text-base uppercase tracking-[0.16em] text-[#0E1720] font-bold">
                      {clientName}
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-[#5C6975] font-light mt-0.5">
                      {designation}
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-[#0E1720] font-medium mt-0.5">
                      {company}
                    </div>
                  </div>

                  {/* Project Context & Case File Link */}
                  {project && (
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C6D1F] font-semibold mb-1">
                        PROJECT CONTEXT
                      </div>
                      <div className="font-sans text-xs text-[#5C6975] mb-2 font-light">
                        {project}
                      </div>
                      <Link
                        to={`/work/${projectSlug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#0E1720] hover:text-[#8C6D1F] uppercase tracking-wider font-semibold transition-colors duration-200 group"
                      >
                        <span>VIEW THE CASE FILE</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
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
