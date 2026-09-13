import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { INITIAL_ARTICLES } from "@/lib/constants/initialData";

const CATEGORIES = [
  { id: "all", label: "All Insights", query: "" },
  { id: "engineering", label: "Engineering", query: "engineering" },
  { id: "business-systems", label: "Business Systems", query: "business-systems" },
  { id: "ai-automation", label: "AI & Automation", query: "ai-automation" },
  { id: "web-product", label: "Web & Product", query: "web-product" },
];

export default function InsightsListPage() {
  const [articles, setArticles] = useState<any[]>(INITIAL_ARTICLES);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = (searchParams.get("category") || "").toLowerCase();

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getArticles()
      .then((data) => {
        if (data?.articles?.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch(() => {
        // API offline or static operation — smoothly preserve bundled static articles
      });
  }, []);

  const handleCategorySelect = (query: string) => {
    if (query) {
      setSearchParams({ category: query });
    } else {
      setSearchParams({});
    }
  };

  // Filter articles based on category tag or title/category match
  const filteredArticles = articles.filter((art) => {
    if (!currentCategory || currentCategory === "all") return true;
    const cat = (art.category || "").toLowerCase();
    const tags = (art.tags || []).map((t: string) => t.toLowerCase());

    if (currentCategory === "engineering" || currentCategory === "architecture") {
      return cat.includes("arch") || cat.includes("eng") || tags.includes("architecture") || tags.includes("engineering");
    }
    if (currentCategory === "ai-automation" || currentCategory === "ai") {
      return cat.includes("ai") || cat.includes("auto") || tags.includes("ai") || tags.includes("automation");
    }
    if (currentCategory === "business-systems" || currentCategory === "business") {
      return cat.includes("business") || cat.includes("system") || tags.includes("backend");
    }
    if (currentCategory === "web-product" || currentCategory === "web") {
      return cat.includes("web") || cat.includes("product") || tags.includes("frontend");
    }
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="Technical Insights & Architecture Perspectives | NEXARYA"
        description="Perspectives on system architecture, database performance, pragmatic automation, and the engineering principles behind reliable software."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Page Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                TECHNICAL JOURNAL
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#17202B] leading-[1.06] tracking-[-0.025em] mb-6">
              Architectural perspectives & <br />
              <span className="italic font-normal">engineering notes.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
              In-depth analysis on system architecture, database performance, pragmatic automation, and the lessons learned from deploying production software.
            </p>
          </div>
        </RevealOnScroll>

        {/* Lightweight Category Filter Bar */}
        <div className="mb-10 pb-4 border-b border-[#DED7C9] flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = (!currentCategory && cat.query === "") || currentCategory === cat.query;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.query)}
                className={`px-4 py-2 text-xs font-mono tracking-[0.1em] uppercase transition-colors cursor-pointer border ${
                  isSelected
                    ? "bg-[#0F1725] text-[#F7F5EF] border-[#0F1725] font-semibold"
                    : "bg-[#FFFFFF] text-[#394352] border-[#DED7C9] hover:text-[#17202B] hover:border-[#17202B]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredArticles.map((art, idx) => (
              <RevealOnScroll key={art.slug} delayMs={idx * 100}>
                <div className="group relative flex flex-col justify-between p-8 sm:p-10 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.06)] hover:border-[#17202B] transition-all duration-300 h-full">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#DED7C9]">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-[#17202B] uppercase px-2.5 py-0.5 border border-[#DED7C9] bg-[#F1EDE3] font-semibold">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-3 font-mono text-[10px] text-[#68717B]">
                        <span>5 MIN READ</span>
                        <span>•</span>
                        <span>
                          {new Date(art.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B] group-hover:text-[#C59A3D] transition-colors duration-300 leading-snug mb-4">
                      {art.title}
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-[#394352] leading-relaxed font-light mb-8">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#DED7C9] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#394352]">
                      By {art.author}
                    </span>

                    <Link
                      to={`/insights/${art.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.14em] uppercase text-[#17202B] hover:text-[#C59A3D] font-semibold transition-colors duration-200"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={13} className="text-[#17202B] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="p-12 bg-[#FFFFFF] border border-[#DED7C9] text-center space-y-4">
            <h3 className="font-editorial text-2xl text-[#17202B]">
              Perspectives in preparation.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#394352] max-w-md mx-auto">
              Additional essays in this category are being authored by our engineering team.
            </p>
            <button
              type="button"
              onClick={() => handleCategorySelect("")}
              className="px-5 py-2.5 bg-[#0F1725] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
