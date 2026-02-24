import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [stage, setStage] = useState<"greeting" | "lead_capture" | "assessment_form" | "success">("greeting");
    const [leadData, setLeadData] = useState({ name: "", phone: "", email: "" });
    const navigate = useNavigate();
    const chatBottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (chatBottomRef.current) {
            chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [stage]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleActionClick = (action: string) => {
        if (action === "services" || action === "challenge") {
            setStage("lead_capture");
        } else if (action === "assessment") {
            setStage("assessment_form");
        } else if (action === "specialist") {
            navigate("/contact-us");
            setIsOpen(false);
        }
    };

    const submitLeadCapture = (e: React.FormEvent) => {
        e.preventDefault();
        setStage("success");
    };

    const submitAssessment = (e: React.FormEvent) => {
        e.preventDefault();
        setStage("success");
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: 24,
                right: 24,
                zIndex: 9999,
                fontFamily: "var(--font-family)",
            }}
        >
            {/* ── Chat Window ── */}
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "calc(100% + 16px)",
                        right: 0,
                        width: 340,
                        maxHeight: 500,
                        background: "#fff",
                        borderRadius: 16,
                        boxShadow: "0 12px 48px rgba(0,0,0,0.15), 0 2px 12px rgba(0,0,0,0.08)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        border: "1px solid rgba(0,0,0,0.08)",
                        animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            background: "var(--primary)",
                            color: "#fff",
                            padding: "16px 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    background: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary)",
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a2 2 0 0 1 2 2c-.11.66-.4 1.25-.8 1.76l-1.92 2.45c-.27.35-.45.77-.52 1.2l-.24 1.54c-.06.4-.1.82-.1 1.24v.81c0 1.1.9 2 2 2h4.55c1.45 0 2.65-1.15 2.76-2.58l.68-8.8A2.5 2.5 0 0 0 18.02 1H5.98C4.69 1 3.6 2 3.5 3.3l-.62 8A2.5 2.5 0 0 0 5.37 14h3.69c1.1 0 2-.9 2-2v-.81c0-.42-.04-.84-.1-1.24L10.7 8.41a3.02 3.02 0 0 1-.52-1.2L8.26 4.76c-.4-.51-.69-1.1-.8-1.76a2 2 0 0 1 2-2h2.54z" />
                                </svg>
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>GoBill Assistant</h4>
                                <div style={{ display: "flex", alignItems: "center", gap: 4, opacity: 0.9, fontSize: 12 }}>
                                    <div style={{ width: 6, height: 6, background: "#4ade80", borderRadius: "50%" }} />
                                    Online
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div
                        style={{
                            padding: 20,
                            background: "#f9fafb",
                            flex: 1,
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                            maxHeight: 380,
                        }}
                    >
                        {/* GoBill Msg: Greeting */}
                        <div style={{ display: "flex", gap: 8 }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: "50%", background: "var(--primary)", color: "#fff",
                                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a2 2 0 0 1 2 2" />
                                </svg>
                            </div>
                            <div style={{ background: "#fff", padding: "12px 14px", borderRadius: "0 12px 12px 12px", border: "1px solid rgba(0,0,0,0.05)", fontSize: 14, color: "var(--text-dark)", lineHeight: 1.5, boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                                Hi there! I'm your GoBill Assistant. Looking to speed up claims and boost revenue? I can help you with services, pricing, or booking a free assessment.
                            </div>
                        </div>

                        {/* Quick Actions (Greeting Stage) */}
                        {stage === "greeting" && (
                            <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 36 }}>
                                {[
                                    { text: "Tell me about your services", action: "services" },
                                    { text: "I have a billing challenge", action: "challenge" },
                                    { text: "Book my free assessment", action: "assessment" },
                                    { text: "Speak to a specialist", action: "specialist" },
                                ].map((btn, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleActionClick(btn.action)}
                                        style={{
                                            background: "#fff", border: "1px solid var(--primary)", color: "var(--primary)",
                                            padding: "10px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500, cursor: "pointer",
                                            textAlign: "left", transition: "all 0.2s", boxShadow: "0 2px 4px rgba(102,95,253,0.05)"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "var(--primary)";
                                            e.currentTarget.style.color = "#fff";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "#fff";
                                            e.currentTarget.style.color = "var(--primary)";
                                        }}
                                    >
                                        {btn.text}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Lead Capture Form */}
                        {stage === "lead_capture" && (
                            <>
                                <div style={{ display: "flex", gap: 8 }}>
                                    <div style={{
                                        width: 28, height: 28, borderRadius: "50%", background: "var(--primary)", color: "#fff",
                                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2" /></svg>
                                    </div>
                                    <div style={{ background: "#fff", padding: "12px 14px", borderRadius: "0 12px 12px 12px", border: "1px solid rgba(0,0,0,0.05)", fontSize: 14, color: "var(--text-dark)", lineHeight: 1.5, boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                                        Great! Can I grab your name, phone number, and email so our team can follow up with a custom plan?
                                    </div>
                                </div>
                                <form onSubmit={submitLeadCapture} style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 36 }}>
                                    <input type="text" placeholder="Full Name" required value={leadData.name} onChange={(e) => setLeadData({ ...leadData, name: e.target.value })} style={{ padding: "10px 12px", border: "1px solid #e1e4e8", borderRadius: 8, fontSize: 14, fontFamily: "var(--font-family)" }} />
                                    <input type="email" placeholder="Email Address" required value={leadData.email} onChange={(e) => setLeadData({ ...leadData, email: e.target.value })} style={{ padding: "10px 12px", border: "1px solid #e1e4e8", borderRadius: 8, fontSize: 14, fontFamily: "var(--font-family)" }} />
                                    <input type="tel" placeholder="Phone Number" required value={leadData.phone} onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })} style={{ padding: "10px 12px", border: "1px solid #e1e4e8", borderRadius: 8, fontSize: 14, fontFamily: "var(--font-family)" }} />
                                    <button type="submit" style={{ background: "var(--primary)", color: "#fff", border: "none", padding: "12px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>Submit</button>
                                </form>
                            </>
                        )}

                        {/* Assessment Form */}
                        {stage === "assessment_form" && (
                            <>
                                <div style={{ display: "flex", gap: 8 }}>
                                    <div style={{
                                        width: 28, height: 28, borderRadius: "50%", background: "var(--primary)", color: "#fff",
                                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2" /></svg>
                                    </div>
                                    <div style={{ background: "#fff", padding: "12px 14px", borderRadius: "0 12px 12px 12px", border: "1px solid rgba(0,0,0,0.05)", fontSize: 14, color: "var(--text-dark)", lineHeight: 1.5, boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                                        Awesome! Please provide some quick details to kick off your complimentary assessment.
                                    </div>
                                </div>
                                <form onSubmit={submitAssessment} style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 36 }}>
                                    <input type="text" placeholder="Practice Name" required style={{ padding: "10px 12px", border: "1px solid #e1e4e8", borderRadius: 8, fontSize: 14, fontFamily: "var(--font-family)" }} />
                                    <input type="text" placeholder="Your Name" required value={leadData.name} onChange={(e) => setLeadData({ ...leadData, name: e.target.value })} style={{ padding: "10px 12px", border: "1px solid #e1e4e8", borderRadius: 8, fontSize: 14, fontFamily: "var(--font-family)" }} />
                                    <input type="email" placeholder="Email Address" required value={leadData.email} onChange={(e) => setLeadData({ ...leadData, email: e.target.value })} style={{ padding: "10px 12px", border: "1px solid #e1e4e8", borderRadius: 8, fontSize: 14, fontFamily: "var(--font-family)" }} />
                                    <button type="submit" style={{ background: "var(--primary)", color: "#fff", border: "none", padding: "12px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>Request Assessment</button>
                                </form>
                            </>
                        )}

                        {/* Success Stage */}
                        {stage === "success" && (
                            <div style={{ display: "flex", gap: 8 }}>
                                <div style={{
                                    width: 28, height: 28, borderRadius: "50%", background: "#4ade80", color: "#fff",
                                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div style={{ background: "#fff", padding: "12px 14px", borderRadius: "0 12px 12px 12px", border: "1px solid rgba(0,0,0,0.05)", fontSize: 14, color: "var(--text-dark)", lineHeight: 1.5, boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                                    Thank you, {leadData.name || "there"}! We've received your information. A billing specialist will reach out to you within 24 hours.
                                    <button
                                        onClick={() => setStage("greeting")}
                                        style={{ background: "none", border: "none", color: "var(--primary)", padding: 0, marginTop: 12, fontSize: 13, fontWeight: 500, cursor: "pointer", textDecoration: "underline" }}
                                    >
                                        Start a new chat
                                    </button>
                                </div>
                            </div>
                        )}

                        <div ref={chatBottomRef} />
                    </div>
                </div>
            )}

            {/* ── Chat Toggle Button ── */}
            <button
                onClick={toggleChat}
                style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(102,95,253,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isOpen ? "scale(0.9)" : "scale(1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = isOpen ? "scale(0.9)" : "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = isOpen ? "scale(0.9)" : "scale(1)")}
                aria-label="Toggle GoBill Assistant"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <path d="M8 10h.01" />
                        <path d="M12 10h.01" />
                        <path d="M16 10h.01" />
                    </svg>
                )}
            </button>

            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};
