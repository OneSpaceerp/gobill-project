import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "What makes GoBill's AI-powered RCM different from traditional billing?",
        answer: "Unlike traditional billing services that rely heavily on manual data entry and human review—which are prone to errors and delays—GoBill integrates proprietary AI algorithms that scrub claims for over 10 million coding rules in seconds. This ensures a 99% accuracy rate and significantly faster reimbursements, while our certified human experts handle the complex denials and payer negotiations."
    },
    {
        question: "How long does it take to see results after partnering with GoBill?",
        answer: "Most of our partners see a noticeable difference within the first 30 to 60 days. Because our onboarding process seamlessly integrates with your existing EMR/PM systems, we can immediately begin identifying revenue leaks, working your aging A/R, and submitting cleaner claims."
    },
    {
        question: "Which Practice Management (PM) and EHR systems do you integrate with?",
        answer: "GoBill is platform-agnostic. We have deep experience integrating with all major EHR and PM systems, including Epic, Cerner, eClinicalWorks, AdvancedMD, Kareo, Athenahealth, DrChrono, and many others. Our tech team ensures a secure, HIPAA-compliant data bridge without disrupting your daily clinical workflow."
    },
    {
        question: "Do I have to sign a long-term contract?",
        answer: "We believe in earning your business every month through transparent results, not locking you into restrictive long-term contracts. While we do have standard service agreements, we structure them with flexibility in mind so you only stay if you're seeing continuous value."
    },
    {
        question: "How much do your services cost?",
        answer: "Our pricing structure is entirely performance-based. We charge a competitive percentage of the revenue we successfully collect for your practice. This means we only get paid when you get paid, perfectly aligning our incentives with your practice's financial success."
    },
    {
        question: "What kind of reporting and analytics will I receive?",
        answer: "You will have 24/7 access to our intuitive financial dashboard, which tracks key metrics like A/R aging, first-pass acceptance rates, and payer performance. Additionally, you will meet monthly with a dedicated Account Manager who will review these reports with you and provide strategic recommendations for further optimization."
    }
];

export const FaqsPage = (): JSX.Element => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main style={{ background: "#f8f9fc", minHeight: "100vh" }}>
            {/* HERO SECTION */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0655 0%, #10217D 50%, #665FFD 100%)",
                    padding: "100px 24px 60px",
                    textAlign: "center"
                }}
            >
                <div className="container" style={{ maxWidth: 800 }}>
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
                        Learn More
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
                        Frequently Asked Questions
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 400,
                            fontSize: "clamp(16px, 1.5vw, 20px)",
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.6,
                        }}
                    >
                        Everything you need to know about partnering with GoBill for your revenue cycle management.
                    </p>
                </div>
            </section>

            {/* FAQS SECTION */}
            <section style={{ padding: "80px 24px" }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        background: "#fff",
                                        borderRadius: 16,
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        overflow: "hidden",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "24px 32px",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            textAlign: "left"
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "var(--font-family)",
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: isOpen ? "var(--primary)" : "var(--navy)",
                                                transition: "color 0.2s"
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 32,
                                                height: 32,
                                                borderRadius: "50%",
                                                background: isOpen ? "var(--primary)" : "#f0f2f5",
                                                color: isOpen ? "#fff" : "var(--text-dark)",
                                                transition: "all 0.3s",
                                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                                            }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M1 4.5L7 10.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        style={{
                                            maxHeight: isOpen ? 500 : 0,
                                            opacity: isOpen ? 1 : 0,
                                            overflow: "hidden",
                                            transition: "all 0.4s ease-in-out",
                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: "0 32px 32px",
                                                fontFamily: "var(--font-family)",
                                                fontSize: 16,
                                                color: "var(--text-body)",
                                                lineHeight: 1.7
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section style={{ padding: "80px 24px", background: "#fff", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
                <div className="container" style={{ maxWidth: 600 }}>
                    <div style={{
                        width: 80, height: 80, borderRadius: "50%", background: "rgba(102,95,253,0.1)", color: "var(--primary)",
                        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px"
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 32px)", color: "var(--navy)", marginBottom: 16 }}>
                        Still have questions?
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 18, color: "var(--text-body)", marginBottom: 32 }}>
                        Our team of medical billing experts is ready to analyze your practice's unique needs.
                    </p>
                    <Link
                        to="/contact-us"
                        style={{
                            display: "inline-block",
                            background: "var(--primary)",
                            color: "#fff",
                            padding: "16px 40px",
                            borderRadius: 30,
                            fontFamily: "var(--font-family)",
                            fontWeight: 600,
                            fontSize: 16,
                            textDecoration: "none",
                            boxShadow: "0 8px 32px rgba(102,95,253,0.3)",
                            transition: "all 0.3s",
                        }}
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
};
