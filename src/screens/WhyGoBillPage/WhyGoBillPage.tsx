import { Link } from "react-router-dom";

export const WhyGoBillPage = (): JSX.Element => {
    const reasons = [
        { title: "Proven Results", desc: "Our clients see an average 25% increase in revenue within the first 6 months." },
        { title: "Certified Experts", desc: "AAPC and AHIMA certified billers and coders with specialty-specific expertise." },
        { title: "360° Integration", desc: "Seamless integration with all major EHR/EMR systems and clearinghouses." },
        { title: "HIPAA Compliant", desc: "Enterprise-grade security and full HIPAA compliance in every process." },
        { title: "Transparent Reporting", desc: "Real-time dashboards and monthly reports so you always know where you stand." },
        { title: "Dedicated Support", desc: "A single point of contact dedicated to your practice, available when you need them." },
    ];

    const sections = [
        {
            title: "Technology-Driven Solutions",
            desc: "We combine AI-powered automation with human expertise to deliver faster claim processing, smarter denial prevention, and deeper analytics. Our technology stack integrates with all major EHR/EMR platforms.",
            reverse: false,
        },
        {
            title: "Better Collections, Less Stress",
            desc: "Our streamlined processes reduce your administrative burden while increasing your collections. From charge capture to payment posting, we handle the entire revenue cycle so your team can focus on patient care.",
            reverse: true,
        },
        {
            title: "Scalable for Any Practice Size",
            desc: "Whether you're a solo practitioner or a multi-location healthcare system, GoBill's solutions scale with your needs. Our flexible engagement models ensure you get exactly the support you need.",
            reverse: false,
        },
    ];

    return (
        <main>
            {/* Hero */}
            <section style={{ background: "linear-gradient(135deg, #0a0655 0%, #10217D 60%, #665FFD 100%)", padding: "100px 0 80px" }}>
                <div className="container">
                    <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
                        Why Choose GoBill?
                    </h1>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: 640, marginBottom: 32 }}>
                        GoBill helps providers improve their practice revenue by 25% with 360-integrated and HIPAA-compliant electronic billing services.
                    </p>
                    <Link to="/assessment" style={{ display: "inline-block", background: "#fff", color: "var(--primary)", padding: "16px 36px", borderRadius: 30, fontSize: 17, fontWeight: 600, fontFamily: "var(--font-family)", textDecoration: "none" }}>
                        Start Your Free Assessment
                    </Link>
                </div>
            </section>

            {/* Alternating Sections */}
            {sections.map((sec, i) => (
                <section key={i} style={{ padding: "72px 0", background: i % 2 === 0 ? "#f9f9ff" : "#fff" }}>
                    <div className="container" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 48, flexDirection: sec.reverse ? "row-reverse" : "row" }}>
                        <div style={{ flex: "1 1 400px" }}>
                            <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--text-dark)", marginBottom: 20 }}>
                                {sec.title}
                            </h2>
                            <p style={{ fontFamily: "var(--font-family)", fontSize: 17, color: "var(--text-body)", lineHeight: 1.8 }}>
                                {sec.desc}
                            </p>
                        </div>
                        <div style={{ flex: "1 1 350px", display: "flex", justifyContent: "center" }}>
                            <div style={{
                                width: 320, height: 220, borderRadius: 20,
                                background: `linear-gradient(135deg, ${i === 0 ? "#665FFD" : i === 1 ? "#10217D" : "#0a0655"}, ${i === 0 ? "#10217D" : i === 1 ? "#665FFD" : "#10217D"})`,
                                display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-family)", fontSize: 64, fontWeight: 700, opacity: 0.8,
                            }}>
                                {["⚡", "📊", "🚀"][i]}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Reasons Grid */}
            <section style={{ padding: "72px 0", background: "#f9f9ff" }}>
                <div className="container">
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-dark)", textAlign: "center", marginBottom: 48 }}>
                        6 Reasons to Partner With GoBill
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
                        {reasons.map((r, i) => (
                            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", transition: "all 0.3s", cursor: "default", border: "1px solid transparent" }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(102,95,253,0.2)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "transparent"; }}
                            >
                                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #665FFD, #10217D)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#fff", fontWeight: 700, fontSize: 18 }}>✓</div>
                                <h4 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 18, color: "var(--text-dark)", marginBottom: 8 }}>{r.title}</h4>
                                <p style={{ fontFamily: "var(--font-family)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #665FFD, #10217D)" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, textAlign: "center" }}>
                    {[
                        { num: "25%+", label: "Revenue Increase" },
                        { num: "98%", label: "First-Pass Rate" },
                        { num: "30%", label: "Reduction in AR Days" },
                        { num: "24/7", label: "Dedicated Support" },
                    ].map((s, i) => (
                        <div key={i}>
                            <div style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", color: "#fff" }}>{s.num}</div>
                            <div style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "72px 0", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)", color: "var(--text-dark)", marginBottom: 16 }}>Ready to See the Difference?</h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>Schedule your complimentary assessment and discover your revenue potential.</p>
                    <Link to="/assessment" className="btn-primary" style={{ padding: "16px 40px", fontSize: 17, textDecoration: "none" }}>
                        Start Your Free Assessment
                    </Link>
                </div>
            </section>
        </main>
    );
};
