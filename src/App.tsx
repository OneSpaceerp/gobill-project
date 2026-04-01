import { Routes, Route, useLocation } from "react-router-dom";
import { SolutionPage } from "./screens/SolutionPage/SolutionPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";
import { WhyGoBillPage } from "./screens/WhyGoBillPage/WhyGoBillPage";
import { BlogsPage } from "./screens/BlogsPage/BlogsPage";
import { DataReportingAnalyticsPage } from "./screens/DataReportingAnalyticsPage/DataReportingAnalyticsPage";
import { AIPoweredOptimizationPage } from "./screens/AIPoweredOptimizationPage/AIPoweredOptimizationPage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { FaqsPage } from "./screens/FaqsPage/FaqsPage";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage/PrivacyPolicyPage";
import { TermsConditionsPage } from "./screens/TermsConditionsPage/TermsConditionsPage";
import { AssessmentPage } from "./screens/AssessmentPage/AssessmentPage";
import { BlogArticlePage } from "./screens/BlogArticlePage/BlogArticlePage";
import { SiteMapPage } from "./screens/SiteMapPage/SiteMapPage";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { HeroSection } from "./screens/HomePage/sections/HeroSection";
import { FooterSection } from "./screens/HomePage/sections/FooterSection";

import { ChatbotWidget } from "./components/ChatbotWidget";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { AdminLogin } from "./screens/AdminPage/AdminLogin";
import { AdminLayout } from "./screens/AdminPage/AdminLayout";

/* ──────────────────────────────────
   Layout wrapper — shared header + footer
   ────────────────────────────────── */
const Layout = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            background: "#fff",
            width: "100%",
            minHeight: "100vh",
            position: "relative",
        }}
    >
        <HeroSection />
        <div style={{ paddingTop: '72px' }}>
            {children}
        </div>
        <FooterSection />
        <ChatbotWidget />
    </div>
);

/* ──────────────────────────────────
   Admin Route Guard
   ────────────────────────────────── */
const AdminRoute = () => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#0B0552" }}>
                <p style={{ color: "#fff", fontSize: 16, fontFamily: "Inter, sans-serif" }}>Loading…</p>
            </div>
        );
    }
    return user ? <AdminLayout /> : <AdminLogin />;
};

/* ──────────────────────────────────
   App with Routes
   ────────────────────────────────── */
const AppRoutes = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin");

    if (isAdmin) {
        return (
            <Routes>
                <Route path="/admin/*" element={<AdminRoute />} />
            </Routes>
        );
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="/solutions/:slug" element={<SolutionPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/why-gobill" element={<WhyGoBillPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:slug" element={<BlogArticlePage />} />
                <Route path="/data-reporting-analytics" element={<DataReportingAnalyticsPage />} />
                <Route path="/ai-optimization" element={<AIPoweredOptimizationPage />} />
                <Route path="/contact-us" element={<ContactPage />} />

                {/* Cloned Pages */}
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
                <Route path="/assessment" element={<AssessmentPage />} />
                <Route path="/sitemap" element={<SiteMapPage />} />
                <Route path="/book-a-meeting" element={<AssessmentPage />} />
                <Route path="/billing-to-brilliance" element={<LandingPage />} />
            </Routes>
        </Layout>
    );
};

export const App = (): JSX.Element => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};

/* ──────────────────────────────────
   Home page content (without header/footer,
   since Layout provides those)
   ────────────────────────────────── */
import { ServicesOverviewSection } from "./screens/HomePage/sections/ServicesOverviewSection";
import { BlogSection } from "./screens/HomePage/sections/BlogSection";
import { MainContentSection } from "./screens/HomePage/sections/MainContentSection";

const HomeContent = () => (
    <>
        <ServicesOverviewSection />
        <BlogSection />
        <MainContentSection />
    </>
);
