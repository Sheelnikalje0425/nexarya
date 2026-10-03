import React, { useState, useEffect } from "react";
import SEOHead from "@/components/seo/SEOHead";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";

export default function ContactInquiryPage() {
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    hp_field: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please provide your name and work email.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        description: formData.description,
        projectType: "Direct Scoping Inquiry",
        budget: "Flexible / scoping",
        timeline: "Immediate / active",
        phone: "",
        hp_field: formData.hp_field,
      });

      trackEvent("inquiry_submitted", { referenceId: res.referenceId });
      setSubmittedRef(res.referenceId);
    } catch (err: any) {
      console.error("Inquiry submission failed:", err);
      setErrorMessage(err.message || "Failed to submit inquiry. Please email hello@nexarya.in directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F5EE] text-[#141B26] min-h-screen select-none">
      <SEOHead
        title="Start a Project & Scope Architecture | Nexarya"
        description="Initiate a software engineering project with Nexarya. Direct technical scoping for custom software, SaaS products, AI systems, and cloud infrastructure."
      />

      {/* Editorial Header */}
      <section className="pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-[#E8E3D8]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-3">
                Start a Project
              </span>
              <h1 className="font-editorial text-balance text-4xl sm:text-6xl md:text-7xl lg:text-[4.4rem] text-[#0F1725] leading-[1.04] tracking-[-0.03em] font-normal mb-4">
                Have something <br />
                <span className="italic">worth building?</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#4A5363] font-light leading-relaxed">
                Tell us about your requirements. We'll review them and get back to you.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Clean Unboxed Form & What Happens Next */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left: Minimal Form (No Boxed White Card) */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                {submittedRef ? (
                  <div className="space-y-4 py-4">
                    <h2 className="font-editorial text-3xl text-[#0F1725] font-normal">
                      Inquiry received.
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-[#4A5363] font-light leading-relaxed">
                      Reference ID: <span className="font-mono text-[#0F1725] font-semibold">{submittedRef}</span>. We will review your requirements and respond shortly.
                    </p>
                    <div className="pt-4">
                      <a
                        href="/"
                        className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#0F1725] hover:text-[#8A6B1E]"
                      >
                        <span>Return to home</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 font-sans text-xs">
                        {errorMessage}
                      </div>
                    )}

                    <input
                      type="text"
                      name="hp_field"
                      value={formData.hp_field}
                      onChange={(e) => handleChange("hp_field", e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label className="block font-sans text-xs font-semibold text-[#0F1725] mb-2">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full p-3 bg-transparent border-b border-[#E8E3D8] focus:border-[#0F1725] text-sm text-[#0F1725] placeholder-[#8A94A6] focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-semibold text-[#0F1725] mb-2">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="jane@organization.com"
                        className="w-full p-3 bg-transparent border-b border-[#E8E3D8] focus:border-[#0F1725] text-sm text-[#0F1725] placeholder-[#8A94A6] focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-semibold text-[#0F1725] mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Company or institution"
                        className="w-full p-3 bg-transparent border-b border-[#E8E3D8] focus:border-[#0F1725] text-sm text-[#0F1725] placeholder-[#8A94A6] focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-semibold text-[#0F1725] mb-2">
                        Tell us briefly what you need
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        placeholder="Describe the problem, workflow, or system you want to engineer..."
                        className="w-full p-3 bg-transparent border-b border-[#E8E3D8] focus:border-[#0F1725] text-sm text-[#0F1725] placeholder-[#8A94A6] focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D2AA4E] hover:bg-[#E0BD68] text-[#0F1725] font-sans text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-2xs disabled:opacity-50"
                      >
                        <span>{loading ? "Sending..." : "Send inquiry"}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>

                    <p className="font-sans text-xs text-[#7F8A99] pt-2">
                      Direct inquiries:{" "}
                      <a href="mailto:hello@nexarya.in" className="text-[#0F1725] underline">
                        hello@nexarya.in
                      </a>
                    </p>
                  </form>
                )}
              </RevealOnScroll>
            </div>

            {/* Right: What Happens Next (Small, Clean Text Section, NOT A Card) */}
            <div className="lg:col-span-5 pt-2">
              <RevealOnScroll delayMs={60}>
                <div className="space-y-6">
                  <div>
                    <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#8A6B1E] uppercase tracking-wider block mb-1">
                      Process
                    </span>
                    <h2 className="font-editorial text-2xl text-[#0F1725] font-normal">
                      What happens next
                    </h2>
                  </div>

                  <div className="space-y-4 divide-y divide-[#E8E3D8]">
                    <div className="pt-3 first:pt-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans text-xs font-semibold text-[#8A6B1E]">01</span>
                        <h3 className="font-sans text-sm font-semibold text-[#0F1725]">
                          Review
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-[#4A5363] font-light mt-0.5 pl-6">
                        We review your requirement and evaluate operational feasibility.
                      </p>
                    </div>

                    <div className="pt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans text-xs font-semibold text-[#8A6B1E]">02</span>
                        <h3 className="font-sans text-sm font-semibold text-[#0F1725]">
                          Discuss
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-[#4A5363] font-light mt-0.5 pl-6">
                        We schedule a direct conversation to explore the problem in depth.
                      </p>
                    </div>

                    <div className="pt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans text-xs font-semibold text-[#8A6B1E]">03</span>
                        <h3 className="font-sans text-sm font-semibold text-[#0F1725]">
                          Proposal
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-[#4A5363] font-light mt-0.5 pl-6">
                        We formulate a clear proposal with architecture, milestones, and timelines.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E8E3D8] text-xs font-sans text-[#7F8A99] space-y-1">
                    <div>Mumbai, India &middot; Operating Worldwide</div>
                    <div className="text-[#8A6B1E] font-medium">&bull; Active Production Engineering</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
