import { Link } from "react-router-dom";

export const WhyGoBillPage = (): JSX.Element => {
    const reasons = [
        { title: "Cost Saving", desc: "Hire your own outsourced US-Based team of medical billing and coding certified experts directly through GoBill without worrying about the costs of technology, talent acquisition and management, and office facility." },
        { title: "Quality Control", desc: "We provide a 99% accuracy rate of medical billing and practice management services with our high-end technology and certified medical billers and coders." },
        { title: "Real-Time Patient Services", desc: "We provide real-time patient eligibility verification, appointment scheduling, and patient engagement services to improve patient satisfaction and practice revenue." },
        { title: "Full Cycle RCM", desc: "We manage everything from patient registration, insurance verification, and coding to claim submission, denial management, and accounts receivable collections." },
        { title: "Increased Revenue", desc: "Our clients see an average of 25% increase in their net collections within the first few months of partnering with us." },
        { title: "Dedicated Account Manager", desc: "You will have a dedicated account manager to handle all your queries, provide regular updates, and ensure smooth operations of your practice." },
        { title: "Periodic Reports", desc: "You will consistently receive periodic reports monthly or quarterly detailing information that concerns you such as accounts receivables, payment adjustments, and billable services, amongst others." },
    ];

    const expenses = [
        "Billing staff salaries and benefits",
        "Staff training on industry and technology updates",
        "Facility expenses housing staff",
        "Administrative supplies and services",
        "Staff turnover or replacement",
        "Medical billing errors",
    ];

    return (
        <main>
            {/* Hero */}
            <section style={{ background: "linear-gradient(135deg, #0a0655 0%, #10217D 60%, #665FFD 100%)", padding: "100px 0 80px" }}>
                <div className="container">
                    <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
                        Why GoBill?
                    </h1>
                    <p style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(18px, 1.5vw, 24px)", color: "rgba(255,255,255,0.95)", lineHeight: 1.4, marginBottom: 16, maxWidth: 640 }}>
                        Collect 100% of Your Profit Faster at an Affordable Rate
                    </p>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: 640, marginBottom: 32 }}>
                        GoBill is a medical billing and practice management outsourcing company with 360 healthcare services. Our staff are exceptionally qualified Virtual Front-Desk Assistants and Revenue Cycle Management experts worth 10 years of certified experience and all the "know-how" of a medical practice's financial health.
                    </p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <Link to="/book-a-meeting" style={{ display: "inline-block", background: "#fff", color: "var(--primary)", padding: "16px 36px", borderRadius: 30, fontSize: 17, fontWeight: 600, fontFamily: "var(--font-family)", textDecoration: "none" }}>
                            Book A Meeting
                        </Link>
                        <Link to="/assessment" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "16px 36px", borderRadius: 30, fontSize: 17, fontWeight: 500, fontFamily: "var(--font-family)", textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                            Complimentary Assessment
                        </Link>
                    </div>
                </div>
            </section>

            {/* Accessible, Helpful, and Actionable */}
            <section style={{ padding: "72px 0", background: "#f9f9ff" }}>
                <div className="container" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-dark)", marginBottom: 24 }}>
                        Accessible, Helpful, and Actionable
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 17, color: "var(--text-body)", lineHeight: 1.8 }}>
                        Our integrated and customizable services extend from the first point of contact with the patient to getting you enrolled in insurance networks, managing accounts receivables between patients and payers, and getting you paid on time while keeping your data secure. We are always accessible and provide full support and assistance to our clients in transitioning to our services.
                    </p>
                </div>
            </section>

            {/* Reasons Grid */}
            <section style={{ padding: "72px 0" }}>
                <div className="container">
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-dark)", textAlign: "center", marginBottom: 48 }}>
                        Why Partner With GoBill?
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
                <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", color: "#fff", marginBottom: 8 }}>10%</div>
                            <p style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                                Providers commonly suffer a 10% decrease in practice revenue streams due to total collections going to operating costs and a lack of staff expertise in billing management.
                            </p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", color: "#fff", marginBottom: 8 }}>25%</div>
                            <p style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                                At GoBill we increase the rate of collections to operating costs and boost revenue by 25%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Annual Expenses */}
            <section style={{ padding: "72px 0", background: "#f9f9ff" }}>
                <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-dark)", textAlign: "center", marginBottom: 48 }}>
                        Annual Expenses We Manage For You
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
                        {expenses.map((exp, i) => (
                            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #665FFD, #10217D)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</div>
                                <span style={{ fontFamily: "var(--font-family)", fontSize: 15, color: "var(--text-dark)", fontWeight: 500 }}>{exp}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "72px 0", textAlign: "center" }}>
                <div className="container">
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)", color: "var(--text-dark)", marginBottom: 16 }}>Ready to See the Difference?</h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>Schedule your complimentary assessment and discover your revenue potential.</p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link to="/book-a-meeting" className="btn-primary" style={{ padding: "16px 40px", fontSize: 17, textDecoration: "none" }}>
                            Book A Meeting
                        </Link>
                        <Link to="/assessment" style={{ display: "inline-block", background: "transparent", color: "var(--primary)", padding: "16px 40px", borderRadius: 30, fontSize: 17, fontWeight: 500, fontFamily: "var(--font-family)", textDecoration: "none", border: "2px solid var(--primary)" }}>
                            Complimentary Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};
