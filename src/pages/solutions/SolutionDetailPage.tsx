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
      .catch(() => {
        // API offline or static operation — preserve bundled initial data
      });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-36 pb-20 bg-[#F8F5EE] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-editorial text-4xl text-[#141B26] mb-4">Solution Not Found</h1>
        <p className="font-sans text-[#4A5363] mb-8">The requested capability documentation does not exist.</p>
        <Link to="/solutions" className="font-sans text-xs text-[#141B26] uppercase font-semibold underline">
          &larr; Back to all solutions
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title={`${service.title} — Solutions | Nexarya`}
        description={service.short_desc}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#4A5363] hover:text-[#141B26] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>All solutions</span>
          </Link>
        </div>

        {/* Hero Area */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-[#E3DDCF]">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#765406]" />
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Solution {service.number}
                </span>
              </div>
              <h1 className="font-editorial text-balance text-4xl sm:text-6xl lg:text-7xl text-[#141B26] leading-[1.06] tracking-[-0.025em] mb-6">
                {service.title}
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#4A5363] font-light leading-relaxed mb-8">
                {service.full_desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="md">
                  Start a project &rarr;
                </Button>
                <Button href="/work" variant="dark" size="md">
                  View case studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs flex flex-col justify-between">
              <div>
                <div className="font-sans text-xs tracking-wider text-[#141B26] uppercase mb-4 font-semibold pb-2 border-b border-[#E3DDCF]">
                  Core Capabilities
                </div>
                <ul className="space-y-3">
                  {service.capabilities?.map((cap: string) => (
                    <li key={cap} className="flex items-start gap-2.5 text-xs font-sans text-[#4A5363] leading-relaxed">
                      <span className="text-[#765406] mt-0.5 shrink-0 font-bold">&bull;</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3DDCF]">
                <div className="font-sans text-xs tracking-wider text-[#765406] uppercase mb-3 font-semibold">
                  Primary Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.tech_stack?.map((tech: string) => (
                    <span key={tech} className="font-mono text-xs text-[#141B26] px-2.5 py-1 bg-[#F8F5EE] border border-[#E3DDCF]">
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
          <div className="py-20 border-b border-[#E3DDCF]">
            <div className="mb-12">
              <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                Engineering Workflow
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] mt-2 font-normal">
                From architecture to deployment.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.workflow?.map((step: any) => (
                <div key={step.step} className="p-6 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
                  <div className="font-editorial text-2xl text-[#141B26] mb-4 pb-2 border-b border-[#E3DDCF]">{step.step}</div>
                  <h3 className="font-sans text-sm font-semibold text-[#141B26] mb-2">{step.title}</h3>
                  <p className="font-sans text-xs text-[#4A5363] leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Guarantees */}
        <RevealOnScroll>
          <div className="py-20 border-b border-[#E3DDCF] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
              <div className="font-sans text-xs text-[#765406] uppercase font-semibold mb-3 pb-2 border-b border-[#E3DDCF]">
                Security &amp; Compliance
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#4A5363] leading-relaxed font-light">
                Protect critical business data with encrypted records in transit and at rest, role-gated access control, and automated security scanning in the deployment pipeline.
              </p>
            </div>
            <div className="p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
              <div className="font-sans text-xs text-[#765406] uppercase font-semibold mb-3 pb-2 border-b border-[#E3DDCF]">
                Performance Hardening
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#4A5363] leading-relaxed font-light">
                Maintain fast response times during peak operations with optimized database queries, edge caching, and asynchronous task queues.
              </p>
            </div>
            <div className="p-8 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
              <div className="font-sans text-xs text-[#765406] uppercase font-semibold mb-3 pb-2 border-b border-[#E3DDCF]">
                Code Ownership &amp; Handover
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#4A5363] leading-relaxed font-light">
                Retain full ownership of all intellectual property, clean version-controlled repositories, automated deployment scripts, and architectural documentation.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* FAQs */}
        {service.faq && service.faq.length > 0 && (
          <RevealOnScroll>
            <div className="py-20 border-b border-[#E3DDCF]">
              <div className="mb-12">
                <span className="font-sans text-[12px] tracking-wider text-[#765406] uppercase font-semibold">
                  Frequently Asked Questions
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] mt-2 font-normal">
                  Technical considerations.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.faq.map((item: any, idx: number) => (
                  <div key={idx} className="p-6 bg-[#FFFFFF] border border-[#E3DDCF] shadow-xs">
                    <h3 className="font-sans text-sm sm:text-base font-semibold text-[#141B26] mb-3">
                      {item.q}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#4A5363] leading-relaxed font-light">
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
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#141B26] mb-4 font-normal">
              Ready to engineer your solution?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4A5363] mb-8 font-light">
              Share your project requirements and our engineering team will formulate an actionable scoping architecture.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a project &rarr;
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
