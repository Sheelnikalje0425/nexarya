import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

// Public Pages
import HomePage from "@/pages/HomePage";
import SolutionsListPage from "@/pages/solutions/SolutionsListPage";
import SolutionDetailPage from "@/pages/solutions/SolutionDetailPage";
import WorkListPage from "@/pages/work/WorkListPage";
import CaseStudyDetailPage from "@/pages/work/CaseStudyDetailPage";
import ProcessPage from "@/pages/process/ProcessPage";
import AboutPage from "@/pages/about/AboutPage";
import InsightsListPage from "@/pages/insights/InsightsListPage";
import InsightDetailPage from "@/pages/insights/InsightDetailPage";
import PricingPage from "@/pages/pricing/PricingPage";
import ContactInquiryPage from "@/pages/contact/ContactInquiryPage";
import ClientFeedbackPage from "@/pages/feedback/ClientFeedbackPage";
import PrivacyPage from "@/pages/legal/PrivacyPage";
import TermsPage from "@/pages/legal/TermsPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Admin Dashboard
import AdminLayout from "@/admin/AdminLayout";
import AdminLoginPage from "@/admin/pages/AdminLoginPage";
import AdminOverview from "@/admin/pages/AdminOverview";
import AdminInquiries from "@/admin/pages/AdminInquiries";
import AdminCaseStudies from "@/admin/pages/AdminCaseStudies";
import AdminServices from "@/admin/pages/AdminServices";
import AdminPricing from "@/admin/pages/AdminPricing";
import AdminTestimonials from "@/admin/pages/AdminTestimonials";
import AdminInsights from "@/admin/pages/AdminInsights";
import AdminPayments from "@/admin/pages/AdminPayments";
import AdminUsers from "@/admin/pages/AdminUsers";
import AdminAuditLogs from "@/admin/pages/AdminAuditLogs";
import AdminSettings from "@/admin/pages/AdminSettings";

// Public Shell Layout
function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#0E1720] font-sans antialiased overflow-x-hidden selection:bg-[#D4A72C]/20 selection:text-[#0E1720]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsListPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/work" element={<WorkListPage />} />
          <Route path="/work/stemfusion" element={<CaseStudyDetailPage />} />
          <Route path="/work/railway" element={<CaseStudyDetailPage />} />
          <Route path="/work/railway-concession-management-system" element={<CaseStudyDetailPage />} />
          <Route path="/work/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsListPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactInquiryPage />} />
          <Route path="/feedback" element={<ClientFeedbackPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Isolated Admin Dashboard Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/overview" replace />} />
          <Route path="overview" element={<AdminOverview />} />
          <Route path="inquiries" element={<AdminInquiries />} />
          <Route path="case-studies" element={<AdminCaseStudies />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="pricing" element={<AdminPricing />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="insights" element={<AdminInsights />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="audit-logs" element={<AdminAuditLogs />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
