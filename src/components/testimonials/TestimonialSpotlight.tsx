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
  projectSlug = "railway-concession-management",
}: TestimonialSpotlightProps) {
  return (
    <section
      id="feedback"
      data-section="testimonials"
      className="py-18 sm:py-22 lg:py-26 bg-[#F8F5EE] border-b border-[#DED7C9] text-[#17202B] select-none"
      aria-label="Client Feedback and Proof"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ========================================================================= */}
        {/* MOBILE VIEW: Focused Editorial Testimonial (lg:hidden)                    */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
              07 // CLIENT PROOF
            </span>
          </div>

          <blockquote className="font-editorial text-2xl sm:text-3xl text-[#17202B] leading-[1.3] font-normal">
            &ldquo;{quote}&rdquo;
          </blockquote>

          <cite className="not-italic block pt-4 border-t border-[#DED7C9]">
            <div className="font-mono text-sm uppercase tracking-wider text-[#17202B] font-bold">
              {clientName}
            </div>
            <div className="font-sans text-xs text-[#394352] font-light mt-0.5">
              {designation}
            </div>
            <div className="font-sans text-xs text-[#17202B] font-medium mt-0.5">
              {company}
            </div>

            {projectSlug && (
              <div className="pt-3 mt-3 border-t border-[#DED7C9]/60">
                <Link
                  to={`/work/${projectSlug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#17202B] hover:text-[#C59A3D] font-semibold underline underline-offset-4 transition-colors"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight size={11} className="text-[#C59A3D]" />
                </Link>
              </div>
            )}
          </cite>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Split Editorial & Quote Layout (hidden lg:grid)             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Section Tag & Editorial Context */}
          <div className="lg:col-span-4">
            <RevealOnScroll>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3D]" />
                <span className="font-mono text-xs tracking-[0.2em] text-[#C59A3D] uppercase font-semibold">
                  07 // PROOF
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#17202B] leading-[1.05] tracking-[-0.03em] mb-4 font-normal">
                Built with clients, <br />
                <span className="italic font-normal">not just for them.</span>
              </h2>

              <p className="font-sans text-base text-[#394352] font-light leading-relaxed mb-6">
                Direct partnership throughout architecture, engineering, and delivery ensures software fits the operational reality.
              </p>

              {/* Verified Engagement Reference */}
              <div className="pt-4 border-t border-[#DED7C9] text-xs font-mono">
                <span className="text-[#68717B] uppercase block text-[10px] mb-1">VERIFIED ENGAGEMENT:</span>
                <div className="text-[#17202B] font-semibold">{project}</div>
                <div className="text-[#68717B] text-[11px]">{company}</div>
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT COLUMN: Strong Editorial Pull Quote */}
          <div className="lg:col-span-8 lg:border-l lg:border-[#DED7C9] lg:pl-10 xl:pl-14">
            <RevealOnScroll delayMs={100}>
              
              {/* Large Editorial Quote */}
              <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#17202B] leading-[1.28] tracking-[-0.02em] mb-7 font-normal">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Client Attribution */}
              <cite className="not-italic block pt-5 border-t border-[#DED7C9]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <div className="font-mono text-sm uppercase tracking-wider text-[#17202B] font-bold">
                      {clientName}
                    </div>
                    <div className="font-sans text-xs text-[#394352] font-light mt-0.5">
                      {designation}, <span className="text-[#17202B] font-medium">{company}</span>
                    </div>
                  </div>

                  {projectSlug && (
                    <Link
                      to={`/work/${projectSlug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#17202B] hover:text-[#C59A3D] font-semibold underline underline-offset-4 transition-colors shrink-0"
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight size={11} className="text-[#C59A3D]" />
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
