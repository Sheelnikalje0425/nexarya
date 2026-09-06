import React, { useState, useEffect } from "react";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { api } from "@/lib/api";
import { INITIAL_PRICING_PLANS } from "@/lib/constants/initialData";

const COMPARISON_DATA = [
  {
    category: "Core Architecture & Scoping",
    features: [
      { name: "Technical Discovery & Blueprint", fixed: "Full Architecture Doc", pod: "Continuous Discovery", advisory: "Bi-weekly Advisory" },
      { name: "Database Schema Design (ACID)", fixed: "Included", pod: "Included & Optimized", advisory: "Review & Audit Only" },
      { name: "REST / GraphQL API Contracts", fixed: "Strictly Typed", pod: "Iterative & Typed", advisory: "Contract Review" },
      { name: "Authentication & RBAC Setup", fixed: "Standard 4-Role RBAC", pod: "Custom Multi-Tenant RBAC", advisory: "Security Audit" },
    ],
  },
  {
    category: "Engineering Execution",
    features: [
      { name: "Frontend Engineering (React 19)", fixed: "Included", pod: "Included (Dedicated)", advisory: "PR Reviews" },
      { name: "Backend Services & Microservices", fixed: "Included", pod: "Included (Dedicated)", advisory: "Architecture Guidance" },
      { name: "Automated Testing (Unit & E2E)", fixed: "Core Test Suite", pod: "Comprehensive CI Suite", advisory: "QA Strategy" },
      { name: "Automated Deployment (CI/CD)", fixed: "1 Environment Pipeline", pod: "Multi-Tier Cloud Rails", advisory: "Infra Audit" },
    ],
  },
  {
    category: "Support & Intellectual Property",
    features: [
      { name: "Code Ownership & IP Assignment", fixed: "100% Client Ownership", pod: "100% Client Ownership", advisory: "N/A" },
      { name: "Post-Launch Warranty", fixed: "30-Day Defect Warranty", pod: "Continuous Coverage", advisory: "Advisory SLA" },
      { name: "Engineering Handover Session", fixed: "Recorded Deep-Dive", pod: "Continuous Handover", advisory: "Guidance Calls" },
    ],
  },
];

export default function PricingPage() {
  const [plans, setPlans] = useState<any[]>(INITIAL_PRICING_PLANS);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getPricingPlans()
      .then((data) => {
        if (data?.plans?.length > 0) {
          setPlans(data.plans);
        }
      })
      .catch((err) => {
        console.warn("Using default pricing data:", err);
      });
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Commercial Engagement Models & Pricing | NEXARYA"
        description="Transparent software engineering engagement models: Fixed-Scope Milestones, Dedicated Engineering Pods, and Technical Advisory."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Page Header */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                ENGAGEMENT MODELS
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#0E1720] leading-[1.06] tracking-[-0.025em] mb-6">
              Transparent models, <br />
              <span className="italic font-normal">tailored to your scope.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#5C6975] font-light leading-relaxed">
              We don&apos;t sell generic monthly software tiers. We structure engagements based on the actual complexity, velocity requirements, and architectural depth of your digital product.
            </p>
          </div>
        </RevealOnScroll>

        {/* 3 Core Engagement Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, idx) => {
            const featuresList = Array.isArray(plan.features)
              ? plan.features
              : typeof plan.features === "string"
              ? JSON.parse(plan.features || "[]")
              : [];

            return (
              <RevealOnScroll key={plan.slug || idx} delayMs={idx * 100}>
                <div
                  className={`relative flex flex-col justify-between p-8 sm:p-10 bg-[#FFFFFF] border transition-all duration-300 h-full shadow-[0_12px_40px_rgba(14,23,32,0.06)] ${
                    plan.featured
                      ? "border-[#0E1720] ring-1 ring-[#0E1720]"
                      : "border-[#DCD6CA] hover:border-[#0E1720]"
                  }`}
                >
                  {plan.featured ? (
                    <div className="absolute -top-3 right-8 bg-[#0E1720] text-[#FFFFFF] font-tech text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-0.5">
                      MOST POPULAR
                    </div>
                  ) : null}

                  <div>
                    <div className="font-tech text-[10px] tracking-[0.2em] text-[#5C6975] uppercase mb-2 font-semibold">
                      {plan.billing_type}
                    </div>

                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] mb-3">
                      {plan.name}
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    <div className="p-4 bg-[#FAF8F5] border border-[#EAE5DB] mb-8">
                      <div className="font-tech text-xs text-[#5C6975] uppercase tracking-wide">Model Structure</div>
                      <div className="font-editorial text-2xl text-[#0E1720] mt-1 font-bold">{plan.price}</div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="font-tech text-[10px] tracking-[0.2em] text-[#0E1720] uppercase font-bold">
                        INCLUSIONS
                      </div>
                      {featuresList.map((feat: string) => (
                        <div key={feat} className="flex items-start gap-2 text-xs font-sans text-[#5C6975] leading-relaxed">
                          <span className="text-[#0E1720] mt-0.5 shrink-0 font-bold">✔</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#EAE5DB]">
                    <Button
                      href="/contact"
                      variant={plan.featured ? "primary" : "secondary"}
                      size="md"
                      className="w-full justify-center text-center"
                    >
                      Initiate Discussion
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* High-Density Comparison Matrix */}
        <RevealOnScroll>
          <div className="mb-24">
            <div className="mb-10">
              <span className="font-tech text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                DETAILED CAPABILITY MATRIX
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0E1720] mt-2">
                Compare engagement models.
              </h2>
            </div>

            {/* Desktop Matrix View (1024px+) */}
            <div className="hidden lg:block bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)]">
              <table className="w-full text-left font-sans text-xs">
                <thead>
                  <tr className="border-b border-[#DCD6CA] bg-[#FAF8F5] font-tech text-xs text-[#0E1720] uppercase font-bold">
                    <th className="p-5 w-2/5">Capabilities & Inclusions</th>
                    <th className="p-5 text-[#0E1720]">Fixed-Scope Build</th>
                    <th className="p-5 text-[#0E1720]">Dedicated Pod</th>
                    <th className="p-5 text-[#0E1720]">Technical Advisory</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((section) => (
                    <React.Fragment key={section.category}>
                      <tr className="bg-[#FAF8F5] border-t border-b border-[#EAE5DB]">
                        <td colSpan={4} className="p-3.5 px-5 font-tech text-[11px] text-[#0E1720] uppercase font-bold">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((f, i) => (
                        <tr key={f.name} className={`border-b border-[#EAE5DB] ${i % 2 === 0 ? "bg-transparent" : "bg-[#FAF8F5]/50"}`}>
                          <td className="p-4 px-5 text-[#0E1720] font-semibold">{f.name}</td>
                          <td className="p-4 text-[#5C6975]">{f.fixed}</td>
                          <td className="p-4 text-[#0E1720] font-bold">{f.pod}</td>
                          <td className="p-4 text-[#5C6975]">{f.advisory}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile-Optimized Comparison Cards (< 1024px) */}
            <div className="lg:hidden space-y-6">
              {COMPARISON_DATA.map((section) => (
                <div key={section.category} className="p-6 bg-[#FFFFFF] border border-[#DCD6CA]">
                  <h3 className="font-tech text-xs text-[#0E1720] uppercase font-bold mb-4 pb-2 border-b border-[#EAE5DB]">
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.features.map((f) => (
                      <div key={f.name} className="p-3 bg-[#FAF8F5] border border-[#EAE5DB] space-y-2">
                        <div className="font-sans text-xs font-bold text-[#0E1720]">{f.name}</div>
                        <div className="grid grid-cols-3 gap-2 font-tech text-[10px] pt-1">
                          <div>
                            <span className="text-[#8E9CA8] block font-semibold">FIXED</span>
                            <span className="text-[#5C6975]">{f.fixed}</span>
                          </div>
                          <div>
                            <span className="text-[#0E1720] block font-bold">POD</span>
                            <span className="text-[#0E1720] font-bold">{f.pod}</span>
                          </div>
                          <div>
                            <span className="text-[#8E9CA8] block font-semibold">ADVISORY</span>
                            <span className="text-[#5C6975]">{f.advisory}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Guarantees */}
        <RevealOnScroll>
          <div className="p-10 sm:p-14 bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-tech text-xs text-[#0E1720] font-bold mb-2">100% IP OWNERSHIP</div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                Every line of code, infrastructure config, and domain asset belongs to your organization with zero licensing lock-in.
              </p>
            </div>
            <div>
              <div className="font-tech text-xs text-[#0E1720] font-bold mb-2">MILESTONE ACCOUNTABILITY</div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                We tie financial milestones directly to verified code deliveries, staging demos, and automated test pass rates.
              </p>
            </div>
            <div>
              <div className="font-tech text-xs text-[#0E1720] font-bold mb-2">POST-LAUNCH WARRANTY</div>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
                All production builds include a standard 30-day post-launch warranty and comprehensive technical documentation.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
