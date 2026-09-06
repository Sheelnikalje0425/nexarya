import React, { useState } from "react";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight, StarIcon } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";

export default function ClientFeedbackPage() {
  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    project: "",
    rating: 5,
    quote: "",
    recommendation: "",
    consent_website: true,
    consent_social: false,
    hp_field: "", // Anti-bot honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.quote) {
      setErrorMessage("Please complete all required fields: Full Name, Company, and Feedback Statement.");
      return;
    }

    if (!formData.consent_website) {
      setErrorMessage("Website publication consent is required to submit feedback for editorial review.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await api.submitFeedback({
        name: formData.name,
        company: formData.company,
        role: formData.role,
        project: formData.project,
        rating: formData.rating,
        quote: formData.quote,
        recommendation: formData.recommendation,
        consent_website: formData.consent_website ? 1 : 0,
        consent_social: formData.consent_social ? 1 : 0,
        hp_field: formData.hp_field,
      });

      trackEvent("feedback_submitted", { referenceId: res.referenceId });
      setSubmittedRef(res.referenceId);
    } catch (err: any) {
      console.error("Feedback submission failed:", err);
      setErrorMessage(err.message || "Failed to submit feedback. Please try again or email hello@nexarya.in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Client Feedback & Partnership Reviews | NEXARYA"
        description="Share your feedback on software engineering engagements with NEXARYA. Authentic client reviews and testimonials."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-[10px] sm:text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                PARTNERSHIP REVIEW
              </span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-[#0E1720] mb-3 leading-snug break-words">
              Client Feedback & Experience
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
              We value direct engineering feedback. Your perspective helps us maintain architectural excellence and informs future partners about our delivery standards.
            </p>
          </div>
        </RevealOnScroll>

        {/* Feedback Form Card */}
        <div className="w-full bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] p-5 sm:p-10 relative">
          {submittedRef ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF8F5] border border-[#0E1720] flex items-center justify-center mx-auto text-[#0E1720] text-2xl font-bold">
                ✓
              </div>

              <h2 className="font-editorial text-2xl sm:text-4xl text-[#0E1720] leading-tight">
                Thank you. Your feedback has been received.
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#5C6975] max-w-md mx-auto leading-relaxed font-light">
                Your partnership review has been queued for editorial review and verification. We deeply appreciate your collaboration with NEXARYA.
              </p>

              <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#DCD6CA] max-w-md mx-auto">
                <div className="font-tech text-[10px] tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                  SUBMISSION REFERENCE
                </div>
                <div className="font-tech text-xl sm:text-2xl font-bold text-[#0E1720] mt-1 tracking-wider">
                  {submittedRef}
                </div>
              </div>

              <div className="pt-4">
                <Button href="/" variant="primary" size="md">
                  Return to Home
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 font-sans text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Honeypot field */}
              <input
                type="text"
                value={formData.hp_field}
                onChange={(e) => setFormData((prev) => ({ ...prev, hp_field: e.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Rajesh Sharma"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DCD6CA] text-xs sm:text-sm text-[#0E1720] placeholder-[#8E9CA8] focus:outline-none focus:border-[#0E1720] box-border"
                  />
                </div>

                <div className="w-full">
                  <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    placeholder="Western Transit Consortium"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DCD6CA] text-xs sm:text-sm text-[#0E1720] placeholder-[#8E9CA8] focus:outline-none focus:border-[#0E1720] box-border"
                  />
                </div>
              </div>

              {/* Role & Project */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                    Your Role / Title
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                    placeholder="Head of Digital Infrastructure"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DCD6CA] text-xs sm:text-sm text-[#0E1720] placeholder-[#8E9CA8] focus:outline-none focus:border-[#0E1720] box-border"
                  />
                </div>

                <div className="w-full">
                  <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                    Project / Engagement Name
                  </label>
                  <input
                    type="text"
                    value={formData.project}
                    onChange={(e) => setFormData((prev) => ({ ...prev, project: e.target.value }))}
                    placeholder="Railway Concession Management System"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DCD6CA] text-xs sm:text-sm text-[#0E1720] placeholder-[#8E9CA8] focus:outline-none focus:border-[#0E1720] box-border"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div className="w-full">
                <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                  Overall Rating
                </label>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                      className={`p-1.5 sm:p-2 border transition-colors cursor-pointer ${
                        formData.rating >= star
                          ? "border-[#0E1720] bg-[#FAF8F5] text-[#0E1720]"
                          : "border-[#DCD6CA] bg-[#FFFFFF] text-[#8E9CA8]"
                      }`}
                    >
                      <StarIcon size={16} fill={formData.rating >= star ? "#0E1720" : "none"} />
                    </button>
                  ))}
                  <span className="font-tech text-[11px] sm:text-xs text-[#5C6975] ml-2 font-semibold">
                    {formData.rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Feedback Statement / Quote */}
              <div className="w-full">
                <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                  Feedback & Engineering Experience *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.quote}
                  onChange={(e) => setFormData((prev) => ({ ...prev, quote: e.target.value }))}
                  placeholder="Share details about the system engineered, technical delivery, reliability, and team communication..."
                  className="w-full p-3.5 sm:p-4 bg-[#FAF8F5] border border-[#DCD6CA] text-xs sm:text-sm text-[#0E1720] placeholder-[#8E9CA8] focus:outline-none focus:border-[#0E1720] box-border"
                />
              </div>

              {/* Optional Recommendation */}
              <div className="w-full">
                <label className="block font-tech text-[10px] tracking-[0.16em] text-[#5C6975] uppercase mb-2 font-semibold">
                  Recommendation Note (Optional)
                </label>
                <input
                  type="text"
                  value={formData.recommendation}
                  onChange={(e) => setFormData((prev) => ({ ...prev, recommendation: e.target.value }))}
                  placeholder="e.g. Highly recommended for enterprise platforms."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#DCD6CA] text-xs sm:text-sm text-[#0E1720] placeholder-[#8E9CA8] focus:outline-none focus:border-[#0E1720] box-border"
                />
              </div>

              {/* Explicit Consents */}
              <div className="w-full p-4 bg-[#FAF8F5] border border-[#DCD6CA] space-y-3 box-border">
                <div className="font-tech text-[10px] tracking-[0.18em] text-[#0E1720] uppercase font-bold">
                  PUBLICATION PERMISSIONS
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent_website}
                    onChange={(e) => setFormData((prev) => ({ ...prev, consent_website: e.target.checked }))}
                    className="mt-0.5 accent-[#0E1720] shrink-0"
                  />
                  <span className="font-sans text-[11px] sm:text-xs text-[#5C6975] leading-relaxed">
                    I agree to publish my feedback on the NEXARYA website.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent_social}
                    onChange={(e) => setFormData((prev) => ({ ...prev, consent_social: e.target.checked }))}
                    className="mt-0.5 accent-[#0E1720] shrink-0"
                  />
                  <span className="font-sans text-[11px] sm:text-xs text-[#5C6975] leading-relaxed">
                    I agree to use my feedback for NEXARYA social media.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0E1720] hover:bg-[#1A2530] text-[#FFFFFF] font-tech text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? "Submitting Review..." : "Submit Client Feedback"}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
