import { useState } from "react";

type AnswerWeight = "good" | "needs-improvement" | "critical";

interface Question {
    id: number;
    text: string;
    options: { text: string; weight: AnswerWeight }[];
}

const quizQuestions: Question[] = [
    {
        id: 1,
        text: "What is your current clean claim rate?",
        options: [
            { text: "> 95%", weight: "good" },
            { text: "85% - 94%", weight: "needs-improvement" },
            { text: "< 85%", weight: "critical" },
            { text: "Not Sure", weight: "critical" },
        ],
    },
    {
        id: 2,
        text: "How often do you run AR aging reports?",
        options: [
            { text: "Weekly", weight: "good" },
            { text: "Monthly", weight: "needs-improvement" },
            { text: "Rarely/Never", weight: "critical" },
        ],
    },
    {
        id: 3,
        text: "What percentage of your AR is over 90 days old?",
        options: [
            { text: "< 15%", weight: "good" },
            { text: "15% - 25%", weight: "needs-improvement" },
            { text: "> 25%", weight: "critical" },
        ],
    },
    {
        id: 4,
        text: "How quickly do you work your denials?",
        options: [
            { text: "Within 48 hours", weight: "good" },
            { text: "Within 1 week", weight: "needs-improvement" },
            { text: "We struggle to work them", weight: "critical" },
        ],
    },
    {
        id: 5,
        text: "Are you currently experiencing staffing shortages in your billing department?",
        options: [
            { text: "No, fully staffed", weight: "good" },
            { text: "Yes, somewhat", weight: "needs-improvement" },
            { text: "Yes, severely understaffed", weight: "critical" },
        ],
    },
];

export const BillingHealthQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<AnswerWeight[]>([]);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (weight: AnswerWeight) => {
        const newAnswers = [...answers, weight];
        setAnswers(newAnswers);

        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(quizQuestions.length); // Move to lead form
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Calculate score
        setShowResult(true);
    };

    const calculateScore = () => {
        let score = 0;
        answers.forEach((ans) => {
            if (ans === "good") score += 20;
            if (ans === "needs-improvement") score += 10;
            // critical = 0
        });
        return score; // Max 100
    };

    // Card styling
    const cardStyle: React.CSSProperties = {
        background: "#fff",
        borderRadius: "var(--radius-card)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.05)",
        padding: "40px",
        maxWidth: 640,
        margin: "0 auto",
        textAlign: "left",
    };

    if (showResult) {
        const score = calculateScore();
        const isGood = score >= 70;

        return (
            <section style={{ padding: "80px 24px", background: "#f8f9fc" }}>
                <div style={cardStyle}>
                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                                background: isGood ? "#E7FAED" : "#FFF4E5",
                                border: `4px solid ${isGood ? "#22C55E" : "#F59E0B"}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 20px",
                                fontSize: 32,
                                fontWeight: 700,
                                color: isGood ? "#166534" : "#92400E",
                                fontFamily: "var(--font-family)",
                            }}
                        >
                            {score}%
                        </div>
                        <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 26, color: "var(--navy)", marginBottom: 12 }}>
                            Your Billing Health Score
                        </h2>
                        <p style={{ fontFamily: "var(--font-family)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.6 }}>
                            {isGood
                                ? "You’re doing well, but there’s room for optimization. See how GoBill can add 10-15% to your bottom line."
                                : "Your revenue cycle is leaking funds. Book a free rescue assessment today."}
                        </p>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <a
                            href="#book"
                            style={{
                                display: "inline-block",
                                background: "var(--primary)",
                                color: "#fff",
                                padding: "16px 32px",
                                borderRadius: 30,
                                fontFamily: "var(--font-family)",
                                fontWeight: 600,
                                fontSize: 16,
                                textDecoration: "none",
                                boxShadow: "0 8px 24px rgba(102,95,253,0.3)",
                            }}
                        >
                            {isGood ? "Explore Optimization Strategies" : "Book a Rescue Assessment"}
                        </a>
                    </div>
                </div>
            </section>
        );
    }

    if (currentStep === quizQuestions.length) {
        return (
            <section style={{ padding: "80px 24px", background: "#f8f9fc" }}>
                <div style={cardStyle}>
                    <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 24, color: "var(--navy)", marginBottom: 12, textAlign: "center" }}>
                        Get Your Custom Report
                    </h2>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: 15, color: "var(--text-body)", marginBottom: 32, textAlign: "center" }}>
                        Enter your details to view your Billing Health Score and personalized recommendations.
                    </p>
                    <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={leadForm.name}
                            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                            style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid #ccc", fontFamily: "var(--font-family)", fontSize: 15 }}
                        />
                        <input
                            type="email"
                            placeholder="Work Email"
                            required
                            value={leadForm.email}
                            onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                            style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid #ccc", fontFamily: "var(--font-family)", fontSize: 15 }}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid #ccc", fontFamily: "var(--font-family)", fontSize: 15 }}
                        />
                        <button
                            type="submit"
                            style={{
                                background: "var(--primary)",
                                color: "#fff",
                                padding: "16px",
                                borderRadius: 8,
                                border: "none",
                                fontFamily: "var(--font-family)",
                                fontWeight: 600,
                                fontSize: 16,
                                cursor: "pointer",
                                marginTop: 8,
                                boxShadow: "0 4px 14px rgba(102,95,253,0.3)",
                            }}
                        >
                            Reveal My Score
                        </button>
                    </form>
                </div>
            </section>
        );
    }

    const question = quizQuestions[currentStep];
    const progress = ((currentStep) / quizQuestions.length) * 100;

    return (
        <section style={{ padding: "80px 24px", background: "#f8f9fc" }}>
            <div style={cardStyle}>
                <div style={{ marginBottom: 32 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontFamily: "var(--font-family)", fontSize: 13, fontWeight: 600, color: "var(--primary)" }}>
                            Question {currentStep + 1} of {quizQuestions.length}
                        </span>
                        <span style={{ fontFamily: "var(--font-family)", fontSize: 13, color: "var(--text-light)" }}>
                            Health Checker
                        </span>
                    </div>
                    {/* Progress Bar */}
                    <div style={{ width: "100%", height: 6, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: `${progress}%`, height: "100%", background: "var(--primary)", transition: "width 0.3s ease" }} />
                    </div>
                </div>

                <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(20px, 2vw, 26px)", color: "var(--navy)", marginBottom: 32, lineHeight: 1.4 }}>
                    {question.text}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {question.options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(opt.weight)}
                            style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "16px 20px",
                                background: "#fff",
                                border: "1px solid #e2e8f0",
                                borderRadius: 8,
                                fontFamily: "var(--font-family)",
                                fontSize: 16,
                                color: "var(--text-dark)",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--primary)";
                                e.currentTarget.style.background = "rgba(102,95,253,0.03)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#e2e8f0";
                                e.currentTarget.style.background = "#fff";
                            }}
                        >
                            {opt.text}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
