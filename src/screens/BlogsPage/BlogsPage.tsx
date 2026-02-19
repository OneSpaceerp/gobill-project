import { Link } from "react-router-dom";

export const BlogsPage = (): JSX.Element => {
    const blogs = [
        { title: "The Future of Medical Billing: AI and Automation", date: "January 15, 2025", category: "Technology", excerpt: "Discover how artificial intelligence is transforming revenue cycle management and what it means for your practice." },
        { title: "5 Common Reasons for Claim Denials (And How to Prevent Them)", date: "January 8, 2025", category: "Billing Tips", excerpt: "Learn about the most frequent causes of claim denials and practical strategies to improve your first-pass acceptance rate." },
        { title: "Understanding the 2025 CPT Code Changes", date: "December 28, 2024", category: "Coding Updates", excerpt: "A comprehensive overview of the latest CPT code changes and how they impact your billing operations." },
        { title: "How to Reduce Days in Accounts Receivable", date: "December 20, 2024", category: "Collections", excerpt: "Proven strategies to accelerate your collections and reduce the time between service delivery and payment." },
        { title: "HIPAA Compliance: A Complete Guide for Medical Practices", date: "December 12, 2024", category: "Compliance", excerpt: "Everything you need to know about maintaining HIPAA compliance in your billing and administrative processes." },
        { title: "The Benefits of Outsourcing Medical Billing", date: "December 5, 2024", category: "Practice Management", excerpt: "Why more practices are choosing to outsource their billing and the tangible benefits they're seeing." },
    ];

    const colors = ["#665FFD", "#10217D", "#0a0655", "#665FFD", "#10217D", "#0a0655"];

    return (
        <main>
            {/* Hero */}
            <section style={{ background: "linear-gradient(135deg, #0a0655 0%, #10217D 60%, #665FFD 100%)", padding: "100px 0 60px", textAlign: "center" }}>
                <div className="container">
                    <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", marginBottom: 16 }}>
                        GoBill Blog
                    </h1>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>
                        Insights, tips, and industry updates from the GoBill team
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section style={{ padding: "64px 0 80px" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28, maxWidth: 1100, margin: "0 auto" }}>
                        {blogs.map((blog, i) => (
                            <article
                                key={i}
                                style={{
                                    background: "#fff",
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
                                    transition: "all 0.3s",
                                    cursor: "pointer",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(102,95,253,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 24px rgba(0,0,0,0.06)";
                                }}
                            >
                                {/* Colored header bar */}
                                <div style={{ height: 6, background: `linear-gradient(90deg, ${colors[i]}, ${colors[(i + 1) % colors.length]})` }} />
                                <div style={{ padding: "24px 28px 28px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                                        <span style={{
                                            fontFamily: "var(--font-family)", fontSize: 12, fontWeight: 600, color: colors[i],
                                            background: `${colors[i]}10`, padding: "4px 12px", borderRadius: 20,
                                            textTransform: "uppercase", letterSpacing: 0.5,
                                        }}>
                                            {blog.category}
                                        </span>
                                        <span style={{ fontFamily: "var(--font-family)", fontSize: 13, color: "var(--text-body)" }}>{blog.date}</span>
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 18, color: "var(--text-dark)", lineHeight: 1.4, marginBottom: 12 }}>
                                        {blog.title}
                                    </h3>
                                    <p style={{ fontFamily: "var(--font-family)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>
                                        {blog.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
