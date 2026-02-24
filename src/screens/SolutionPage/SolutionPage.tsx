import { useParams, Link } from "react-router-dom";
import { solutionPages } from "../../data/solutionData";
import { BillingHealthQuiz } from "./BillingHealthQuiz";

export const SolutionPage = (): JSX.Element => {
    const { slug } = useParams<{ slug: string }>();
    const data = solutionPages.find((p) => p.slug === slug);

    if (!data) {
        return (
            <main style={{ padding: "120px 24px 80px", textAlign: "center" }}>
                <h1 style={{ fontFamily: "var(--font-family)", fontSize: 36, color: "var(--text-dark)" }}>
                    Page Not Found
                </h1>
                <Link to="/" style={{ color: "var(--primary)", fontFamily: "var(--font-family)", fontSize: 18 }}>
                    ← Back to Home
                </Link>
            </main>
        );
    }

    return (
        <main>
            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0655 0%, #10217D 50%, #665FFD 100%)",
                    padding: "100px 0 80px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: -80,
                        right: -80,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "rgba(102,95,253,0.15)",
                        filter: "blur(60px)",
                    }}
                />
                <div className="container">
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 500,
                            fontSize: 16,
                            color: "rgba(255,255,255,0.7)",
                            marginBottom: 12,
                            letterSpacing: 1,
                            textTransform: "uppercase",
                        }}
                    >
                        Solutions
                    </p>
                    <h1
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 600,
                            fontSize: "clamp(32px, 4vw, 52px)",
                            color: "#fff",
                            lineHeight: 1.15,
                            marginBottom: 20,
                            maxWidth: 700,
                        }}
                    >
                        {data.title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 400,
                            fontSize: "clamp(16px, 1.2vw, 20px)",
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.6,
                            maxWidth: 640,
                            marginBottom: 32,
                        }}
                    >
                        {data.tagline}
                    </p>
                    <Link
                        to="/assessment"
                        className="btn-primary"
                        style={{
                            background: "#fff",
                            color: "var(--primary)",
                            padding: "16px 36px",
                            fontSize: 17,
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Description */}
            <section style={{ padding: "72px 0 48px" }}>
                <div className="container">
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 400,
                            fontSize: "clamp(16px, 1.2vw, 19px)",
                            color: "var(--text-body)",
                            lineHeight: 1.8,
                            maxWidth: 860,
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        {data.description}
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: "32px 0 72px" }}>
                <div className="container">
                    <h2
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 600,
                            fontSize: "clamp(24px, 2.5vw, 36px)",
                            color: "var(--text-dark)",
                            textAlign: "center",
                            marginBottom: 48,
                        }}
                    >
                        What's Included
                    </h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: 28,
                            maxWidth: 1100,
                            margin: "0 auto",
                        }}
                    >
                        {data.features.map((feat, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#fff",
                                    borderRadius: 16,
                                    padding: "32px 28px",
                                    boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(102,95,253,0.12)";
                                    e.currentTarget.style.borderColor = "rgba(102,95,253,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 24px rgba(0,0,0,0.06)";
                                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
                                }}
                            >
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 12,
                                        background: "linear-gradient(135deg, #665FFD, #10217D)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 20,
                                        fontSize: 22,
                                        color: "#fff",
                                        fontWeight: 700,
                                    }}
                                >
                                    {idx + 1}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-family)",
                                        fontWeight: 600,
                                        fontSize: 18,
                                        color: "var(--text-dark)",
                                        marginBottom: 10,
                                    }}
                                >
                                    {feat.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "var(--font-family)",
                                        fontWeight: 400,
                                        fontSize: 15,
                                        color: "var(--text-body)",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {feat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA or Quiz */}
            {data.slug === "medical-billing-and-coding" ? (
                <BillingHealthQuiz />
            ) : (
                <section
                    style={{
                        padding: "72px 0",
                        background: "linear-gradient(135deg, #665FFD 0%, #10217D 100%)",
                        textAlign: "center",
                    }}
                >
                    <div className="container">
                        <h2
                            style={{
                                fontFamily: "var(--font-family)",
                                fontWeight: 600,
                                fontSize: "clamp(24px, 3vw, 40px)",
                                color: "#fff",
                                marginBottom: 16,
                            }}
                        >
                            {data.ctaTitle}
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-family)",
                                fontWeight: 400,
                                fontSize: 18,
                                color: "rgba(255,255,255,0.85)",
                                lineHeight: 1.6,
                                marginBottom: 36,
                                maxWidth: 600,
                                margin: "0 auto 36px",
                            }}
                        >
                            {data.ctaText}
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <Link
                                to="/assessment"
                                style={{
                                    display: "inline-block",
                                    background: "#fff",
                                    color: "var(--primary)",
                                    padding: "16px 36px",
                                    borderRadius: 30,
                                    fontSize: 17,
                                    fontWeight: 600,
                                    fontFamily: "var(--font-family)",
                                    textDecoration: "none",
                                    transition: "all 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.3)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Start Free Assessment
                            </Link>
                            <Link
                                to="/contact-us"
                                style={{
                                    display: "inline-block",
                                    background: "transparent",
                                    color: "#fff",
                                    padding: "16px 36px",
                                    borderRadius: 30,
                                    fontSize: 17,
                                    fontWeight: 500,
                                    fontFamily: "var(--font-family)",
                                    textDecoration: "none",
                                    border: "2px solid rgba(255,255,255,0.4)",
                                    transition: "all 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#fff";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};
