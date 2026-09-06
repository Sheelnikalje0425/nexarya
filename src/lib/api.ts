// NEXARYA API Client

const API_BASE = "/api/v1";

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem("nxn_auth_token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "An unexpected error occurred");
  }

  return data;
}

// Public API methods
export const api = {
  getServices: () => fetchApi<{ services: any[] }>("/services"),
  getServiceBySlug: (slug: string) => fetchApi<{ service: any }>(`/services/${slug}`),
  getCaseStudies: () => fetchApi<{ caseStudies: any[] }>("/case-studies"),
  getCaseStudyBySlug: (slug: string) => fetchApi<{ caseStudy: any }>(`/case-studies/${slug}`),
  getPricingPlans: () => fetchApi<{ plans: any[] }>("/pricing"),
  getPricing: () => fetchApi<{ plans: any[] }>("/pricing"),
  getArticles: () => fetchApi<{ articles: any[] }>("/articles"),
  getArticleBySlug: (slug: string) => fetchApi<{ article: any }>(`/articles/${slug}`),
  getTestimonials: () => fetchApi<{ testimonials: any[] }>("/testimonials"),
  submitInquiry: (payload: {
    name: string;
    company: string;
    email: string;
    phone?: string;
    projectType: string;
    budget: string;
    timeline: string;
    description: string;
    hp_field?: string;
  }) =>
    fetchApi<{ success: boolean; referenceId: string; message: string }>("/inquiries", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  submitFeedback: (payload: {
    name: string;
    company: string;
    role?: string;
    project?: string;
    rating: number;
    quote: string;
    recommendation?: string;
    photo?: string;
    consent_website: number;
    consent_social: number;
    hp_field?: string;
  }) =>
    fetchApi<{ success: boolean; referenceId: string; message: string }>("/feedback", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  createPayment: (payload: {
    amount: number;
    currency: string;
    clientEmail: string;
    clientName: string;
    projectRef?: string;
  }) =>
    fetchApi<{ success: boolean; transactionId: string; referenceId: string; checkoutUrl: string }>("/payments/create", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  // Admin API methods
  admin: {
    getOverview: () => fetchApi<any>("/admin/overview"),
    getInquiries: () => fetchApi<{ inquiries: any[] }>("/admin/inquiries"),
    updateInquiryStatus: (id: string, status: string, internalNotes?: string) =>
      fetchApi<any>(`/admin/inquiries/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status, internalNotes }),
      }),
    getCaseStudies: () => fetchApi<{ caseStudies: any[] }>("/admin/case-studies"),
    createCaseStudy: (data: any) => fetchApi<any>("/admin/case-studies", { method: "POST", body: JSON.stringify(data) }),
    getTestimonials: () => fetchApi<{ testimonials: any[] }>("/admin/testimonials"),
    createTestimonial: (data: any) => fetchApi<any>("/admin/testimonials", { method: "POST", body: JSON.stringify(data) }),
    updateTestimonial: (id: string, data: any) => fetchApi<any>(`/admin/testimonials/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
    deleteTestimonial: (id: string) => fetchApi<any>(`/admin/testimonials/${id}`, { method: "DELETE" }),
    getArticles: () => fetchApi<{ articles: any[] }>("/admin/articles"),
    createArticle: (data: any) => fetchApi<any>("/admin/articles", { method: "POST", body: JSON.stringify(data) }),
    getPayments: () => fetchApi<{ payments: any[] }>("/admin/payments"),
    getUsers: () => fetchApi<{ users: any[] }>("/admin/users"),
    getAuditLogs: () => fetchApi<{ logs: any[] }>("/admin/audit-logs"),
    getNotifications: () => fetchApi<{ notifications: any[] }>("/admin/notifications"),
    markNotificationsRead: () => fetchApi<any>("/admin/notifications/mark-read", { method: "POST" }),
    getSettings: () => fetchApi<{ settings: any[] }>("/admin/settings"),
    updateSetting: (key: string, value: string) => fetchApi<any>("/admin/settings", { method: "PATCH", body: JSON.stringify({ key, value }) }),
  },
};
