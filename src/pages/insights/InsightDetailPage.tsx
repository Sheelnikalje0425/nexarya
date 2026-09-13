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
      .catch(() => {
        // API offline or static operation — smoothly preserve bundled static article
      });
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen pt-36 pb-20 bg-[#F8F5EE] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-editorial text-4xl text-[#17202B] mb-4">Article Not Found</h1>
        <p className="font-sans text-[#394352] mb-8">The requested technical publication could not be located.</p>
        <Link to="/insights" className="font-mono text-xs text-[#17202B] tracking-[0.14em] uppercase font-bold underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title={article.seo_title || `${article.title} | NEXARYA Insights`}
        description={article.seo_description || article.excerpt}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-[#394352] hover:text-[#17202B] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            <span>All Insights</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 bg-[#FFFFFF] border border-[#DED7C9] p-8 sm:p-12 shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#DED7C9]">
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#17202B] uppercase px-2.5 py-0.5 border border-[#DED7C9] bg-[#F1EDE3] font-semibold">
              {article.category}
            </span>
            <span className="font-mono text-xs text-[#68717B]">
              {article.author} • {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#17202B] leading-[1.08] mb-6">
            {article.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#394352] font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.06)] font-sans text-sm sm:text-base text-[#17202B] font-light leading-relaxed space-y-6 mb-12 whitespace-pre-line">
          {article.content}
        </div>

        {/* Tags & Share */}
        <div className="p-6 bg-[#F1EDE3] border border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag: string) => (
              <span key={tag} className="font-mono text-[10px] text-[#394352] px-2.5 py-1 bg-[#FFFFFF] border border-[#DED7C9]">
                #{tag}
              </span>
            ))}
          </div>

          <Link
            to="/insights"
            className="font-mono text-xs text-[#17202B] hover:text-[#C59A3D] tracking-[0.14em] uppercase font-semibold underline underline-offset-4"
          >
            Explore More Publications →
          </Link>
        </div>
      </div>
    </div>
  );
}
