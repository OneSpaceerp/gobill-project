import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const SiteMapPage = (): JSX.Element => {
    const sitemapData = [
        {
            category: "Main Pages",
            links: [
                { text: "Home", path: "/" },
                { text: "Why GoBill", path: "/why-gobill" },
                { text: "About Us", path: "/about-us" },
                { text: "Contact Us", path: "/contact-us" },
            ]
        },
        {
            category: "Expertise & Solutions",
            links: [
                { text: "Medical Billing Services", path: "/solutions/medical-billing-and-coding" },
                { text: "Revenue Cycle Management", path: "/solutions/revenue-cycle-management" },
                { text: "Provider Credentialing", path: "/solutions/provider-credentialing" },
                { text: "Virtual Patient Engagement Officer", path: "/solutions/virtual-front-desk-officer" },
                { text: "Data & Reporting Analytics", path: "/data-reporting-analytics" },
                { text: "AI-Powered Optimization", path: "/ai-optimization" },
            ]
        },
        {
            category: "Learn More",
            links: [
                { text: "Blogs", path: "/blogs" },
                { text: "FAQs", path: "/faqs" },
                { text: "Complimentary Assessment", path: "/assessment" },
            ]
        },
        {
            category: "Legal",
            links: [
                { text: "Privacy Policy", path: "/privacy-policy" },
                { text: "Terms and Conditions", path: "/terms-and-conditions" },
            ]
        }
    ];

    return (
        <main style={{ background: "#fff", overflowX: "hidden" }}>
            {/* HERO SECTION */}
            <section
                style={{
                    background: "linear-gradient(135deg, #3a2db8 0%, #635CFB 50%, #8a7fff 100%)",
                    padding: "100px 24px 80px",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center"
                }}
            >
                <div
                    style={{
                        position: "absolute", top: -80, right: -80, width: 300, height: 300,
                        borderRadius: "50%", background: "rgba(102,95,253,0.15)", filter: "blur(60px)",
                    }}
                />
                 <div
                    style={{
                        position: "absolute", bottom: -80, left: -80, width: 250, height: 250,
                        borderRadius: "50%", background: "rgba(102,95,253,0.15)", filter: "blur(60px)",
                    }}
                />
                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
                     <p style={{ fontFamily: "var(--font-family)", fontWeight: 500, fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 16, letterSpacing: 2, textTransform: "uppercase" }}>
                        Site Map
                    </p>
                    <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
                        GoBill Comprehensive Sitemap
                    </h1>
                     <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "clamp(16px, 1.5vw, 22px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>
                        Easily navigate and find exactly what you're looking for across our entire platform.
                    </p>
                </div>
            </section>

            {/* SITEMAP GRID */}
            <section style={{ padding: "80px 24px", background: "#f8f9fc", minHeight: "50vh" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, maxWidth: 1200, margin: "0 auto" }}>
                        {sitemapData.map((section, idx) => (
                            <div key={idx} style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.04)" }}>
                                <h2 style={{ fontFamily: "var(--font-family)", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 24, borderBottom: "2px solid rgba(102,95,253,0.1)", paddingBottom: 12 }}>
                                    {section.category}
                                </h2>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link 
                                                to={link.path}
                                                style={{ 
                                                    display: "flex", alignItems: "center", gap: 12, textDecoration: "none", 
                                                    color: "var(--text-body)", fontFamily: "var(--font-family)", fontSize: 17,
                                                    transition: "color 0.2s, transform 0.2s"
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.color = "var(--primary)";
                                                    e.currentTarget.style.transform = "translateX(5px)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.color = "var(--text-body)";
                                                    e.currentTarget.style.transform = "translateX(0)";
                                                }}
                                                onClick={() => window.scrollTo(0,0)}
                                            >
                                                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(102,95,253,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                                    <ChevronRight size={14} strokeWidth={3} />
                                                </div>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
