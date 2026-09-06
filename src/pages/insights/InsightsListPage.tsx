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
      .catch((err) => {
        console.error("Failed to load insights articles:", err);
      });
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Technical Insights & Architecture Perspectives | NEXARYA"
        description="Perspectives on system architecture, database performance, pragmatic automation, and the engineering principles behind reliable software."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Page Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                TECHNICAL JOURNAL
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6">
              Architectural perspectives & <br />
              <span className="italic font-normal">engineering notes.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
              In-depth analysis on system architecture, database performance, pragmatic automation, and the lessons learned from deploying mission-critical software.
            </p>
          </div>
        </RevealOnScroll>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {articles.map((art, idx) => (
            <RevealOnScroll key={art.slug} delayMs={idx * 100}>
              <div className="group relative flex flex-col justify-between p-8 sm:p-10 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] hover:border-[#0E1720] transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#EAE5DB]">
                    <span className="font-tech text-[10px] tracking-[0.16em] text-[#0E1720] uppercase px-2.5 py-0.5 border border-[#DCD6CA] bg-[#FAF8F5] font-semibold">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-3 font-tech text-[10px] text-[#8E9CA8]">
                      <span>5 MIN READ</span>
                      <span>•</span>
                      <span>
                        {new Date(art.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] group-hover:text-[#B58B1E] transition-colors duration-300 leading-snug mb-4">
                    {art.title}
                  </h2>

                  <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light mb-8">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EAE5DB] flex items-center justify-between">
                  <span className="font-tech text-xs text-[#5C6975]">
                    By {art.author}
                  </span>

                  <Link
                    to={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1.5 font-tech text-xs tracking-[0.14em] uppercase text-[#0E1720] hover:text-[#B58B1E] font-semibold transition-colors duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} className="text-[#0E1720] transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
