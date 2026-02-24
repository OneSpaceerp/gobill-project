import { Routes, Route } from "react-router-dom";
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
import { HeroSection } from "./screens/HomePage/sections/HeroSection";
import { FooterSection } from "./screens/HomePage/sections/FooterSection";

import { ChatbotWidget } from "./components/ChatbotWidget";

/* ──────────────────────────────────
   Layout wrapper — shared header + footer
   ────────────────────────────────── */
const Layout = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            background: "#fff",
            overflowX: "hidden",
            width: "100%",
            minHeight: "100vh",
            position: "relative",
        }}
    >
        <HeroSection />
        {children}
        <FooterSection />
        <ChatbotWidget />
    </div>
);

/* ──────────────────────────────────
   App with Routes
   ────────────────────────────────── */
export const App = (): JSX.Element => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="/solutions/:slug" element={<SolutionPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/why-gobill" element={<WhyGoBillPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/data-reporting-analytics" element={<DataReportingAnalyticsPage />} />
                <Route path="/ai-optimization" element={<AIPoweredOptimizationPage />} />
                <Route path="/contact-us" element={<ContactPage />} />

                {/* Cloned Pages */}
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
                <Route path="/assessment" element={<AssessmentPage />} />
                <Route path="/book-a-meeting" element={<AssessmentPage />} />
            </Routes>
        </Layout>
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
