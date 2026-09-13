import React, { useState } from "react";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";

const PROJECT_TYPES = [
  "Custom Software & Enterprise Platforms",
  "AI, Automation & Machine Learning Systems",
  "Scalable SaaS & Cloud Product Architecture",
  "High-Performance Web & Mobile Applications",
  "System Integrations & API Microservices",
  "Technical Architecture & Security Advisory",
];

const BUDGET_RANGES = [
  "< $25k (MVP / Focused Build)",
  "$25k - $50k (Core Platform / V1)",
  "$50k - $100k (Full-Scale System)",
  "$100k+ (Enterprise Ecosystem)",
  "Retainer / Dedicated Engineering Pod",
];

const TIMELINES = [
  "Immediate (Next 2-4 weeks)",
  "1-3 Months",
  "3-6 Months",
  "Flexible / Long-term Roadmap",
];

export default function ContactInquiryPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    timeline: TIMELINES[1],
    description: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    hp_field: "", // Honeypot
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 2 && !formData.description.trim()) {
      setErrorMessage("Please provide a brief technical summary of your project.");
      return;
    }
    setErrorMessage(null);
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrorMessage(null);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage("Please provide your name and email address.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await api.submitInquiry({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
        hp_field: formData.hp_field,
      });

      trackEvent("inquiry_submitted", { referenceId: res.referenceId });
      setSubmittedRef(res.referenceId);
      setStep(6); // Success confirmation stage
    } catch (err: any) {
      console.error("Inquiry submission failed:", err);
      setErrorMessage(err.message || "Failed to submit inquiry. Please try again or email hello@nexarya.in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8F5EE] min-h-screen select-none">
      <SEOHead
        title="Start a Project & Scope Architecture | NEXARYA"
        description="Initiate a software engineering project with NEXARYA. Multi-step scoping for custom software, SaaS products, AI systems, and cloud infrastructure."
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17202B]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#394352] uppercase font-semibold">
                PROJECT INITIATION
              </span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl text-[#17202B] mb-3">
              Have something worth building?
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#394352] font-light leading-relaxed">
              Tell us what you&apos;re looking to engineer. We review the details and respond with the appropriate next step.
            </p>
          </div>
        </RevealOnScroll>

        {/* 5-Step Scoping Card */}
        <div className="bg-[#FFFFFF] border border-[#DED7C9] shadow-[0_12px_40px_rgba(14,23,32,0.06)] p-6 sm:p-12 relative">
          {/* Step Progress Bar */}
          {step <= 5 && (
            <div className="mb-10 pb-6 border-b border-[#DED7C9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#17202B] font-bold">STAGE 0{step} / 05</span>
                <span className="font-mono text-[10px] text-[#68717B] uppercase tracking-wider">
                  {step === 1 && "— Project Type"}
                  {step === 2 && "— Problem & Scope"}
                  {step === 3 && "— Expected Timeline"}
                  {step === 4 && "— Target Budget"}
                  {step === 5 && "— Contact & Specs"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === step
                        ? "w-8 bg-[#17202B]"
                        : i < step
                        ? "w-3 bg-[#394352]"
                        : "w-3 bg-[#DED7C9]"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 font-sans text-xs">
              {errorMessage}
            </div>
          )}

          {/* Hidden Honeypot Field for anti-bot protection */}
          <input
            type="text"
            name="hp_field"
            value={formData.hp_field}
            onChange={(e) => handleChange("hp_field", e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* STEP 1: Project Type */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B]">
                What type of product or system are we engineering?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleChange("projectType", type)}
                    className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                      formData.projectType === type
                        ? "border-[#17202B] bg-[#F1EDE3] text-[#17202B] font-semibold"
                        : "border-[#DED7C9] bg-[#FFFFFF] text-[#394352] hover:border-[#17202B]"
                    }`}
                  >
                    <div className="font-sans text-xs sm:text-sm">{type}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Scope & Requirements */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B]">
                Describe your technical objectives and requirements
              </h2>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.16em] text-[#68717B] uppercase mb-2 font-semibold">
                  Technical Summary / Problem Description *
                </label>
                <textarea
                  rows={5}
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Summarize your current systems, desired features, integration endpoints, or performance requirements..."
                  className="w-full p-4 bg-[#F1EDE3] border border-[#DED7C9] text-sm text-[#17202B] placeholder-[#68717B] focus:outline-none focus:border-[#17202B] transition-colors font-sans"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Timeline */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B]">
                What is your target engineering timeline?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleChange("timeline", t)}
                    className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                      formData.timeline === t
                        ? "border-[#17202B] bg-[#F1EDE3] text-[#17202B] font-semibold"
                        : "border-[#DED7C9] bg-[#FFFFFF] text-[#394352] hover:border-[#17202B]"
                    }`}
                  >
                    <div className="font-sans text-xs sm:text-sm">{t}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Budget */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B]">
                What is your anticipated budget range?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUDGET_RANGES.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => handleChange("budget", b)}
                    className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                      formData.budget === b
                        ? "border-[#17202B] bg-[#F1EDE3] text-[#17202B] font-semibold"
                        : "border-[#DED7C9] bg-[#FFFFFF] text-[#394352] hover:border-[#17202B]"
                    }`}
                  >
                    <div className="font-sans text-xs sm:text-sm">{b}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Contact & Team Information */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#17202B]">
                How should our engineering team contact you?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] text-[#68717B] uppercase mb-2 font-semibold">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full p-3 bg-[#F1EDE3] border border-[#DED7C9] text-sm text-[#17202B] placeholder-[#68717B] focus:outline-none focus:border-[#17202B]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] text-[#68717B] uppercase mb-2 font-semibold">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Corp (or Independent)"
                    className="w-full p-3 bg-[#F1EDE3] border border-[#DED7C9] text-sm text-[#17202B] placeholder-[#68717B] focus:outline-none focus:border-[#17202B]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] text-[#68717B] uppercase mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full p-3 bg-[#F1EDE3] border border-[#DED7C9] text-sm text-[#17202B] placeholder-[#68717B] focus:outline-none focus:border-[#17202B]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] text-[#68717B] uppercase mb-2 font-semibold">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-3 bg-[#F1EDE3] border border-[#DED7C9] text-sm text-[#17202B] placeholder-[#68717B] focus:outline-none focus:border-[#17202B]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Confirmation with Reference ID */}
          {step === 6 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#F1EDE3] border border-[#17202B] flex items-center justify-center mx-auto text-[#17202B] text-2xl font-bold">
                ✓
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl text-[#17202B]">
                Inquiry Successfully Acknowledged
              </h2>

              <p className="font-sans text-sm text-[#394352] max-w-md mx-auto leading-relaxed font-light">
                Your technical specifications have been registered in our project queue. A confirmation email has been dispatched to <span className="text-[#17202B] font-medium">{formData.email}</span>.
              </p>

              <div className="p-6 bg-[#F1EDE3] border border-[#DED7C9] max-w-md mx-auto">
                <div className="font-mono text-[10px] tracking-[0.2em] text-[#68717B] uppercase font-semibold">
                  OFFICIAL INQUIRY REFERENCE
                </div>
                <div className="font-mono text-2xl font-bold text-[#17202B] mt-1 tracking-wider">
                  {submittedRef}
                </div>
              </div>

              <div className="pt-4">
                <Button href="/" variant="primary" size="md">
                  Return to Home
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          {step <= 5 && (
            <div className="mt-10 pt-6 border-t border-[#DED7C9] flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#394352] hover:text-[#17202B] cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Stage</span>
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <Button onClick={handleNext} variant="primary" size="md">
                  Continue to Stage 0{step + 1}
                </Button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F1725] hover:bg-[#141F30] text-[#F7F5EF] font-mono text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? "Registering Specs..." : "Submit Project Specifications"}</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
