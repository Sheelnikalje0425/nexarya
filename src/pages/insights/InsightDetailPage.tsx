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
        // API offline or static operation — preserve bundled static article
      });
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen pt-36 pb-20 bg-[#F8F5EE] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-editorial text-4xl text-[#141B26] mb-4">Article Not Found</h1>
        <p className="font-sans text-[#4A5363] mb-8">The requested technical publication could not be located.</p>
        <Link to="/insights" className="font-sans text-xs text-[#141B26] uppercase font-semibold underline">
          &larr; Back to all insights
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title={article.seo_title || `${article.title} — Insights | Nexarya`}
        description={article.seo_description || article.excerpt}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#4A5363] hover:text-[#141B26] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>All insights</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 bg-[#FFFFFF] border border-[#E3DDCF] p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E3DDCF]">
            <span className="font-sans text-xs text-[#765406] uppercase font-semibold">
              {article.category}
            </span>
            <span className="text-[#D8D2C2]">&middot;</span>
            <span className="font-sans text-xs text-[#4A5363]">
              {article.author} &middot; {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="font-editorial text-balance text-3xl sm:text-5xl lg:text-6xl text-[#141B26] leading-[1.08] mb-6 font-normal">
            {article.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs font-sans text-base sm:text-lg text-[#141B26] font-light leading-relaxed space-y-6 mb-10 whitespace-pre-line">
          {article.content}
        </div>

        {/* Tags & Footer Link */}
        <div className="p-6 bg-[#FFFFFF] border border-[#E3DDCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag: string) => (
              <span key={tag} className="font-mono text-xs text-[#4A5363] px-2.5 py-1 bg-[#F8F5EE] border border-[#E3DDCF]">
                #{tag}
              </span>
            ))}
          </div>

          <Link
            to="/insights"
            className="font-sans text-xs text-[#141B26] hover:text-[#765406] uppercase tracking-wider font-semibold underline underline-offset-4"
          >
            Explore more insights &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
