import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@/components/ui/Icons";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { api } from "@/lib/api";
import { INITIAL_ARTICLES } from "@/lib/constants/initialData";

export default function HomeInsights() {
  const [articles, setArticles] = useState(INITIAL_ARTICLES.slice(0, 3));

  useEffect(() => {
    let isMounted = true;
    api.getArticles()
      .then((data) => {
        if (isMounted && data?.articles?.length > 0) {
          setArticles(data.articles.slice(0, 3));
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="insights"
      aria-labelledby="home-insights-heading"
      className="py-16 sm:py-20 bg-[#F8F5EE] border-b border-[#E8E3D8] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#E8E3D8] mb-8 sm:mb-10">
            <div>
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-2">
                Technical Journal
              </span>
              <h2
                id="home-insights-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-[3.2rem] text-[#0F1725] leading-tight font-normal"
              >
                Ideas worth building on.
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E] transition-colors"
            >
              <span>View all insights</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </RevealOnScroll>

        {/* 3 Article Titles in Clean List (No Large Cards) */}
        <div className="divide-y divide-[#E8E3D8] border-b border-[#E8E3D8]">
          {articles.map((art, idx) => (
            <RevealOnScroll key={art.slug} delayMs={idx * 40}>
              <Link
                to={`/insights/${art.slug}`}
                className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 transition-colors hover:text-[#8A6B1E]"
              >
                <div className="space-y-1 max-w-3xl">
                  <span className="font-sans text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block">
                    {art.category}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#0F1725] group-hover:text-[#8A6B1E] transition-colors font-normal">
                    {art.title}
                  </h3>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] group-hover:text-[#8A6B1E]">
                  <span>Read</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
