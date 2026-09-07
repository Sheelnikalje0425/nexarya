import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight, StarIcon } from "@/components/ui/Icons";
import { api } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";

export default function InvitedFeedbackPage() {
  const { token } = useParams<{ token: string }>();
  const [validating, setValidating] = useState(true);
  const [invitationData, setInvitationData] = useState<{
    recipientName: string;
    company: string;
    designation: string;
    projectRef: string;
    expiresAt: string;
  } | null>(null);
  const [invalidError, setInvalidError] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    project: "",
    rating: 5,
    quote: "",
    recommendation: "",
    consent_website: true,
    consent_social: false,
    hp_field: "",
  });

  useEffect(() => {
    if (!token) {
      setInvalidError("Missing invitation token.");
      setValidating(false);
      return;
    }

    api.getFeedbackInvitation(token)
      .then((res) => {
        if (res.valid && res.invitation) {
          setInvitationData(res.invitation);
          setFormData((prev) => ({
            ...prev,
            name: res.invitation.recipientName || "",
            designation: res.invitation.designation || "",
            company: res.invitation.company || "",
            project: res.invitation.projectRef || "",
          }));
        } else {
          setInvalidError("This invitation link is invalid or expired.");
        }
      })
      .catch((err: any) => {
        setInvalidError(err.message || "This invitation link is invalid, expired, or has already been used.");
      })
      .finally(() => {
        setValidating(false);
      });
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    if (!formData.name.trim() || !formData.company.trim() || !formData.quote.trim()) {
      setSubmitError("Please complete all required fields: Name, Organization, and Feedback Quote.");
      return;
    }

    if (!formData.consent_website) {
      setSubmitError("Website publication consent is required for verified testimonial display.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await api.submitInvitedFeedback(token, {
        name: formData.name.trim(),
        company: formData.company.trim(),
        designation: formData.designation.trim() || undefined,
        project: formData.project.trim() || undefined,
        rating: formData.rating,
        quote: formData.quote.trim(),
        recommendation: formData.recommendation.trim() || undefined,
        consent_website: formData.consent_website ? 1 : 0,
        consent_social: formData.consent_social ? 1 : 0,
        hp_field: formData.hp_field,
      });

      trackEvent("invited_feedback_submitted", { referenceId: res.referenceId });
      setSubmittedRef(res.referenceId);
    } catch (err: any) {
      console.error("Invited feedback submission failed:", err);
      setSubmitError(err.message || "Failed to submit feedback. Please try again or contact hello@nexarya.in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F4EFE6] min-h-screen select-none">
      <SEOHead
        title="Verified Client Feedback Invitation | NEXARYA"
        description="Secure client feedback submission portal for verified NEXARYA software engineering engagements."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E1720]" />
              <span className="font-tech text-[10px] sm:text-xs tracking-[0.2em] text-[#5C6975] uppercase font-semibold">
                VERIFIED CLIENT PORTAL
              </span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-[#0E1720] mb-3 leading-snug break-words">
              Project Feedback & Review
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#5C6975] font-light leading-relaxed">
              You have been invited to provide verified engineering feedback on your partnership with Nexarya. No account or password is required.
            </p>
          </div>
        </RevealOnScroll>

        <div className="w-full bg-[#FFFFFF] border border-[#DCD6CA] shadow-[0_12px_40px_rgba(14,23,32,0.06)] p-5 sm:p-10 relative">
          {validating ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-8 h-8 border-2 border-[#0E1720]/20 border-t-[#0E1720] rounded-full animate-spin mx-auto" />
              <div className="font-tech text-xs tracking-[0.15em] text-[#5C6975] uppercase">
                Authenticating Invitation Security Token...
              </div>
            </div>
          ) : invalidError ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#FFF4F2] border border-[#E05A47]/30 flex items-center justify-center mx-auto text-[#E05A47] text-xl font-bold">
                !
              </div>
              <div>
                <span className="font-tech text-[10px] tracking-[0.2em] text-[#E05A47] uppercase font-semibold block mb-2">
                  INVITATION STATUS
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#0E1720] mb-3">
                  Invalid or Expired Invitation
                </h2>
                <p className="font-sans text-sm text-[#5C6975] max-w-md mx-auto leading-relaxed">
                  {invalidError}
                </p>
              </div>
              <div className="pt-4 border-t border-[#DCD6CA]/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-sans">
                <a
                  href="mailto:hello@nexarya.in?subject=Refreshed%20Feedback%20Invitation%20Request"
                  className="text-[#0E1720] font-medium underline underline-offset-4 hover:text-[#D4A72C] transition-colors"
                >
                  Request a refreshed link (hello@nexarya.in)
                </a>
                <span className="text-[#5C6975] hidden sm:inline">•</span>
                <Link to="/" className="text-[#5C6975] hover:text-[#0E1720] transition-colors">
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : submittedRef ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF8F5] border border-[#0E1720] flex items-center justify-center mx-auto text-[#0E1720] text-2xl font-bold">
                ✓
              </div>
              <h2 className="font-editorial text-2xl sm:text-4xl text-[#0E1720] leading-tight">
                Feedback Successfully Received
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5C6975] max-w-md mx-auto font-light leading-relaxed">
                Thank you for taking the time to share your perspective. Your verified submission has been logged and queued for editorial review.
              </p>
              <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] max-w-sm mx-auto font-tech text-xs tracking-wider text-[#0E1720]">
                <span className="text-[#5C6975] text-[10px] block uppercase">Tracking Identifier</span>
                <span className="font-bold text-sm text-[#0E1720]">{submittedRef}</span>
              </div>
              <div className="pt-6">
                <Link to="/">
                  <Button variant="primary">
                    Return to Homepage <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 bg-[#FAF8F5] border border-[#DCD6CA] rounded-sm flex items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-tech text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-semibold flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    AUTHENTICATED INVITATION
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#0E1720] font-medium">
                    {invitationData?.company} {invitationData?.projectRef ? `— ${invitationData.projectRef}` : ""}
                  </div>
                </div>
                <span className="font-tech text-[10px] text-[#5C6975] uppercase tracking-wider shrink-0">
                  SINGLE USE
                </span>
              </div>

              {submitError && (
                <div className="p-4 bg-[#FFF4F2] border border-[#E05A47]/40 text-[#E05A47] font-sans text-xs leading-relaxed">
                  {submitError}
                </div>
              )}

              <input
                type="text"
                name="hp_field"
                value={formData.hp_field}
                onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-1.5 font-semibold">
                    Full Name <span className="text-[#E05A47]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DCD6CA] px-3.5 py-2.5 text-xs sm:text-sm text-[#0E1720] focus:outline-none focus:border-[#0E1720] transition-colors"
                    placeholder="e.g., Dr. Rajesh Sharma"
                  />
                </div>

                <div>
                  <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-1.5 font-semibold">
                    Role / Designation
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DCD6CA] px-3.5 py-2.5 text-xs sm:text-sm text-[#0E1720] focus:outline-none focus:border-[#0E1720] transition-colors"
                    placeholder="e.g., Head of Digital Infrastructure"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-1.5 font-semibold">
                    Organization / Company <span className="text-[#E05A47]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DCD6CA] px-3.5 py-2.5 text-xs sm:text-sm text-[#0E1720] focus:outline-none focus:border-[#0E1720] transition-colors"
                    placeholder="e.g., Western Transit Consortium"
                  />
                </div>

                <div>
                  <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-1.5 font-semibold">
                    Project / Engagement Scope
                  </label>
                  <input
                    type="text"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#DCD6CA] px-3.5 py-2.5 text-xs sm:text-sm text-[#0E1720] focus:outline-none focus:border-[#0E1720] transition-colors"
                    placeholder="e.g., Railway Concession Management System"
                  />
                </div>
              </div>

              <div>
                <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-2 font-semibold">
                  Overall Technical & Delivery Rating <span className="text-[#E05A47]">*</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-2 text-[#0E1720] hover:scale-110 transition-transform cursor-pointer"
                      aria-label={`Rate ${star} out of 5 stars`}
                    >
                      <StarIcon
                        className={`w-6 h-6 ${
                          star <= formData.rating
                            ? "text-[#D4A72C] fill-[#D4A72C]"
                            : "text-[#DCD6CA] fill-transparent"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="font-tech text-xs text-[#5C6975] ml-2">
                    {formData.rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-1.5 font-semibold">
                  Feedback / Review Statement <span className="text-[#E05A47]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#DCD6CA] px-3.5 py-2.5 text-xs sm:text-sm text-[#0E1720] focus:outline-none focus:border-[#0E1720] transition-colors leading-relaxed"
                  placeholder="Describe the engineering problem Nexarya solved, the quality of system architecture, delivery discipline, and communication during the engagement..."
                />
              </div>

              <div>
                <label className="block font-tech text-[11px] uppercase tracking-wider text-[#0E1720] mb-1.5 font-semibold">
                  Summary Recommendation <span className="text-[#5C6975] font-normal text-[10px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.recommendation}
                  onChange={(e) => setFormData({ ...formData, recommendation: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#DCD6CA] px-3.5 py-2.5 text-xs sm:text-sm text-[#0E1720] focus:outline-none focus:border-[#0E1720] transition-colors"
                  placeholder="e.g., Highly recommended for enterprises that need rock-solid, purpose-built software."
                />
              </div>

              <div className="space-y-3 pt-3 border-t border-[#DCD6CA]/70">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent_website}
                    onChange={(e) => setFormData({ ...formData, consent_website: e.target.checked })}
                    className="mt-1 accent-[#0E1720] cursor-pointer"
                  />
                  <span className="font-sans text-xs text-[#0E1720] leading-relaxed">
                    <strong>Website Publication Consent:</strong> I agree to have this verified feedback displayed on the official NEXARYA website alongside my name, designation, and company name. <span className="text-[#E05A47]">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent_social}
                    onChange={(e) => setFormData({ ...formData, consent_social: e.target.checked })}
                    className="mt-1 accent-[#0E1720] cursor-pointer"
                  />
                  <span className="font-sans text-xs text-[#5C6975] leading-relaxed">
                    <strong>Social Media Consent:</strong> I consent to NEXARYA referencing key excerpts from this review in studio announcements and case studies on LinkedIn.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="w-full sm:w-auto"
                >
                  {submitting ? "Submitting Verified Review..." : "Submit Verified Feedback"}
                  {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>

                <span className="font-tech text-[10px] tracking-wider text-[#5C6975] uppercase text-center sm:text-right">
                  SECURE & TOKEN-AUTHENTICATED
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
