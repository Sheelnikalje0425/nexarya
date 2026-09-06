import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";

export default function AdminInsights() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Nexarya Engineering Team",
    category: "Architecture",
    status: "PUBLISHED",
  });

  const loadArticles = () => {
    setLoading(true);
    api.admin.getArticles()
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load articles:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.admin.createArticle({
        ...formData,
        tags: [formData.category, "Engineering", "System Design"],
        seo_title: `${formData.title} | NEXARYA Insights`,
        seo_description: formData.excerpt,
      });
      setShowModal(false);
      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "Nexarya Engineering Team",
        category: "Architecture",
        status: "PUBLISHED",
      });
      loadArticles();
    } catch (err) {
      console.error("Failed to create article:", err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0E1720]/10 pb-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C6D1F] uppercase font-medium mb-1.5">
            PUBLICATIONS // EDITORIAL CMS
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl text-[#0E1720] font-semibold">
            Publications & Engineering Notes
          </h1>
          <p className="font-sans text-sm text-[#576371] mt-1.5">
            Technical essays, architectural perspectives, and system design insights published by the team.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2.5 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] font-sans text-xs font-semibold uppercase tracking-wider cursor-pointer rounded-sm transition-colors shrink-0"
        >
          + Draft New Article
        </button>
      </div>

      {loading ? (
        <div className="py-12 text-center font-mono text-xs text-[#576371] tracking-wider">
          Loading publications...
        </div>
      ) : (
        <div className="bg-[#FAF7F2] border border-[#0E1720]/15 rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(14,23,32,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[#0E1720]/10 bg-white/60 font-mono text-[10px] text-[#576371] uppercase tracking-wider">
                  <th className="p-4">Article Title & Route</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Author</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Published Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E1720]/5 bg-white">
                {articles.map((art) => (
                  <tr key={art.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                    <td className="p-4">
                      <div className="font-medium text-[#0E1720]">{art.title}</div>
                      <div className="font-mono text-[11px] text-[#576371]">/insights/{art.slug}</div>
                    </td>
                    <td className="p-4 font-mono text-xs text-[#8C6D1F] font-semibold uppercase">{art.category}</td>
                    <td className="p-4 text-[#576371]">{art.author}</td>
                    <td className="p-4">
                      <span className="font-mono text-[9px] px-2 py-0.5 uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-sm font-semibold">
                        {art.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#576371] font-mono text-[11px]">
                      {art.published_at ? new Date(art.published_at).toLocaleDateString() : "DRAFT"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#0E1720]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] border border-[#0E1720]/15 max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl">
            <h2 className="font-editorial text-2xl text-[#0E1720] font-semibold mb-4">Create Technical Article</h2>
            <form onSubmit={handleCreate} className="space-y-4 font-sans text-xs">
              <div>
                <label className="block text-[#576371] font-mono text-[10px] uppercase mb-1.5">Article Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-") })}
                  className="w-full p-2.5 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] rounded-sm focus:outline-none focus:border-[#D4A72C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#576371] font-mono text-[10px] uppercase mb-1.5">Slug Identifier</label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] rounded-sm focus:outline-none focus:border-[#D4A72C]"
                  />
                </div>
                <div>
                  <label className="block text-[#576371] font-mono text-[10px] uppercase mb-1.5">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] rounded-sm focus:outline-none focus:border-[#D4A72C]"
                  >
                    <option value="Architecture">Architecture</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Database">Database</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#576371] font-mono text-[10px] uppercase mb-1.5">Excerpt / Summary *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] rounded-sm focus:outline-none focus:border-[#D4A72C]"
                />
              </div>

              <div>
                <label className="block text-[#576371] font-mono text-[10px] uppercase mb-1.5">Article Content (Markdown supported) *</label>
                <textarea
                  rows={8}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full p-2.5 bg-white border border-[#0E1720]/15 text-xs text-[#0E1720] font-mono rounded-sm focus:outline-none focus:border-[#D4A72C]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#0E1720]/10">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-[#0E1720]/15 text-xs font-sans text-[#576371] hover:text-[#0E1720] rounded-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0E1720] hover:bg-[#1A232C] text-[#FAF7F2] text-xs font-sans font-semibold uppercase tracking-wider rounded-sm cursor-pointer"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
