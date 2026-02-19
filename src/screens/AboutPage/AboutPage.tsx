import { Link } from "react-router-dom";

export const AboutPage = (): JSX.Element => {
    const values = [
        { title: "Client First", desc: "We prioritize our clients' needs and deliver tailored solutions that drive real results." },
        { title: "Integrity", desc: "Transparency and honesty are at the core of everything we do." },
        { title: "Innovation", desc: "We leverage cutting-edge technology and AI to stay ahead in medical billing." },
        { title: "Excellence", desc: "We hold ourselves to the highest standards of quality and performance." },
        { title: "Collaboration", desc: "We work as an extension of your team, ensuring seamless communication." },
        { title: "Compliance", desc: "HIPAA compliance and data security are non-negotiable in our operations." },
    ];

    return (
        <main>
            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0655 0%, #10217D 60%, #665FFD 100%)",
                    padding: "100px 0 80px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div className="container" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
                    <div style={{ flex: "1 1 500px" }}>
                        <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                            About GoBill
                        </h1>
                        <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: 600 }}>
                            GoBill is a leading provider of medical billing, revenue cycle management, and practice management solutions designed to help healthcare providers maximize their revenue and streamline their operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section style={{ padding: "72px 0", background: "#f9f9ff" }}>
                <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-dark)", marginBottom: 24, textAlign: "center" }}>
                        The GoBill Story
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 17, color: "var(--text-body)", lineHeight: 1.8, marginBottom: 20, textAlign: "center" }}>
                        Founded with a mission to transform healthcare revenue management, GoBill brings together certified billing professionals, advanced automation, and AI-powered analytics to deliver exceptional results for medical practices of all sizes.
                    </p>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 17, color: "var(--text-body)", lineHeight: 1.8, textAlign: "center" }}>
                        We understand the challenges that healthcare providers face — from complex payer requirements and shrinking reimbursements to staffing shortages and compliance demands. That's why we built GoBill: to be the trusted partner that handles your billing so you can focus on what matters most — your patients.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={{ padding: "72px 0" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 40, maxWidth: 1000, margin: "0 auto" }}>
                    <div style={{ background: "linear-gradient(135deg, #665FFD, #10217D)", borderRadius: 20, padding: "40px 36px", color: "#fff" }}>
                        <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 28, marginBottom: 16 }}>Vision</h3>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
                            To be the most trusted partner in healthcare revenue management, empowering providers to focus on patient care while we optimize their financial performance.
                        </p>
                    </div>
                    <div style={{ background: "linear-gradient(135deg, #10217D, #0a0655)", borderRadius: 20, padding: "40px 36px", color: "#fff" }}>
                        <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 28, marginBottom: 16 }}>Mission</h3>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
                            To deliver exceptional medical billing and revenue cycle management solutions through innovation, integrity, and a relentless commitment to our clients' success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section style={{ padding: "60px 0 80px", background: "#f9f9ff" }}>
                <div className="container">
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-dark)", textAlign: "center", marginBottom: 48 }}>
                        Our Core Values
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
                        {values.map((v, i) => (
                            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", transition: "all 0.3s", cursor: "default", border: "1px solid transparent" }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(102,95,253,0.2)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "transparent"; }}
                            >
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #665FFD, #10217D)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#fff", fontWeight: 700, fontSize: 18 }}>{i + 1}</div>
                                <h4 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 18, color: "var(--text-dark)", marginBottom: 8 }}>{v.title}</h4>
                                <p style={{ fontFamily: "var(--font-family)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "72px 0", background: "linear-gradient(135deg, #665FFD, #10217D)", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)", color: "#fff", marginBottom: 16 }}>Ready to Get Started?</h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>Let's discuss how GoBill can transform your practice's revenue cycle.</p>
                    <Link to="/contact-us" style={{ display: "inline-block", background: "#fff", color: "var(--primary)", padding: "16px 40px", borderRadius: 30, fontSize: 17, fontWeight: 600, fontFamily: "var(--font-family)", textDecoration: "none", transition: "all 0.3s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.3)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
};
