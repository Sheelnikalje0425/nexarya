import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";

const PRINCIPLES = [
  {
    title: "Purpose",
    desc: "Solve real operational problems without premature abstractions or unnecessary complexity.",
  },
  {
    title: "Engineering",
    desc: "Build with integrity and clarity. Enforce strict typing, verified contracts, and automated testing.",
  },
  {
    title: "Long-term thinking",
    desc: "Create systems that continue to deliver value, adapt with business growth, and remain fully client-owned.",
  },
];

const PEOPLE = [
  { name: "Mahesh Nage", role: "Co-founder & Systems Strategy" },
  { name: "Sheel Nikalje", role: "Co-founder & Operational Delivery" },
  { name: "Bhupesh Mukane", role: "Co-founder & Architecture" },
  { name: "Pravin Epilli", role: "Co-founder & Design Systems" },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="About — Software Engineering Studio & Digital Products | Nexarya"
        description="Learn about Nexarya's engineering philosophy, mission, core principles, leadership, and verified client feedback headquartered in Mumbai, India."
      />

      {/* Editorial Header (No Generic Studio Image) */}
      <section className="pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-[#E8E3D8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-3">
                About Nexarya
              </span>
              <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.4rem] text-[#0F1725] leading-[1.04] tracking-[-0.03em] font-normal mb-4">
                We engineer digital products <br />
                <span className="italic">beyond the build.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed max-w-xl">
                NEXARYA is a software engineering studio building digital systems around real operational needs. Headquartered in Mumbai, India.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3 Principles (Simple Editorial Columns, NOT Cards) */}
      <section className="py-14 sm:py-20 border-b border-[#E8E3D8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E3D8]">
            {PRINCIPLES.map((p, idx) => (
              <RevealOnScroll key={p.title} delayMs={idx * 30}>
                <div className="py-8 md:py-0 px-0 md:px-8 lg:px-10 first:pl-0 last:pr-0 space-y-3">
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal">
                    {p.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The People (Simple List, NOT Boxed Cards) */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-2xl mb-10">
              <span className="font-sans text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-2">
                Leadership
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#0F1725] font-normal mb-2">
                The People
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                A small, focused team of engineers, builders, and problem-solvers.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3D8] border-y border-[#E8E3D8]">
            {PEOPLE.map((person, idx) => (
              <RevealOnScroll key={person.name} delayMs={idx * 30}>
                <div className="py-6 sm:py-8 px-0 sm:px-6 space-y-1">
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#0F1725] font-normal">
                    {person.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4A5363] font-light">
                    {person.role}
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
                  Work with us.
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
