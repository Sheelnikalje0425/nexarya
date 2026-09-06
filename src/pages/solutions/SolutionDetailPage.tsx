import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowLeft } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { INITIAL_SERVICES } from "@/lib/constants/initialData";

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const initial = INITIAL_SERVICES.find((s) => s.slug === slug) || null;
  const [service, setService] = useState<any>(initial);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;
    api.getServiceBySlug(slug)
      .then((data) => {
        if (data?.service) {
          setService(data.service);
        }
      })
      .catch((err) => {
        console.error("Failed to load service detail:", err);
      });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-36 pb-20 bg-[#F4EFE6] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-editorial text-4xl text-[#0E1720] mb-4">Solution Not Found</h1>
        <p className="font-sans text-[#5C6975] mb-8">The requested capability documentation does not exist.</p>
        <Link to="/solutions" className="font-tech text-xs text-[#0E1720] tracking-[0.14em] uppercase font-bold underline">
          ← Back to All Solutions
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title={`${service.title} | Engineering Solutions | NEXARYA`}
        description={service.short_desc}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.16em] uppercase text-[#5C6975] hover:text-[#0E1720] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            <span>All Solutions</span>
          </Link>
        </div>

        {/* Hero Area */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-[#DCD6CA]">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  SOLUTION SPECIFICATION // {service.number}
                </span>
              </div>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6">
                {service.title}
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#5C6975] font-light leading-relaxed mb-8">
                {service.full_desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="md">
                  Scope This Solution
                </Button>
                <Button href="/work" variant="secondary" size="md">
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-8 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] flex flex-col justify-between">
              <div>
                <div className="font-tech text-[10px] tracking-[0.2em] text-[#0E1720] uppercase mb-4 font-bold pb-2 border-b border-[#EAE5DB]">
                  CORE CAPABILITIES
                </div>
                <ul className="space-y-3">
                  {service.capabilities?.map((cap: string) => (
                    <li key={cap} className="flex items-start gap-2.5 text-xs font-sans text-[#5C6975] leading-relaxed">
                      <span className="text-[#0E1720] mt-1 shrink-0 font-bold">▪</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE5DB]">
                <div className="font-tech text-[10px] tracking-[0.2em] text-[#8E9CA8] uppercase mb-3 font-semibold">
                  PRIMARY STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.tech_stack?.map((tech: string) => (
                    <span key={tech} className="font-tech text-[10px] text-[#0E1720] px-2.5 py-1 bg-[#FAF8F5] border border-[#DCD6CA]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4-Step Engineering Workflow */}
        <RevealOnScroll>
          <div className="py-20 border-b border-[#DCD6CA]">
            <div className="mb-12">
              <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                ENGINEERING WORKFLOW
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mt-2">
                From architecture to deployment.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.workflow?.map((step: any) => (
                <div key={step.step} className="p-6 bg-[#FFFFFF] border border-[#DCD6CA]">
                  <div className="font-editorial text-2xl text-[#0E1720] mb-4 pb-2 border-b border-[#EAE5DB]">{step.step}</div>
                  <h3 className="font-tech text-xs text-[#0E1720] tracking-[0.12em] uppercase font-bold mb-2">{step.title}</h3>
                  <p className="font-sans text-xs text-[#5C6975] leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Security, Performance & Scalability Guarantees */}
        <RevealOnScroll>
          <div className="py-20 border-b border-[#DCD6CA] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FFFFFF] border border-[#DCD6CA]">
              <div className="font-tech text-xs text-[#0E1720] uppercase font-bold mb-3 pb-2 border-b border-[#EAE5DB]">
                01 // SECURITY & COMPLIANCE
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light">
                Encrypted data at rest and in transit, strict RBAC authorization boundaries, and vulnerability scanning baked directly into the CI pipeline.
              </p>
            </div>
            <div className="p-8 bg-[#FFFFFF] border border-[#DCD6CA]">
              <div className="font-tech text-xs text-[#0E1720] uppercase font-bold mb-3 pb-2 border-b border-[#EAE5DB]">
                02 // PERFORMANCE HARDENING
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light">
                Sub-millisecond query optimization, edge CDN caching, and asynchronous job queuing to guarantee high throughput under peak traffic.
              </p>
            </div>
            <div className="p-8 bg-[#FFFFFF] border border-[#DCD6CA]">
              <div className="font-tech text-xs text-[#0E1720] uppercase font-bold mb-3 pb-2 border-b border-[#EAE5DB]">
                03 // CODE OWNERSHIP & HANDOVER
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light">
                Full IP assignment, comprehensive architectural documentation, and automated deployment scripts enabling seamless team handoff.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* FAQs */}
        {service.faq && service.faq.length > 0 && (
          <RevealOnScroll>
            <div className="py-20 border-b border-[#DCD6CA]">
              <div className="mb-12">
                <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mt-2">
                  Technical considerations.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.faq.map((item: any, idx: number) => (
                  <div key={idx} className="p-6 bg-[#FFFFFF] border border-[#DCD6CA]">
                    <h3 className="font-sans text-sm sm:text-base font-bold text-[#0E1720] mb-3">
                      {item.q}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#5C6975] leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Final CTA */}
        <RevealOnScroll>
          <div className="pt-20 text-center max-w-2xl mx-auto">
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mb-4">
              Ready to engineer your solution?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#5C6975] mb-8 font-light">
              Share your project requirements and our engineering team will provide an architectural overview and milestone breakdown.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Project with Us
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
