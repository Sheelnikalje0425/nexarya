import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import { ArrowLeft } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { INITIAL_ARTICLES } from "@/lib/constants/initialData";

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const initial = INITIAL_ARTICLES.find((a) => a.slug === slug) || null;
  const [article, setArticle] = useState<any>(initial);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;
    api.getArticleBySlug(slug)
      .then((data) => {
        if (data?.article) {
          setArticle(data.article);
        }
      })
      .catch((err) => {
        console.error("Failed to load article detail:", err);
      });
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen pt-36 pb-20 bg-[#F4EFE6] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-editorial text-4xl text-[#0E1720] mb-4">Article Not Found</h1>
        <p className="font-sans text-[#5C6975] mb-8">The requested technical publication could not be located.</p>
        <Link to="/insights" className="font-tech text-xs text-[#0E1720] tracking-[0.14em] uppercase font-bold underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title={article.seo_title || `${article.title} | NEXARYA Insights`}
        description={article.seo_description || article.excerpt}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.16em] uppercase text-[#5C6975] hover:text-[#0E1720] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            <span>All Insights</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 bg-[#FFFFFF] border border-[#DCD6CA] p-8 sm:p-12 shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#EAE5DB]">
            <span className="font-tech text-[10px] tracking-[0.16em] text-[#0E1720] uppercase px-2.5 py-0.5 border border-[#DCD6CA] bg-[#FAF8F5] font-semibold">
              {article.category}
            </span>
            <span className="font-tech text-xs text-[#8E9CA8]">
              {article.author} • {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#0E1720] leading-[1.08] mb-6">
            {article.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] font-sans text-sm sm:text-base text-[#0E1720] font-light leading-relaxed space-y-6 mb-12 whitespace-pre-line">
          {article.content}
        </div>

        {/* Tags & Share */}
        <div className="p-6 bg-[#FAF8F5] border border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag: string) => (
              <span key={tag} className="font-tech text-[10px] text-[#5C6975] px-2.5 py-1 bg-[#FFFFFF] border border-[#DCD6CA]">
                #{tag}
              </span>
            ))}
          </div>

          <Link
            to="/insights"
            className="font-tech text-xs text-[#0E1720] hover:text-[#B58B1E] tracking-[0.14em] uppercase font-semibold underline underline-offset-4"
          >
            Explore More Publications →
          </Link>
        </div>
      </div>
    </div>
  );
}
