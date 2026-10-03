import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const SOLUTIONS = [
  {
    num: "01",
    title: "Custom Software",
    desc: "Business software built around your workflow.",
    href: "/solutions/custom-software",
  },
  {
    num: "02",
    title: "AI & Automation",
    desc: "Automation for repetitive operational work.",
    href: "/solutions/ai-automation",
  },
  {
    num: "03",
    title: "Business Systems",
    desc: "Connected systems for complex operations.",
    href: "/solutions/business-systems",
  },
  {
    num: "04",
    title: "Digital Products",
    desc: "Web and digital products built for real users.",
    href: "/solutions/digital-products",
  },
];

export default function SolutionsListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="Solutions — Custom Software & Business Systems | Nexarya"
        description="We design and build custom software, internal systems, and digital platforms around the way your business actually operates."
      />

      {/* Editorial Header */}
      <section className="pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-[#E8E3D8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-3">
                Our Solutions
              </span>
              <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.4rem] text-[#0F1725] leading-[1.04] tracking-[-0.03em] font-normal mb-4">
                Software built around <br />
                <span className="italic">real operations.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed max-w-xl">
                We design and build practical software systems for complex, real-world environments.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Clean Editorial List (Horizontal Rules and Whitespace, NO Images, NO Cards) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="divide-y divide-[#E8E3D8] border-y border-[#E8E3D8]">
            {SOLUTIONS.map((sol, idx) => (
              <RevealOnScroll key={sol.num} delayMs={idx * 30}>
                <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="md:col-span-1">
                    <span className="font-sans text-xs font-semibold text-[#8A6B1E]">
                      {sol.num}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] font-normal">
                      {sol.title}
                    </h2>
                  </div>

                  <div className="md:col-span-5">
                    <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="md:col-span-2 md:text-right">
                    <Link
                      to={sol.href}
                      className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
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
                  Discuss your requirements.
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
