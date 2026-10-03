import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";

const STEPS = [
  {
    num: "01",
    name: "Understand",
    desc: "Map the problem and operational reality.",
  },
  {
    num: "02",
    name: "Structure",
    desc: "Define the system and architecture.",
  },
  {
    num: "03",
    name: "Engineer",
    desc: "Build and test.",
  },
  {
    num: "04",
    name: "Deliver",
    desc: "Deploy and support.",
  },
];

export default function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="Engineering Process & Methodology | Nexarya"
        description="Our deterministic 4-stage engineering lifecycle: Understand, Structure, Engineer, and Deliver. Disciplined software delivery for startups and institutions."
      />

      {/* Editorial Header (No Architecture Image) */}
      <section className="pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-[#E8E3D8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-3">
                Our Process
              </span>
              <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.4rem] text-[#0F1725] leading-[1.04] tracking-[-0.03em] font-normal mb-4">
                Disciplined engineering. <br />
                <span className="italic">Predictable delivery.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed max-w-xl">
                A clear, structured process from understanding the problem to delivering the system.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4-Stage Editorial Progression (No Cards, No Icons, Pure Rules & Type) */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3D8] border-y border-[#E8E3D8]">
            {STEPS.map((step, idx) => (
              <RevealOnScroll key={step.num} delayMs={idx * 30}>
                <div className="py-8 sm:py-12 px-0 sm:px-6 lg:px-8 space-y-4">
                  <span className="font-sans text-xs font-semibold text-[#8A6B1E] tracking-wider uppercase block">
                    {step.num}
                  </span>

                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal">
                    {step.name}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Restrained Bottom CTA */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="pt-8 border-t border-[#E8E3D8] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal">
                  Have a similar challenge?
                </h3>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#8A6B1E] hover:text-[#0F1725] transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
