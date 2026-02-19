import { useState } from "react";
import { Link } from "react-router-dom";

export const ContactPage = (): JSX.Element => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    const contactInfo = [
        { icon: "📞", label: "Phone", value: "+1 (888)-464-9750", href: "tel:+18884649750" },
        { icon: "✉️", label: "Email", value: "info@gobill.co", href: "mailto:info@gobill.co" },
        { icon: "📍", label: "Address", value: "GoBill Headquarters, United States", href: null },
    ];

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 18px",
        fontFamily: "var(--font-family)",
        fontSize: 15,
        border: "1.5px solid rgba(0,0,0,0.12)",
        borderRadius: 12,
        outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
        background: "#fff",
        boxSizing: "border-box",
    };

    return (
        <main>
            {/* Hero */}
            <section style={{ background: "linear-gradient(135deg, #0a0655 0%, #10217D 60%, #665FFD 100%)", padding: "100px 0 80px" }}>
                <div className="container" style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap: 48 }}>
                    {/* Left text */}
                    <div style={{ flex: "1 1 360px" }}>
                        <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                            Contact Us
                        </h1>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 40 }}>
                            Have a question or ready to get started? Reach out to our team and we'll get back to you within 24 hours.
                        </p>
                        {/* Contact info cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {contactInfo.map((c, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px 20px", backdropFilter: "blur(8px)" }}>
                                    <span style={{ fontSize: 24 }}>{c.icon}</span>
                                    <div>
                                        <div style={{ fontFamily: "var(--font-family)", fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>{c.label}</div>
                                        {c.href ? (
                                            <a href={c.href} style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "#fff", textDecoration: "none", fontWeight: 500 }}>{c.value}</a>
                                        ) : (
                                            <span style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "#fff", fontWeight: 500 }}>{c.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right form */}
                    <div style={{ flex: "1 1 440px", background: "#fff", borderRadius: 20, padding: "36px 32px", boxShadow: "0 16px 64px rgba(0,0,0,0.15)" }}>
                        <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 24, color: "var(--text-dark)", marginBottom: 24 }}>
                            Get In Touch
                        </h2>

                        {submitted && (
                            <div style={{ background: "#e8f5e9", border: "1px solid #4caf50", borderRadius: 10, padding: "14px 18px", marginBottom: 20, fontFamily: "var(--font-family)", fontSize: 15, color: "#2e7d32" }}>
                                ✅ Thank you! We'll get back to you shortly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div>
                                <label style={{ fontFamily: "var(--font-family)", fontSize: 14, fontWeight: 500, color: "var(--text-dark)", display: "block", marginBottom: 6 }}>Full Name *</label>
                                <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={inputStyle} placeholder="John Doe"
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102,95,253,0.1)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                                />
                            </div>
                            <div>
                                <label style={{ fontFamily: "var(--font-family)", fontSize: 14, fontWeight: 500, color: "var(--text-dark)", display: "block", marginBottom: 6 }}>Email Address *</label>
                                <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={inputStyle} placeholder="john@example.com"
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102,95,253,0.1)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                                />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div>
                                    <label style={{ fontFamily: "var(--font-family)", fontSize: 14, fontWeight: 500, color: "var(--text-dark)", display: "block", marginBottom: 6 }}>Phone</label>
                                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={inputStyle} placeholder="(555) 123-4567"
                                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102,95,253,0.1)"; }}
                                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                                    />
                                </div>
                                <div>
                                    <label style={{ fontFamily: "var(--font-family)", fontSize: 14, fontWeight: 500, color: "var(--text-dark)", display: "block", marginBottom: 6 }}>Subject</label>
                                    <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        style={inputStyle} placeholder="How can we help?"
                                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102,95,253,0.1)"; }}
                                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ fontFamily: "var(--font-family)", fontSize: 14, fontWeight: 500, color: "var(--text-dark)", display: "block", marginBottom: 6 }}>Message *</label>
                                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{ ...inputStyle, resize: "vertical", minHeight: 100 }} placeholder="Tell us about your needs..."
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102,95,253,0.1)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                                />
                            </div>
                            <button type="submit" style={{
                                fontFamily: "var(--font-family)", fontSize: 16, fontWeight: 600, color: "#fff",
                                background: "linear-gradient(135deg, #665FFD, #10217D)", border: "none", borderRadius: 12,
                                padding: "16px", cursor: "pointer", transition: "all 0.3s", marginTop: 4,
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(102,95,253,0.3)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};
