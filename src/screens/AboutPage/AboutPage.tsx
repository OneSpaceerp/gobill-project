import { Link } from "react-router-dom";

export const AboutPage = (): JSX.Element => {
    const values = [
        { title: "Integrity and Transparency", desc: "When it comes to upholding confidentiality and business ethics, we make no compromises. We're fully transparent with our clients and accept accountability for the results of our work." },
        { title: "Long-Term Partnership", desc: "We make a commitment to long-term strategies for our mutual growth and the development of our solutions to address your changing business needs and new challenges; your success is our success." },
        { title: "Commitment", desc: "We stay focused on the desired results until they are achieved and our clients are completely satisfied." },
        { title: "Regulatory Compliance", desc: "GoBill is committed to ensuring that its policies and procedures are in accordance with the industry's regulatory requirements in order to ensure the highest level of accuracy and hassle-free invoicing." },
        { title: "Innovation", desc: "We are pioneers who consider ingenious ways to influence the future. We keep up with the latest trends while focusing on solutions that will enable us to rise to the top." },
        { title: "People Oriented", desc: "We provide an atmosphere where each employee can find a role that's perfectly suited to their skills and where their potential can be maximized and leveraged." },
        { title: "Collaboration", desc: "We help each other as we pursue the same goals. We are more productive when we cooperate and share common goals and values." },
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
                        <p style={{ fontFamily: "var(--font-family)", fontWeight: 500, fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>
                            About Us
                        </p>
                        <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                            This Is GoBill
                        </h1>
                        <p style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(18px, 1.5vw, 24px)", color: "rgba(255,255,255,0.95)", lineHeight: 1.4, marginBottom: 16 }}>
                            We Have The Expertise To Achieve Excellence.
                        </p>
                        <p style={{ fontFamily: "var(--font-family)", fontWeight: 400, fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: 600 }}>
                            The dedicated staff at GoBill ensures you the highest possible reimbursement. We are a group of certified teams with extensive experience in medical billing, coding, claims processing, collections, and customized support hours according to business needs. Your success is our success.
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
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 17, color: "var(--text-body)", lineHeight: 1.8, textAlign: "center" }}>
                        In 2016, a group of skilled and certified doctors and accountants assisted by talented individuals in operations, sales, marketing, business development, and human resources combined with their expertise of over 15 years in the medical field. We initiated an ambitious project to help medical practices transform into better businesses and focus on delivering great patient care. With a clear vision, the group created a model to assist medical practices and organizations manage as well as generating more revenue from their businesses to boost the rate of successfully paid claims using cutting-edge technologies.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section style={{ padding: "72px 0" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 40, maxWidth: 1000, margin: "0 auto" }}>
                    <div style={{ background: "linear-gradient(135deg, #665FFD, #10217D)", borderRadius: 20, padding: "40px 36px", color: "#fff" }}>
                        <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 28, marginBottom: 16 }}>Vision</h3>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
                            We aim to shape the future of medical billing and BPO services in the United States, implementing the most effective and innovative business practices, revolutionizing revenue cycle management, and leading the way for fast-paced, secure, and trouble-free collection processes.
                        </p>
                    </div>
                    <div style={{ background: "linear-gradient(135deg, #10217D, #0a0655)", borderRadius: 20, padding: "40px 36px", color: "#fff" }}>
                        <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 28, marginBottom: 16 }}>Mission</h3>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
                            At GoBill we provide healthcare organizations with outstanding and fast-paced medical billing & operations solutions for the healthcare industry focused on clean claim submissions and ultra-speedy reimbursement while abiding by our core values of transparency, integrity, and accountability.
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
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)", color: "#fff", marginBottom: 16 }}>Ready to talk?</h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>Manage your practice all from one place.</p>
                    <Link to="/book-a-meeting" style={{ display: "inline-block", background: "#fff", color: "var(--primary)", padding: "16px 40px", borderRadius: 30, fontSize: 17, fontWeight: 600, fontFamily: "var(--font-family)", textDecoration: "none", transition: "all 0.3s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.3)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                        Schedule A Meeting
                    </Link>
                </div>
            </section>
        </main>
    );
};
