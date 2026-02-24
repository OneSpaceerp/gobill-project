export const PrivacyPolicyPage = (): JSX.Element => {
    return (
        <main style={{ background: "#fff", paddingBottom: "100px" }}>
            {/* HERO SECTION */}
            <section
                style={{
                    background: "var(--navy)",
                    padding: "80px 24px",
                    textAlign: "center"
                }}
            >
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 700,
                            fontSize: "clamp(32px, 5vw, 48px)",
                            color: "#fff",
                            marginBottom: 16,
                        }}
                    >
                        Privacy Policy
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "rgba(255,255,255,0.7)",
                        }}
                    >
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section style={{ padding: "60px 24px" }}>
                <div
                    className="container"
                    style={{
                        maxWidth: 800,
                        fontFamily: "var(--font-family)",
                        color: "var(--text-body)",
                        lineHeight: 1.8,
                        fontSize: "17px"
                    }}
                >
                    <p style={{ marginBottom: "24px" }}>
                        At GoBill, we take your privacy and the security of your data seriously. This Privacy Policy describes how GoBill ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website and services. As a vendor handling sensitive medical billing information, we strictly adhere to HIPAA regulations and implement industry-leading security practices.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>1. Information We Collect</h2>
                    <p style={{ marginBottom: "16px" }}>We collect information that you provide directly to us, including:</p>
                    <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
                        <li style={{ marginBottom: "8px" }}><strong>Contact Information:</strong> Name, email address, phone number, and practice name when you request a demo or assessment.</li>
                        <li style={{ marginBottom: "8px" }}><strong>Professional Data:</strong> Information regarding your PM/EHR systems, practice size, and current billing challenges.</li>
                        <li style={{ marginBottom: "8px" }}><strong>Protected Health Information (PHI):</strong> When you become a client, we access and process PHI strictly in accordance with our Business Associate Agreement (BAA) and HIPAA guidelines.</li>
                    </ul>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>2. How We Use Your Information</h2>
                    <p style={{ marginBottom: "24px" }}>
                        We use the information we collect to provide, maintain, and improve our services, communicate with you, analyze how you use our website, and ensure the security of our platform. For existing clients, PHI is used solely for the purpose of executing revenue cycle management services as requested.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>3. Data Security & HIPAA Compliance</h2>
                    <p style={{ marginBottom: "24px" }}>
                        We implement appropriate technical and organizational security measures to protect your information against unauthorized access, loss, or alteration. All PHI is encrypted both in transit and at rest. Our staff undergoes regular HIPAA compliance training, and access to sensitive data is strictly limited on a need-to-know basis.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>4. Contact Us</h2>
                    <p style={{ marginBottom: "24px" }}>
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                        <br /><br />
                        <strong>GoBill Compliance Officer</strong><br />
                        Email: compliance@gobill.inc<br />
                        Phone: +1 (888)-464-9750
                    </p>
                </div>
            </section>
        </main>
    );
};
