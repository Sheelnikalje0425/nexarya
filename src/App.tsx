import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

// Public Pages (Simplified Startup IT Studio Architecture)
import HomePage from "@/pages/HomePage";
import SolutionsListPage from "@/pages/solutions/SolutionsListPage";
import CustomSoftwarePage from "@/pages/solutions/CustomSoftwarePage";
import SolutionDetailPage from "@/pages/solutions/SolutionDetailPage";
import WorkListPage from "@/pages/work/WorkListPage";
import CaseStudyDetailPage from "@/pages/work/CaseStudyDetailPage";
import ProcessPage from "@/pages/process/ProcessPage";
import AboutPage from "@/pages/about/AboutPage";
import InsightsListPage from "@/pages/insights/InsightsListPage";
import InsightDetailPage from "@/pages/insights/InsightDetailPage";
import ContactInquiryPage from "@/pages/contact/ContactInquiryPage";
import InvitedFeedbackPage from "@/pages/feedback/InvitedFeedbackPage";
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
    <div className="min-h-screen bg-[#F8F5EE] text-[#17202B] font-sans antialiased overflow-x-hidden selection:bg-[#C59A3D]/25 selection:text-[#08101B]">
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
        {/* ======================================================== */}
        {/* 1. PRIMARY PUBLIC STUDIO ROUTES                          */}
        {/* ======================================================== */}
        <Route element={<PublicLayout />}>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Work / Portfolio Index & Verified Case Studies */}
          <Route path="/work" element={<WorkListPage />} />
          <Route path="/work/stemfusion" element={<CaseStudyDetailPage />} />
          <Route path="/work/railway-concession-management" element={<CaseStudyDetailPage />} />
          <Route path="/work/railway-concession-management-system" element={<Navigate to="/work/railway-concession-management" replace />} />
          <Route path="/work/railway" element={<Navigate to="/work/railway-concession-management" replace />} />
          <Route path="/work/:slug" element={<CaseStudyDetailPage />} />

          {/* Solutions & Dedicated Solution Specifications */}
          <Route path="/solutions" element={<SolutionsListPage />} />
          <Route path="/solutions/custom-software" element={<CustomSoftwarePage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

          {/* Methodology / Process */}
          <Route path="/process" element={<ProcessPage />} />

          {/* About / Studio & People */}
          <Route path="/about" element={<AboutPage />} />

          {/* Technical Insights & Articles */}
          <Route path="/insights" element={<InsightsListPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />

          {/* Primary Conversion / Inquiry Route */}
          <Route path="/contact" element={<ContactInquiryPage />} />

          {/* SEO & Route Merges / Redirects to Prevent Dead Links */}
          <Route path="/capabilities" element={<Navigate to="/solutions" replace />} />
          <Route path="/capabilities/*" element={<Navigate to="/solutions" replace />} />
          <Route path="/pricing" element={<Navigate to="/contact" replace />} />
          <Route path="/feedback" element={<Navigate to="/about#feedback" replace />} />
          <Route path="/feedback/invite/:token" element={<InvitedFeedbackPage />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/request-quote" element={<Navigate to="/contact" replace />} />
          <Route path="/book-a-call" element={<Navigate to="/contact" replace />} />
          <Route path="/get-started" element={<Navigate to="/contact" replace />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* ======================================================== */}
        {/* 2. ISOLATED ADMIN DASHBOARD ROUTES                       */}
        {/* ======================================================== */}
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
