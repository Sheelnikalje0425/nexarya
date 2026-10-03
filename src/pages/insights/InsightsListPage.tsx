import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { INITIAL_ARTICLES } from "@/lib/constants/initialData";

export default function InsightsListPage() {
  const [articles, setArticles] = useState<any[]>(INITIAL_ARTICLES);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getArticles()
      .then((data) => {
        if (data?.articles?.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="Insights — Technical Journal & Architecture Perspectives | Nexarya"
        description="Perspectives on system architecture, database performance, pragmatic automation, and the engineering principles behind reliable software."
      />

      {/* Editorial Header */}
      <section className="pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-[#E8E3D8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-3">
                Our Insights
              </span>
              <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.4rem] text-[#0F1725] leading-[1.04] tracking-[-0.03em] font-normal mb-4">
                Ideas worth building on.
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed max-w-xl">
                Technical perspectives on real systems, operations, and engineering.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Editorial Article List (No Cards, Clean Rules) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="divide-y divide-[#E8E3D8] border-y border-[#E8E3D8]">
            {articles.map((art, idx) => (
              <RevealOnScroll key={art.slug} delayMs={idx * 30}>
                <Link
                  to={`/insights/${art.slug}`}
                  className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4 transition-colors hover:text-[#8A6B1E]"
                >
                  <div className="max-w-3xl space-y-2">
                    <div className="flex items-center gap-2 text-xs font-sans text-[#8A6B1E] uppercase tracking-wider font-semibold">
                      <span>{art.category}</span>
                      <span>&middot;</span>
                      <span className="text-[#4A5363] font-normal lowercase tracking-normal">5 min read</span>
                    </div>

                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] group-hover:text-[#8A6B1E] transition-colors leading-snug font-normal">
                      {art.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] group-hover:text-[#8A6B1E]">
                    <span>Read</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
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
                  Have a topic in mind?
                </h3>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#8A6B1E] hover:text-[#0F1725] transition-colors"
                >
                  <span>Discuss an idea</span>
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
