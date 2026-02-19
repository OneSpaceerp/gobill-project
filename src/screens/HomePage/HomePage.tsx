import { BlogSection } from "./sections/BlogSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";

export const HomePage = (): JSX.Element => {
  return (
    <div
      style={{
        background: "#fff",
        overflowX: "hidden",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* 1. Header / Navigation */}
      <HeroSection />

      {/* 2. Hero Section */}
      <ServicesOverviewSection />

      {/* 3. Services Overview (8 circles) */}
      <BlogSection />

      {/* 4-8. Trust Icons, Why GoBill, Partnership, Blogs, Assessment CTA, Testimonials */}
      <MainContentSection />

      {/* 9. Footer */}
      <FooterSection />
    </div>
  );
};
