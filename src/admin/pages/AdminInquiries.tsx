import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<any | null>(null);
  const [statusInput, setStatusInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [saving, setSaving] = useState(false);

  const loadInquiries = () => {
    setLoading(true);
    api.admin.getInquiries()
      .then((data) => {
        setInquiries(data.inquiries || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load inquiries:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleOpenDetail = (inq: any) => {
    setSelectedInquiry(inq);
    setStatusInput(inq.status);
    setNotesInput(inq.internal_notes || "");
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInquiry) return;
    setSaving(true);

    try {
      await api.admin.updateInquiryStatus(selectedInquiry.id, statusInput, notesInput);
      setSelectedInquiry(null);
      loadInquiries();
    } catch (err) {
      console.error("Status update failed:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#0E1720]/10 pb-6">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
          PIPELINE // INBOUND LEADS
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
          Project Inquiries Management
        </h1>
        <p className="font-sans text-sm text-[#576371] mt-1.5">
          Review inbound technical project scopes, client specifications, and manage internal follow-up statuses.
        </p>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading inquiries pipeline...
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(14,23,32,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#0E1720]/10 bg-white/60 font-mono text-[10px] text-[#576371] uppercase tracking-wider">
                  <th className="p-4">Reference</th>
                  <th className="p-4">Client / Organization</th>
                  <th className="p-4">Project Type</th>
                  <th className="p-4">Budget Range</th>
                  <th className="p-4">Timeline</th>
                  <th className="p-4">Pipeline Status</th>
                  <th className="p-4">Received Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E1720]/5 bg-white">
                {inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-[#6F7475] font-sans">
                      No project inquiries recorded yet.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                      <td className="p-4 font-mono text-xs font-semibold text-[#8C6D1F] whitespace-nowrap">
                        {inq.reference_id}
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[#0E1720]">{inq.name}</div>
                        <div className="text-[11px] text-[#576371]">{inq.company} • {inq.email}</div>
                      </td>
                      <td className="p-4 text-[#0E1720] font-medium">{inq.project_type}</td>
                      <td className="p-4 font-mono text-[#0E1720]">{inq.budget}</td>
                      <td className="p-4 text-[#576371]">{inq.timeline}</td>
                      <td className="p-4">
                        <span className={`font-mono text-[9px] px-2 py-0.5 uppercase font-semibold rounded-sm whitespace-nowrap ${
                          inq.status === "NEW"
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : inq.status === "IN_REVIEW"
                            ? "bg-amber-50 text-amber-800 border border-amber-200"
                            : inq.status === "CONTACTED"
                            ? "bg-blue-50 text-blue-800 border border-blue-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}>
                          {inq.status}
                        </span>
                      </td>
                      <td className="p-4 text-[#576371] font-mono text-[11px] whitespace-nowrap">
                        {new Date(inq.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleOpenDetail(inq)}
                          className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#0E1720] text-[#0E1720] hover:text-[#FAF7F2] border border-[#0E1720]/15 font-mono text-[10px] uppercase font-medium transition-colors cursor-pointer rounded-sm"
                        >
                          Manage Scope
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Scope Management Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-[#0E1720]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] border border-[#0E1720]/15 max-w-2xl w-full p-6 sm:p-8 shadow-xl rounded-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#0E1720]/10 mb-6">
              <div>
                <span className="font-mono text-xs font-semibold text-[#8C6D1F]">{selectedInquiry.reference_id}</span>
                <h2 className="font-editorial text-2xl text-[#0E1720] font-semibold mt-1">
                  {selectedInquiry.name} ({selectedInquiry.company})
                </h2>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-[#576371] hover:text-[#0E1720] text-lg cursor-pointer p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 mb-6 text-xs font-sans">
              <div className="grid grid-cols-2 gap-4 p-4 bg-white border border-[#0E1720]/10 rounded-sm">
                <div><span className="text-[#576371]">Email:</span> <span className="text-[#0E1720] font-medium">{selectedInquiry.email}</span></div>
                <div><span className="text-[#576371]">Phone:</span> <span className="text-[#0E1720] font-medium">{selectedInquiry.phone || "Not provided"}</span></div>
                <div><span className="text-[#576371]">Project Type:</span> <span className="text-[#0E1720] font-medium">{selectedInquiry.project_type}</span></div>
                <div><span className="text-[#576371]">Budget:</span> <span className="text-[#8C6D1F] font-mono font-semibold">{selectedInquiry.budget}</span></div>
              </div>

              <div>
                <div className="font-mono text-[10px] text-[#576371] uppercase mb-1.5">Project Scope & Technical Description</div>
                <div className="p-4 bg-white border border-[#0E1720]/10 text-[#0E1720] leading-relaxed rounded-sm">
                  {selectedInquiry.description}
                </div>
              </div>

              <form onSubmit={handleUpdateStatus} className="space-y-4 pt-4 border-t border-[#0E1720]/10">
                <div>
                  <label className="block font-mono text-[10px] text-[#576371] uppercase mb-1.5">
                    Update Pipeline Status
                  </label>
                  <select
                    value={statusInput}
                    onChange={(e) => setStatusInput(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] rounded-sm focus:outline-none focus:border-[#D4A72C]"
                  >
                    <option value="NEW">NEW</option>
                    <option value="IN_REVIEW">IN_REVIEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#576371] uppercase mb-1.5">
                    Internal Engineering Scoping Notes
                  </label>
                  <textarea
                    rows={3}
                    value={notesInput}
                    onChange={(e) => setNotesInput(e.target.value)}
                    placeholder="Add internal scoping comments, assigned architect, or meeting dates..."
                    className="w-full p-3 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] rounded-sm focus:outline-none focus:border-[#D4A72C]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInquiry(null)}
                    className="px-4 py-2 border border-[#0E1720]/15 text-xs font-sans text-[#576371] hover:text-[#0E1720] rounded-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] text-xs font-sans font-semibold uppercase tracking-wider rounded-sm cursor-pointer disabled:opacity-50"
                  >
                    {saving ? "Saving Changes..." : "Save Scope Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
