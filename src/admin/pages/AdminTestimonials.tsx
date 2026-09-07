import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import BrandLogo from "@/components/navigation/BrandLogo";

export default function AdminTestimonials() {
  const [mainTab, setMainTab] = useState<"MODERATION" | "INVITATIONS">("MODERATION");

  // Moderation state
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"ALL" | "PENDING" | "APPROVED" | "REJECTED">("ALL");
  const [socialModalData, setSocialModalData] = useState<{ testimonial: any; format: "INSTAGRAM" | "LINKEDIN" } | null>(null);
  const [copyNotice, setCopyNotice] = useState<string | null>(null);

  // Invitations state
  const [invitations, setInvitations] = useState<any[]>([]);
  const [invitationsLoading, setInvitationsLoading] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createForm, setCreateForm] = useState({
    recipient_name: "",
    recipient_email: "",
    company: "",
    designation: "",
    project_ref: "",
    expires_in_days: 30,
  });
  const [createSubmitting, setCreateSubmitting] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [generatedInvite, setGeneratedInvite] = useState<{
    id: string;
    inviteUrl: string;
    expiresAt: string;
  } | null>(null);
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const loadTestimonials = () => {
    setLoading(true);
    api.admin
      .getTestimonials()
      .then((data) => {
        setTestimonials(data.testimonials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load testimonials:", err);
        setLoading(false);
      });
  };

  const loadInvitations = () => {
    setInvitationsLoading(true);
    api.admin
      .getFeedbackInvitations()
      .then((data) => {
        setInvitations(data.invitations || []);
        setInvitationsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load feedback invitations:", err);
        setInvitationsLoading(false);
      });
  };

  useEffect(() => {
    loadTestimonials();
    loadInvitations();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: "APPROVED" | "REJECTED", publish: boolean = false) => {
    try {
      await api.admin.updateTestimonial(id, { status: newStatus, published: publish });
      loadTestimonials();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const togglePublish = async (id: string, currentPublished: boolean) => {
    try {
      await api.admin.updateTestimonial(id, { published: !currentPublished });
      loadTestimonials();
    } catch (err) {
      console.error("Failed to update published state:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this testimonial?")) return;
    try {
      await api.admin.deleteTestimonial(id);
      loadTestimonials();
    } catch (err) {
      console.error("Failed to delete testimonial:", err);
    }
  };

  const handleCreateInvitation = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateError(null);
    setCreateSubmitting(true);

    try {
      const res = await api.admin.createFeedbackInvitation({
        recipient_name: createForm.recipient_name.trim(),
        recipient_email: createForm.recipient_email.trim(),
        company: createForm.company.trim(),
        designation: createForm.designation.trim() || undefined,
        project_ref: createForm.project_ref.trim() || undefined,
        expires_in_days: Number(createForm.expires_in_days) || 30,
      });

      setGeneratedInvite({
        id: res.id,
        inviteUrl: res.inviteUrl,
        expiresAt: res.expiresAt,
      });
      loadInvitations();
    } catch (err: any) {
      console.error("Failed to generate invitation:", err);
      setCreateError(err.message || "Failed to create feedback invitation. Please verify inputs.");
    } finally {
      setCreateSubmitting(false);
    }
  };

  const handleRevokeInvitation = async (id: string) => {
    if (!confirm("Are you sure you want to revoke this invitation link? The client will no longer be able to submit feedback.")) {
      return;
    }

    setRevokingId(id);
    try {
      await api.admin.revokeFeedbackInvitation(id);
      loadInvitations();
    } catch (err: any) {
      console.error("Failed to revoke invitation:", err);
      alert(err.message || "Failed to revoke invitation");
    } finally {
      setRevokingId(null);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyNotice(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopyNotice(null), 3000);
  };

  const generateInstagramCaption = (t: any) => {
    return `"${t.quote}"\n\n— ${t.client_name}, ${t.designation} at ${t.company}\n\nEngineered Project: ${t.project || "Custom Software Architecture"}\nBuilt by NEXARYA — BEYOND BUILD\n\n#Nexarya #BeyondBuild #SoftwareEngineering #Architecture #ProductionReady #EnterpriseTech`;
  };

  const generateLinkedInCaption = (t: any) => {
    return `Client Perspective: ${t.company}\n\n"${t.quote}"\n\nWe partnered with ${t.company} to design and engineer high-performance systems that scale predictably.\n\nProject: ${t.project || "Enterprise Architecture"}\nStakeholder: ${t.client_name}, ${t.designation}\nBuilt by NEXARYA // BEYOND BUILD\n\nExplore our engineering methodology: https://nexarya.in\n\n#NEXARYA #SoftwareArchitecture #SystemsEngineering #DigitalTransformation`;
  };

  const getInvitationEffectiveStatus = (inv: any) => {
    if (inv.status === "ACTIVE" && new Date(inv.expires_at).getTime() < Date.now()) {
      return "EXPIRED";
    }
    return inv.status;
  };

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === "ALL") return true;
    return t.status === activeFilter;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0E1720]/10 pb-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
            CLIENT TESTIMONIALS // REPUTATION & PROOF
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
            Client Feedback & Testimonials
          </h1>
          <p className="font-sans text-sm text-[#576371] mt-1.5">
            Authenticate, moderate, and publish verified client feedback, manage private client invitation links, and generate publication assets.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {copyNotice && (
            <div className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 font-sans text-xs rounded-sm shrink-0">
              {copyNotice}
            </div>
          )}

          {mainTab === "INVITATIONS" && (
            <button
              onClick={() => {
                setGeneratedInvite(null);
                setCreateError(null);
                setCreateForm({
                  recipient_name: "",
                  recipient_email: "",
                  company: "",
                  designation: "",
                  project_ref: "",
                  expires_in_days: 30,
                });
                setIsCreateModalOpen(true);
              }}
              className="px-4 py-2 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>+</span> Generate Invitation Link
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#0E1720]/15 pb-0">
        <button
          onClick={() => setMainTab("MODERATION")}
          className={`px-5 py-3 font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer border-b-2 -mb-[1px] ${
            mainTab === "MODERATION"
              ? "border-[#0E1720] text-[#0E1720] bg-white"
              : "border-transparent text-[#576371] hover:text-[#0E1720]"
          }`}
        >
          Moderation Queue ({testimonials.filter((t) => t.status === "PENDING").length} pending)
        </button>
        <button
          onClick={() => setMainTab("INVITATIONS")}
          className={`px-5 py-3 font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer border-b-2 -mb-[1px] ${
            mainTab === "INVITATIONS"
              ? "border-[#0E1720] text-[#0E1720] bg-white"
              : "border-transparent text-[#576371] hover:text-[#0E1720]"
          }`}
        >
          Client Invitations ({invitations.filter((i) => getInvitationEffectiveStatus(i) === "ACTIVE").length} active)
        </button>
      </div>

      {/* Trust Notice */}
      <div className="p-4 bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm font-sans text-xs text-[#576371] flex items-start gap-2.5">
        <div className="text-[#8C6D1F] font-mono text-sm leading-none pt-0.5">§</div>
        <div>
          <strong className="text-[#0E1720] font-mono text-[11px] uppercase tracking-wide">Human Trust & Provenance Policy: </strong>
          Every testimonial must be authentic, traceable to a real verified engagement, and backed by explicit client publication consent. Website consent does not imply social media consent.
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MODERATION QUEUE                                                   */}
      {/* ========================================================================= */}
      {mainTab === "MODERATION" && (
        <div className="space-y-6">
          {/* Filter Subtabs */}
          <div className="flex items-center gap-2 pb-2 overflow-x-auto">
            {(["ALL", "PENDING", "APPROVED", "REJECTED"] as const).map((filter) => {
              const count = testimonials.filter((t) => (filter === "ALL" ? true : t.status === filter)).length;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-sm ${
                    activeFilter === filter
                      ? "bg-[#0E1720] text-[#FAF7F2] font-semibold"
                      : "bg-white text-[#576371] hover:text-[#0E1720] border border-[#0E1720]/15"
                  }`}
                >
                  {filter} ({count})
                </button>
              );
            })}
          </div>

          {/* Testimonials List */}
          {loading ? (
            <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
              Loading testimonials...
            </div>
          ) : filteredTestimonials.length === 0 ? (
            <div className="p-12 text-center bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm font-sans text-xs text-[#576371]">
              No testimonials found under {activeFilter.toLowerCase()} status.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="p-6 sm:p-8 bg-white border border-[#0E1720]/15 rounded-sm shadow-[0_1px_3px_rgba(14,23,32,0.02)] flex flex-col justify-between"
                >
                  <div>
                    {/* Header row: Status badges & reference */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#0E1720]/10">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold text-[#8C6D1F]">
                          {t.reference_id || "REF: LEGACY"}
                        </span>
                        <span
                          className={`font-mono text-[9px] px-2 py-0.5 uppercase font-semibold rounded-sm ${
                            t.status === "APPROVED"
                              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                              : t.status === "REJECTED"
                              ? "bg-red-50 text-red-800 border border-red-200"
                              : "bg-amber-50 text-amber-800 border border-amber-200"
                          }`}
                        >
                          STATUS: {t.status}
                        </span>
                        <span
                          className={`font-mono text-[9px] px-2 py-0.5 uppercase rounded-sm ${
                            t.published ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {t.published ? "● PUBLIC ON SITE" : "○ UNPUBLISHED"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[10px] text-[#576371]">
                        <span className={t.consent_website ? "text-emerald-700 font-medium" : "text-red-600 font-medium"}>
                          WEBSITE: {t.consent_website ? "YES" : "NO"}
                        </span>
                        <span>•</span>
                        <span className={t.consent_social ? "text-emerald-700 font-medium" : "text-[#576371]"}>
                          SOCIAL: {t.consent_social ? "YES" : "NO"}
                        </span>
                      </div>
                    </div>

                    {/* Quote Content */}
                    <blockquote className="font-editorial text-xl sm:text-2xl text-[#0E1720] italic leading-snug mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Recommendation note */}
                    {t.recommendation && (
                      <p className="font-sans text-xs text-[#576371] italic mb-4 bg-[#FAF7F2] p-3 border-l-2 border-[#D4A72C] rounded-sm">
                        Recommendation: &ldquo;{t.recommendation}&rdquo;
                      </p>
                    )}

                    {/* Author Credentials */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div>
                        <div className="font-sans text-sm font-semibold text-[#0E1720]">{t.client_name}</div>
                        <div className="font-sans text-xs text-[#576371]">
                          {t.designation}, <span className="text-[#0E1720] font-medium">{t.company}</span>
                        </div>
                      </div>

                      {t.project && (
                        <div className="font-mono text-xs text-[#8C6D1F] bg-[#FAF7F2] px-3 py-1 border border-[#0E1720]/10 rounded-sm">
                          PROJECT: {t.project}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Toolbar */}
                  <div className="pt-6 mt-6 border-t border-[#0E1720]/10 flex flex-wrap items-center justify-between gap-4">
                    {/* Status transitions */}
                    <div className="flex items-center gap-2">
                      {t.status === "PENDING" && (
                        <>
                          <button
                            onClick={() => handleUpdateStatus(t.id, "APPROVED", t.consent_website === 1)}
                            className="px-3.5 py-1.5 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-mono text-xs font-semibold uppercase transition-colors cursor-pointer rounded-sm"
                          >
                            Approve & Publish
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(t.id, "REJECTED", false)}
                            className="px-3.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-800 border border-red-200 font-mono text-xs uppercase transition-colors cursor-pointer rounded-sm"
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {t.status === "APPROVED" && (
                        <button
                          onClick={() => togglePublish(t.id, t.published)}
                          className="px-3.5 py-1.5 bg-[#FAF7F2] hover:bg-[#0E1720] text-[#0E1720] hover:text-[#FAF7F2] border border-[#0E1720]/15 font-mono text-xs uppercase transition-colors cursor-pointer rounded-sm"
                        >
                          {t.published ? "Unpublish from Site" : "Publish to Site"}
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(t.id)}
                        className="px-3 py-1.5 text-xs font-mono text-[#576371] hover:text-red-700 uppercase cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>

                    {/* Social media tools */}
                    {t.status === "APPROVED" && (
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => copyToClipboard(`"${t.quote}" — ${t.client_name}, ${t.company}`, "Website Quote")}
                          className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#ECE6DA] text-[#0E1720] border border-[#0E1720]/15 font-mono text-[10px] uppercase transition-colors cursor-pointer rounded-sm"
                        >
                          Copy Quote
                        </button>

                        {t.consent_social === 1 ? (
                          <>
                            <button
                              onClick={() => copyToClipboard(generateLinkedInCaption(t), "LinkedIn Caption")}
                              className="px-3 py-1.5 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/30 font-mono text-[10px] uppercase transition-colors cursor-pointer rounded-sm"
                            >
                              LinkedIn Caption
                            </button>
                            <button
                              onClick={() => copyToClipboard(generateInstagramCaption(t), "Instagram Caption")}
                              className="px-3 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 font-mono text-[10px] uppercase transition-colors cursor-pointer rounded-sm"
                            >
                              Instagram Caption
                            </button>
                            <button
                              onClick={() => setSocialModalData({ testimonial: t, format: "LINKEDIN" })}
                              className="px-3 py-1.5 bg-[#D4A72C]/20 hover:bg-[#D4A72C]/35 text-[#8C6D1F] border border-[#D4A72C]/40 font-mono text-[10px] uppercase font-semibold transition-colors cursor-pointer rounded-sm"
                            >
                              Preview Card
                            </button>
                          </>
                        ) : (
                          <span className="font-mono text-[10px] text-[#576371] uppercase px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-sm">
                            No Social Consent
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: CLIENT FEEDBACK INVITATIONS                                        */}
      {/* ========================================================================= */}
      {mainTab === "INVITATIONS" && (
        <div className="space-y-6">
          {/* Overview Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-[#0E1720]/15 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#576371]">Total Created</div>
              <div className="font-editorial text-2xl font-semibold text-[#0E1720] mt-1">{invitations.length}</div>
            </div>
            <div className="p-4 bg-white border border-emerald-200 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-800">Active Links</div>
              <div className="font-editorial text-2xl font-semibold text-emerald-800 mt-1">
                {invitations.filter((i) => getInvitationEffectiveStatus(i) === "ACTIVE").length}
              </div>
            </div>
            <div className="p-4 bg-white border border-[#8C6D1F]/30 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#8C6D1F]">Submitted / Used</div>
              <div className="font-editorial text-2xl font-semibold text-[#8C6D1F] mt-1">
                {invitations.filter((i) => i.status === "USED").length}
              </div>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#576371]">Revoked / Expired</div>
              <div className="font-editorial text-2xl font-semibold text-[#576371] mt-1">
                {invitations.filter((i) => ["REVOKED", "EXPIRED"].includes(getInvitationEffectiveStatus(i))).length}
              </div>
            </div>
          </div>

          {/* Invitations Table */}
          {invitationsLoading ? (
            <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
              Loading invitations...
            </div>
          ) : invitations.length === 0 ? (
            <div className="p-12 text-center bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm font-sans text-xs text-[#576371] space-y-3">
              <p>No feedback invitation links have been created yet.</p>
              <button
                onClick={() => {
                  setGeneratedInvite(null);
                  setCreateError(null);
                  setIsCreateModalOpen(true);
                }}
                className="px-4 py-2 bg-[#0E1720] text-[#FAF7F2] font-mono text-xs uppercase tracking-wider rounded-sm cursor-pointer"
              >
                + Generate First Client Invitation
              </button>
            </div>
          ) : (
            <div className="bg-white border border-[#0E1720]/15 rounded-sm overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs divide-y divide-[#0E1720]/10">
                  <thead className="bg-[#FAF7F2] font-mono text-[10px] uppercase tracking-wider text-[#576371]">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold">Recipient</th>
                      <th className="py-3.5 px-4 font-semibold">Company / Role</th>
                      <th className="py-3.5 px-4 font-semibold">Project Ref</th>
                      <th className="py-3.5 px-4 font-semibold">Status</th>
                      <th className="py-3.5 px-4 font-semibold">Created</th>
                      <th className="py-3.5 px-4 font-semibold">Expires</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0E1720]/5">
                    {invitations.map((inv) => {
                      const effectiveStatus = getInvitationEffectiveStatus(inv);
                      return (
                        <tr key={inv.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-[#0E1720]">{inv.recipient_name}</div>
                            <div className="font-mono text-[11px] text-[#576371]">{inv.recipient_email}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="text-[#0E1720] font-medium">{inv.company}</div>
                            {inv.designation && (
                              <div className="text-[#576371] text-[11px]">{inv.designation}</div>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            {inv.project_ref ? (
                              <span className="font-mono text-[11px] text-[#8C6D1F] bg-[#FAF7F2] px-2 py-0.5 border border-[#0E1720]/10 rounded-sm">
                                {inv.project_ref}
                              </span>
                            ) : (
                              <span className="text-[#576371] italic text-[11px]">General Engagement</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`font-mono text-[9px] px-2 py-0.5 uppercase font-semibold rounded-sm inline-block ${
                                effectiveStatus === "ACTIVE"
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  : effectiveStatus === "USED"
                                  ? "bg-[#D4A72C]/20 text-[#8C6D1F] border border-[#D4A72C]/30"
                                  : effectiveStatus === "EXPIRED"
                                  ? "bg-amber-50 text-amber-800 border border-amber-200"
                                  : "bg-red-50 text-red-800 border border-red-200"
                              }`}
                            >
                              {effectiveStatus}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[#576371] font-mono text-[11px]">
                            <div>{new Date(inv.created_at).toLocaleDateString()}</div>
                            <div className="text-[9px] text-[#576371]/70">{inv.created_by}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[#576371] font-mono text-[11px]">
                            {new Date(inv.expires_at).toLocaleDateString()}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            {effectiveStatus === "ACTIVE" ? (
                              <button
                                onClick={() => handleRevokeInvitation(inv.id)}
                                disabled={revokingId === inv.id}
                                className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-mono text-[10px] uppercase rounded-sm cursor-pointer transition-colors disabled:opacity-50"
                              >
                                {revokingId === inv.id ? "Revoking..." : "Revoke"}
                              </button>
                            ) : effectiveStatus === "USED" ? (
                              <span className="font-mono text-[10px] text-emerald-700">Submitted</span>
                            ) : (
                              <span className="font-mono text-[10px] text-[#576371]/70">Inactive</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: CREATE FEEDBACK INVITATION                                         */}
      {/* ========================================================================= */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0E1720]/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FAF7F2] border border-[#0E1720]/15 max-w-xl w-full p-6 sm:p-8 space-y-6 my-8 rounded-sm shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#0E1720]/10">
              <div>
                <span className="font-mono text-[10px] text-[#8C6D1F] uppercase font-bold tracking-widest block">
                  SECURITY // PRIVATE TOKEN LINK
                </span>
                <h3 className="font-editorial text-2xl text-[#0E1720] font-semibold">
                  Generate Client Invitation Link
                </h3>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-[#576371] hover:text-[#0E1720] font-sans text-lg cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            {generatedInvite ? (
              /* Success State: Show Generated One-Time Link */
              <div className="space-y-6">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm">
                  <div className="font-mono text-xs uppercase font-semibold text-emerald-800 mb-1">
                    Invitation Generated Successfully
                  </div>
                  <p className="font-sans text-xs text-emerald-700">
                    The single-use token was created and an invitation email has been dispatched to the client. You may also copy the private link below for direct messaging.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[11px] text-[#0E1720] uppercase font-semibold block">
                    Private One-Time Invitation URL
                  </label>
                  <div className="p-3 bg-white border border-[#0E1720]/20 rounded-sm font-mono text-xs text-[#0E1720] break-all select-all">
                    {generatedInvite.inviteUrl}
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF7F2] border-l-2 border-[#8C6D1F] text-[#576371] font-sans text-xs">
                  <strong className="text-[#0E1720]">Important Security Note: </strong>
                  This cryptographic token is stored exclusively as a SHA-256 hash. The raw link will not be visible again once this dialog is closed.
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => copyToClipboard(generatedInvite.inviteUrl, "Invitation Link")}
                    className="px-4 py-2 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-mono text-xs uppercase tracking-wider font-semibold rounded-sm cursor-pointer transition-colors"
                  >
                    Copy Link to Clipboard
                  </button>
                  <button
                    onClick={() => {
                      setIsCreateModalOpen(false);
                      setGeneratedInvite(null);
                    }}
                    className="px-4 py-2 bg-white border border-[#0E1720]/15 text-[#576371] hover:text-[#0E1720] font-mono text-xs uppercase rounded-sm cursor-pointer transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleCreateInvitation} className="space-y-4">
                {createError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 font-sans text-xs rounded-sm">
                    {createError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-[#576371] uppercase tracking-wider block">
                      Client Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={createForm.recipient_name}
                      onChange={(e) => setCreateForm({ ...createForm, recipient_name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2 bg-white border border-[#0E1720]/20 rounded-sm font-sans text-xs text-[#0E1720] focus:outline-hidden focus:border-[#0E1720]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-[#576371] uppercase tracking-wider block">
                      Client Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={createForm.recipient_email}
                      onChange={(e) => setCreateForm({ ...createForm, recipient_email: e.target.value })}
                      placeholder="john@enterprise.com"
                      className="w-full px-3 py-2 bg-white border border-[#0E1720]/20 rounded-sm font-sans text-xs text-[#0E1720] focus:outline-hidden focus:border-[#0E1720]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-[#576371] uppercase tracking-wider block">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={createForm.company}
                      onChange={(e) => setCreateForm({ ...createForm, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-3 py-2 bg-white border border-[#0E1720]/20 rounded-sm font-sans text-xs text-[#0E1720] focus:outline-hidden focus:border-[#0E1720]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-[#576371] uppercase tracking-wider block">
                      Designation / Role (Optional)
                    </label>
                    <input
                      type="text"
                      value={createForm.designation}
                      onChange={(e) => setCreateForm({ ...createForm, designation: e.target.value })}
                      placeholder="e.g. CTO, Head of Architecture"
                      className="w-full px-3 py-2 bg-white border border-[#0E1720]/20 rounded-sm font-sans text-xs text-[#0E1720] focus:outline-hidden focus:border-[#0E1720]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-[#576371] uppercase tracking-wider block">
                    Delivered Project / Scope Ref (Optional)
                  </label>
                  <input
                    type="text"
                    value={createForm.project_ref}
                    onChange={(e) => setCreateForm({ ...createForm, project_ref: e.target.value })}
                    placeholder="e.g. Core Engine Migration & Distributed Infrastructure"
                    className="w-full px-3 py-2 bg-white border border-[#0E1720]/20 rounded-sm font-sans text-xs text-[#0E1720] focus:outline-hidden focus:border-[#0E1720]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-[#576371] uppercase tracking-wider block">
                    Invitation Expiry Period
                  </label>
                  <select
                    value={createForm.expires_in_days}
                    onChange={(e) => setCreateForm({ ...createForm, expires_in_days: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-white border border-[#0E1720]/20 rounded-sm font-sans text-xs text-[#0E1720] focus:outline-hidden focus:border-[#0E1720]"
                  >
                    <option value={7}>7 Days</option>
                    <option value={14}>14 Days</option>
                    <option value={30}>30 Days (Default Recommended)</option>
                    <option value={60}>60 Days</option>
                    <option value={90}>90 Days (Maximum)</option>
                  </select>
                </div>

                <div className="p-3 bg-white border border-[#0E1720]/10 rounded-sm text-[#576371] font-sans text-[11px] leading-relaxed">
                  The client will receive an official branded invitation email and can authenticate without passwords to submit verified review credentials and publication consent.
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#0E1720]/10">
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2 bg-white border border-[#0E1720]/15 text-[#576371] hover:text-[#0E1720] font-mono text-xs uppercase rounded-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={createSubmitting}
                    className="px-5 py-2 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-mono text-xs uppercase tracking-wider font-semibold rounded-sm cursor-pointer transition-colors disabled:opacity-50"
                  >
                    {createSubmitting ? "Generating Link..." : "Generate & Dispatch"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: SOCIAL CARD PREVIEW                                                */}
      {/* ========================================================================= */}
      {socialModalData && (
        <div className="fixed inset-0 z-50 bg-[#0E1720]/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FAF7F2] border border-[#0E1720]/15 max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8 rounded-sm shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#0E1720]/10">
              <span className="font-mono text-xs text-[#8C6D1F] uppercase font-bold">
                {socialModalData.format === "INSTAGRAM"
                  ? "Instagram Social Asset (1080 × 1350 Portrait)"
                  : "LinkedIn Social Asset (1200 × 627 Landscape)"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSocialModalData((prev) =>
                      prev ? { ...prev, format: prev.format === "INSTAGRAM" ? "LINKEDIN" : "INSTAGRAM" } : null
                    )
                  }
                  className="font-mono text-[10px] text-[#576371] hover:text-[#0E1720] uppercase px-2.5 py-1 bg-white border border-[#0E1720]/15 rounded-sm cursor-pointer"
                >
                  Switch to {socialModalData.format === "INSTAGRAM" ? "LinkedIn (1200×627)" : "Instagram (1080×1350)"}
                </button>
                <button
                  onClick={() => setSocialModalData(null)}
                  className="text-[#576371] hover:text-[#0E1720] font-sans text-sm cursor-pointer ml-2 p-1"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Branded Deterministic Social Card Render */}
            {socialModalData.format === "INSTAGRAM" ? (
              <div className="p-8 sm:p-10 bg-[#0E1720] text-[#F4EFE6] border border-[#D4A72C]/40 rounded-sm relative overflow-hidden aspect-[4/5] max-w-[400px] mx-auto flex flex-col justify-between select-text shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <BrandLogo size="sm" />
                  <span className="font-mono text-[9px] text-[#D4A72C] tracking-widest uppercase px-2 py-0.5 border border-[#D4A72C]/30 bg-[#D4A72C]/10 rounded-sm">
                    CLIENT PERSPECTIVE
                  </span>
                </div>

                <div className="my-auto py-6">
                  <div className="font-editorial text-4xl text-[#D4A72C] leading-none mb-2 select-none">&ldquo;</div>
                  <blockquote className="font-editorial text-xl sm:text-2xl text-[#FAF7F2] leading-relaxed italic">
                    {socialModalData.testimonial.quote}
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <div className="font-sans text-sm font-semibold text-[#FAF7F2]">
                      {socialModalData.testimonial.client_name}
                    </div>
                    <div className="font-sans text-xs text-[#A7A9A8] mt-0.5">
                      {socialModalData.testimonial.designation}, <span className="text-[#FAF7F2]">{socialModalData.testimonial.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[9px] text-[#A7A9A8] uppercase">
                    <span className="text-[#D4A72C] font-semibold">BUILT BY NEXARYA</span>
                    <span>{socialModalData.testimonial.project || "BEYOND BUILD"}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 sm:p-10 bg-[#0E1720] text-[#F4EFE6] border border-[#D4A72C]/40 rounded-sm relative overflow-hidden aspect-[1.91/1] w-full flex flex-col justify-between select-text shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <BrandLogo size="sm" />
                  <span className="font-mono text-[9px] text-[#D4A72C] tracking-widest uppercase px-2.5 py-0.5 border border-[#D4A72C]/30 bg-[#D4A72C]/10 rounded-sm">
                    VERIFIED CLIENT PERSPECTIVE
                  </span>
                </div>

                <blockquote className="font-editorial text-lg sm:text-xl text-[#FAF7F2] leading-relaxed italic my-auto py-2">
                  &ldquo;{socialModalData.testimonial.quote}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#FAF7F2]">
                      {socialModalData.testimonial.client_name}
                    </div>
                    <div className="font-sans text-[11px] text-[#A7A9A8]">
                      {socialModalData.testimonial.designation}, {socialModalData.testimonial.company}
                    </div>
                  </div>

                  <div className="font-mono text-[10px] text-[#A7A9A8] uppercase text-right">
                    <div className="text-[#D4A72C] font-semibold">BUILT BY NEXARYA</div>
                    <div>{socialModalData.testimonial.project || "BEYOND BUILD"}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="font-mono text-[10px] text-[#576371]">
                {socialModalData.format === "INSTAGRAM" ? "Aspect: 1080×1350 (Portrait)" : "Aspect: 1200×627 (Landscape)"}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const caption =
                      socialModalData.format === "INSTAGRAM"
                        ? generateInstagramCaption(socialModalData.testimonial)
                        : generateLinkedInCaption(socialModalData.testimonial);
                    copyToClipboard(caption, `${socialModalData.format} Caption`);
                  }}
                  className="px-4 py-2 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-sans text-xs uppercase font-semibold rounded-sm cursor-pointer transition-colors"
                >
                  Copy {socialModalData.format === "INSTAGRAM" ? "Instagram" : "LinkedIn"} Caption
                </button>
                <button
                  onClick={() => setSocialModalData(null)}
                  className="px-3.5 py-2 bg-white border border-[#0E1720]/15 text-[#576371] hover:text-[#0E1720] font-sans text-xs rounded-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
