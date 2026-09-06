import React from "react";
import { useParams, Link } from "react-router-dom";
import StemfusionCaseStudy from "@/pages/work/StemfusionCaseStudy";
import RailwayCaseStudy from "@/pages/work/RailwayCaseStudy";
import SEOHead from "@/components/seo/SEOHead";

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const path = typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "";
  const s = (slug || "").toLowerCase();

  // Normalize slug routing to dedicated case studies
  if (
    s === "stemfusion" ||
    s === "stemfusion-learning-platform" ||
    path.includes("/work/stemfusion")
  ) {
    return <StemfusionCaseStudy />;
  }

  if (
    s === "railway" ||
    s === "railway-concession" ||
    s === "railway-concession-management" ||
    s === "railway-concession-management-system" ||
    path.includes("/work/railway")
  ) {
    return <RailwayCaseStudy />;
  }

  return (
    <div className="min-h-screen pt-40 pb-28 bg-[#F4EFE6] flex flex-col items-center justify-center text-center px-6 select-none">
      <SEOHead
        title="Case File Not Found | NEXARYA"
        description="The requested engineering case file is not available."
      />
      <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold mb-3">
        404 // CASE FILE NOT FOUND
      </span>
      <h1 className="font-editorial text-4xl sm:text-5xl text-[#0E1720] mb-4">
        Specification Not Found
      </h1>
      <p className="font-sans text-[#5C6975] max-w-md mb-8 font-light">
        The requested engineering documentation or case file could not be located.
      </p>
      <Link
        to="/work"
        className="px-6 py-3.5 bg-[#0E1720] text-[#FFFFFF] hover:bg-[#1A2530] font-tech text-xs uppercase tracking-wider font-semibold transition-colors"
      >
        ← Back to All Case Files
      </Link>
    </div>
  );
}
