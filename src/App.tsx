import { Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { SolutionPage } from "./screens/SolutionPage/SolutionPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";
import { WhyGoBillPage } from "./screens/WhyGoBillPage/WhyGoBillPage";
import { BlogsPage } from "./screens/BlogsPage/BlogsPage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { HeroSection } from "./screens/HomePage/sections/HeroSection";
import { FooterSection } from "./screens/HomePage/sections/FooterSection";

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
        }}
    >
        <HeroSection />
        {children}
        <FooterSection />
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
                <Route path="/contact-us" element={<ContactPage />} />
                {/* Placeholder routes for CTAs */}
                <Route path="/assessment" element={<ContactPage />} />
                <Route path="/book-a-meeting" element={<ContactPage />} />
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
