import { Link } from "react-router-dom";

export const AIPoweredOptimizationPage = (): JSX.Element => {
    return (
        <main style={{ background: "#fff", overflowX: "hidden" }}>
            {/* HERO SECTION */}
            <section
                style={{
                    background: "linear-gradient(135deg, #10217D 0%, #0a0655 50%, #000 100%)",
                    padding: "100px 24px 80px",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center"
                }}
            >
                {/* Abstract Glowing Nodes Background */}
                <div style={{
                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    width: "80%", height: "80%", background: "radial-gradient(circle, rgba(102,95,253,0.2) 0%, rgba(0,0,0,0) 70%)", zIndex: 0
                }} />

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 500,
                            fontSize: 16,
                            color: "var(--primary)",
                            marginBottom: 16,
                            letterSpacing: 2,
                            textTransform: "uppercase",
                        }}
                    >
                        AI-Powered Optimization
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
                        Billing to Brilliance: Powered by AI.
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
                        The future of revenue cycle management isn’t just human—it’s augmented by artificial intelligence. Experience 99% accuracy and lighting-fast turnarounds.
                    </p>
                    <Link
                        to="/assessment"
                        className="btn-primary"
                        style={{
                            background: "var(--primary)",
                            color: "#fff",
                            padding: "18px 40px",
                            fontSize: 18,
                            fontWeight: 600,
                            textDecoration: "none",
                            borderRadius: 30,
                            boxShadow: "0 8px 32px rgba(102,95,253,0.4)"
                        }}
                    >
                        Schedule an AI Demo
                    </Link>
                </div>

                {/* Abstract AI Visual */}
                <div style={{ marginTop: 60, display: "flex", justifyContent: "center" }}>
                    <div style={{
                        width: 120, height: 120, borderRadius: "50%", background: "rgba(102,95,253,0.1)",
                        border: "2px solid rgba(102,95,253,0.5)", display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 0 40px rgba(102,95,253,0.6), inset 0 0 20px rgba(102,95,253,0.4)",
                        animation: "pulse-glow 3s ease-in-out infinite"
                    }}>
                        <img src="https://c.animaapp.com/WhTQfAgd/img/layer-8@2x.png" alt="AI Node" style={{ width: 60, height: 60, filter: "brightness(0) invert(1)" }} />
                    </div>
                </div>
            </section>

            {/* SECTION 1: How GoBill Uses AI */}
            <section style={{ padding: "100px 24px", background: "#fff" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(30px, 4vw, 40px)", color: "var(--navy)", marginBottom: 20 }}>
                            How GoBill Uses AI
                        </h2>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", maxWidth: 700, margin: "0 auto" }}>
                            Our proprietary workflow automation drastically reduces manual data entry and minimizes human error through a 4-step intelligent process.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 30 }}>
                        {[
                            {
                                step: "01",
                                title: "Data Ingestion",
                                desc: "Securely pulling and mapping massive amounts of EMR and PM data in real-time."
                            },
                            {
                                step: "02",
                                title: "AI Scrubbing",
                                desc: "Machine learning algorithms check for 10M+ coding rules in seconds."
                            },
                            {
                                step: "03",
                                title: "Risk Flagging",
                                desc: "Highlights potential denials before submission, allowing for preemptive corrections."
                            },
                            {
                                step: "04",
                                title: "Continuous Learning",
                                desc: "The system adapts to new payer rules automatically, getting smarter with every claim."
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{ position: "relative", padding: "30px", background: "#f8f9fc", borderRadius: 16, border: "1px solid #e2e8f0" }}>
                                <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(102,95,253,0.1)", marginBottom: 16, fontFamily: "var(--font-family)" }}>{item.step}</div>
                                <h3 style={{ fontFamily: "var(--font-family)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>{item.title}</h3>
                                <p style={{ fontFamily: "var(--font-family)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: The Human + AI Advantage */}
            <section style={{ padding: "100px 24px", background: "#f8f9fc" }}>
                <div className="container" style={{ maxWidth: 1000, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
                    <div style={{ position: "relative" }}>
                        <div style={{ width: "100%", paddingTop: "100%", background: "linear-gradient(135deg, #665FFD 0%, #10217D 100%)", borderRadius: "30px 0 30px 0", opacity: 0.1, position: "absolute", top: 15, left: 15 }} />
                        <img src="/img/steps-bg.jpg" alt="Human and AI" style={{ width: "100%", borderRadius: "30px 0 30px 0", position: "relative", zIndex: 1, objectFit: "cover", aspectRatio: "1/1" }} />
                    </div>
                    <div>
                        <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 36px)", color: "var(--navy)", marginBottom: 24 }}>
                            The Human + AI Advantage
                        </h2>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", lineHeight: 1.7, marginBottom: 20 }}>
                            AI provides the unparalleled speed; our certified experts provide the essential nuance.
                        </p>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.7 }}>
                            While the algorithm catches 95% of routine errors, our seasoned billers review the most complex cases. We handle the strategic appeals, provider education, and sensitive payer negotiations that machines simply can't do. It's the perfect synergy of technology and human expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Impact Metrics (Grid) */}
            <section style={{ padding: "100px 24px", background: "#fff" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 36px)", color: "var(--navy)", marginBottom: 48, textAlign: "center" }}>
                        Measurable Impact Metrics
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
                        {[
                            { stat: "+25%", label: "Increase in First-Pass Acceptance" },
                            { stat: "40%", label: "Reduction in Time-to-Payment" },
                            { stat: "100%", label: "HIPAA-Compliant Data Processing" }
                        ].map((m, i) => (
                            <div key={i} style={{ background: "linear-gradient(135deg, #10217D 0%, #0a0655 100%)", padding: "40px 30px", borderRadius: 20, textAlign: "center", color: "#fff" }}>
                                <div style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: 800, fontFamily: "var(--font-family)", marginBottom: 12, color: "var(--primary)" }}>
                                    {m.stat}
                                </div>
                                <div style={{ fontSize: 18, fontWeight: 500, fontFamily: "var(--font-family)", opacity: 0.9 }}>
                                    {m.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #665FFD 0%, #10217D 100%)", textAlign: "center" }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#fff", marginBottom: 24 }}>
                        Future-Proof Your Practice Today
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 40 }}>
                        Experience the difference that AI-assisted medical billing can make for your bottom line.
                    </p>
                    <Link
                        to="/assessment"
                        style={{
                            display: "inline-block",
                            background: "#fff",
                            color: "var(--primary)",
                            padding: "18px 48px",
                            borderRadius: 30,
                            fontFamily: "var(--font-family)",
                            fontWeight: 600,
                            fontSize: 18,
                            textDecoration: "none",
                            boxShadow: "0 8px 32px rgba(255,255,255,0.2)",
                            transition: "all 0.3s",
                        }}
                    >
                        Schedule an AI Demo / Assessment
                    </Link>
                </div>
            </section>
        </main>
    );
};
