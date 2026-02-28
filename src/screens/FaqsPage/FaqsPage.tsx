import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "What does GoBill do?",
        answer: "GoBill is your certified 360 medical billing services provider, assisting you in growing and managing your revenue cycle."
    },
    {
        question: "Why GoBill?",
        answer: "With over 15 years of combined medical experience in the United States market; We will claim your payments fast, dynamically, accurately, and successfully. Cutting overhead costs by outsourcing rather than hiring a full-time employee."
    },
    {
        question: "What are the fees for GoBill's services?",
        answer: "At GoBill, we provide our services for a percentage of the collected revenue, for insurance and patient payments. We offer services beyond sending your claims, our experienced team will assist you to grow and manage your revenue."
    },
    {
        question: "Is GoBill certified?",
        answer: "GoBill is HIPAA (Health Insurance Portability and Accountability Act) certified and is presently pursuing ISO 9001:2000 certification for quality and operations. In addition, ISO 270001:2005 information security certification."
    },
    {
        question: "Can you improve my cash flow? How?",
        answer: "GoBill's mission is to manage your revenue cycle management, claim your bills and grow your cash flow. We transmit claims electronically to all insurance companies that accept claims electronically, we will ensure you receive your payment in 3-4 weeks rather than the usual 3 months."
    },
    {
        question: "Which is more efficient: billing in-house or using GoBill?",
        answer: "Building an in-house medical billing staff will be more expensive because you will have to pay for salaries, benefits, and training. On the other hand, GoBill will save you time and money while also providing you with the support of our staff."
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
