import { useEffect } from "react";

export const AssessmentPage = (): JSX.Element => {
    useEffect(() => {
        // Only append the script if it doesn't already exist
        let script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement;

        if (!script) {
            script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            // Clean up if we added it
            if (script && script.parentNode) {
                // script.parentNode.removeChild(script); // Generally fine to leave calendly script loaded
            }
        };
    }, []);

    return (
        <main style={{ background: "#f8f9fc", minHeight: "100vh", paddingBottom: "100px" }}>
            {/* HERO SECTION */}
            <section
                style={{
                    background: "var(--navy)",
                    padding: "80px 24px 120px",
                    textAlign: "center"
                }}
            >
                <div className="container" style={{ maxWidth: 800 }}>
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
                        Schedule a Consultation
                    </p>
                    <h1
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 700,
                            fontSize: "clamp(32px, 5vw, 48px)",
                            color: "#fff",
                            marginBottom: 24,
                        }}
                    >
                        Complimentary RCM Assessment
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
                        Pick a time below that works best for you. One of our revenue cycle experts will be ready to discuss your specific practice challenges and how GoBill can help.
                    </p>
                </div>
            </section>

            {/* CALENDLY EMBED */}
            <section style={{ marginTop: "-60px", padding: "0 24px" }}>
                <div className="container" style={{ maxWidth: 1000, background: "#fff", borderRadius: 24, padding: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", minHeight: 750 }}>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/gobillsales/30min?background_color=ffffff&text_color=080857&primary_color=665ffd"
                        style={{ minWidth: "320px", height: "700px" }}
                    ></div>
                </div>
            </section>
        </main>
    );
};
