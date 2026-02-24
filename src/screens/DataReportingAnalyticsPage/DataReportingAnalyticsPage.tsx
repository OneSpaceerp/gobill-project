import { Link } from "react-router-dom";

export const DataReportingAnalyticsPage = (): JSX.Element => {
    return (
        <main style={{ background: "#fff", overflowX: "hidden" }}>
            {/* HERO SECTION */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0655 0%, #10217D 50%, #665FFD 100%)",
                    padding: "100px 24px 80px",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center"
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
                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 500,
                            fontSize: 16,
                            color: "rgba(255,255,255,0.7)",
                            marginBottom: 16,
                            letterSpacing: 2,
                            textTransform: "uppercase",
                        }}
                    >
                        Data & Reporting Analytics
                    </p>
                    <h1
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 700,
                            fontSize: "clamp(36px, 5vw, 56px)",
                            color: "#fff",
                            lineHeight: 1.15,
                            marginBottom: 24,
                        }}
                    >
                        Stop Guessing. Start Growing.
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 400,
                            fontSize: "clamp(16px, 1.5vw, 22px)",
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.6,
                            marginBottom: 40,
                            maxWidth: 700,
                            margin: "0 auto 40px"
                        }}
                    >
                        Turn complex billing data into clear, actionable insights. GoBill centralizes your financial data into one intuitive dashboard so you can see your practice’s health at a glance.
                    </p>
                    <Link
                        to="/assessment"
                        className="btn-primary"
                        style={{
                            background: "#fff",
                            color: "var(--primary)",
                            padding: "18px 40px",
                            fontSize: 18,
                            fontWeight: 600,
                            textDecoration: "none",
                            borderRadius: 30,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
                        }}
                    >
                        Request a Sample Report
                    </Link>
                </div>

                {/* Dashboard Mockup abstract shape */}
                <div style={{ marginTop: 60, display: "flex", justifyContent: "center" }}>
                    <div style={{
                        width: "100%",
                        maxWidth: 800,
                        height: 300,
                        background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
                        borderRadius: "20px 20px 0 0",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderBottom: "none",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "40px",
                        gap: 20
                    }}>
                        {/* Abstract bar chart */}
                        {[40, 60, 45, 80, 65, 90, 100].map((h, i) => (
                            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.8)", height: `${h}%`, borderRadius: "6px 6px 0 0", opacity: 0.8 + (i * 0.03) }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1: Overload vs Clarity */}
            <section style={{ padding: "100px 24px" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
                        <div>
                            <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: 32, color: "var(--navy)", marginBottom: 20 }}>
                                Data Overload vs. Absolute Clarity
                            </h2>
                            <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", lineHeight: 1.6, marginBottom: 24 }}>
                                <strong>The Problem:</strong> You have hundreds of spreadsheets, scattered reports, and endless rows of numbers, but no real answers.
                            </p>
                            <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", lineHeight: 1.6 }}>
                                <strong>The Solution:</strong> GoBill centralizes your financial data into one intuitive, easy-to-read dashboard. Instantly identify bottlenecks, track performance, and make growth-focused decisions.
                            </p>
                        </div>
                        <div style={{ background: "#F7F7FF", padding: 40, borderRadius: 24, border: "1px solid #E2E8F0" }}>
                            <img src="https://c.animaapp.com/WhTQfAgd/img/layer-8@2x.png" alt="Clarity" style={{ width: 64, height: 64, marginBottom: 24 }} />
                            <h3 style={{ fontFamily: "var(--font-family)", fontSize: 22, fontWeight: 600, color: "var(--primary-dark)", marginBottom: 16 }}>See Your Health at a Glance</h3>
                            <p style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.6 }}>
                                Skip the manual data entry. Our systems integrate directly with your PM and EHR platforms to pull necessary metrics in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: The GoBill Reporting Suite */}
            <section style={{ padding: "100px 24px", background: "#F8F9FC" }}>
                <div className="container" style={{ maxWidth: 1200 }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 40px)", color: "var(--navy)", marginBottom: 20 }}>
                            The GoBill Reporting Suite
                        </h2>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", maxWidth: 700, margin: "0 auto" }}>
                            A comprehensive overview of the metrics that actually matter to your bottom line.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30 }}>
                        {[
                            {
                                title: "A/R Aging Analysis",
                                desc: "Know exactly who owes you money and how old the debt is. We flag high-risk accounts instantly."
                            },
                            {
                                title: "Payer Performance Metrics",
                                desc: "See which insurances pay fastest and which deny the most, allowing you to optimize documentation."
                            },
                            {
                                title: "Provider Productivity",
                                desc: "Track revenue generated by each doctor in your practice. Identify your highest performers."
                            },
                            {
                                title: "Denial Trend Reports",
                                desc: "Pinpoint the exact reasons for claim rejections so you can stop them at the front desk."
                            }
                        ].map((card, idx) => (
                            <div key={idx} style={{ background: "#fff", padding: "40px 32px", borderRadius: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.02)", transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                                <div style={{ width: 48, height: 48, background: "rgba(102,95,253,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 20, fontWeight: 700, marginBottom: 24, fontFamily: "var(--font-family)" }}>
                                    0{idx + 1}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-family)", fontSize: 20, fontWeight: 600, color: "var(--navy)", marginBottom: 16 }}>{card.title}</h3>
                                <p style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.6 }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Monthly Strategy Meetings */}
            <section style={{ padding: "100px 24px" }}>
                <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
                    <div style={{ display: "inline-block", background: "rgba(102,95,253,0.1)", color: "var(--primary)", padding: "8px 16px", borderRadius: 20, fontSize: 14, fontWeight: 600, fontFamily: "var(--font-family)", marginBottom: 24, textTransform: "uppercase", letterSpacing: 1 }}>
                        Partnership Approach
                    </div>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 36px)", color: "var(--navy)", marginBottom: 32 }}>
                        Monthly Strategy Meetings
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "clamp(16px, 1.5vw, 20px)", color: "var(--text-body)", lineHeight: 1.8, marginBottom: 40 }}>
                        We don't just hand you a report and walk away. Every month, your dedicated Account Manager walks you through the data, explaining the "why" behind the numbers and proposing strategic improvements. Active collaboration guarantees continuous growth.
                    </p>
                    <img src="https://c.animaapp.com/WhTQfAgd/img/group-163179@2x.png" alt="Growth" style={{ width: 100, height: 100 }} />
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #10217D 0%, #0a0655 100%)", textAlign: "center" }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#fff", marginBottom: 24 }}>
                        Ready to See the Full Picture?
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 40 }}>
                        Unlock the insights your practice needs to scale profitably.
                    </p>
                    <Link
                        to="/assessment"
                        style={{
                            display: "inline-block",
                            background: "var(--primary)",
                            color: "#fff",
                            padding: "18px 48px",
                            borderRadius: 30,
                            fontFamily: "var(--font-family)",
                            fontWeight: 600,
                            fontSize: 18,
                            textDecoration: "none",
                            boxShadow: "0 8px 32px rgba(102,95,253,0.4)",
                            transition: "all 0.3s",
                        }}
                    >
                        Request a Sample Report
                    </Link>
                </div>
            </section>
        </main>
    );
};
