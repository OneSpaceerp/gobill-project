export const TermsConditionsPage = (): JSX.Element => {
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
                        Terms and Conditions
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
                        Welcome to GoBill! These Terms and Conditions outline the rules and regulations for the use of GoBill's Website and our revenue cycle management services. By accessing this website or utilizing our services, we assume you accept these terms and conditions in full. Do not continue to use GoBill's website if you do not accept all of the terms and conditions stated on this page.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>1. Services Provided</h2>
                    <p style={{ marginBottom: "24px" }}>
                        GoBill provides end-to-end medical billing, revenue cycle management (RCM), A/R collections, provider credentialing, and related financial services to healthcare practices. All services will be performed in a professional, compliant manner, adhering to all state and federal regulations, including HIPAA.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>2. User Responsibilities</h2>
                    <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
                        <li style={{ marginBottom: "8px" }}>Provide accurate, timely, and complete patient demographics and encounter data necessary for claim generation.</li>
                        <li style={{ marginBottom: "8px" }}>Maintain your own EMR/PM systems and ensure GoBill personnel have appropriate, secure access to perform requested duties.</li>
                        <li style={{ marginBottom: "8px" }}>Respond promptly to requests for additional medical documentation required by payers to process complex denials or audits.</li>
                    </ul>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>3. Fees and Payment</h2>
                    <p style={{ marginBottom: "24px" }}>
                        As detailed in your specific Service Level Agreement (SLA), our completely performance-based fee structure is calculated as a percentage of your monthly collected revenue. Invoices are generated monthly and are due within net-15 days. We reserve the right to suspend services for accounts severely past due.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>4. Confidentiality & HIPAA</h2>
                    <p style={{ marginBottom: "24px" }}>
                        Both parties agree to treat all exchanged information, including proprietary operational workflows and Protected Health Information (PHI), as strictly confidential. GoBill operates as a Business Associate and will execute a formal Business Associate Agreement (BAA) with your practice prior to onboarding.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>5. Limitation of Liability</h2>
                    <p style={{ marginBottom: "24px" }}>
                        While GoBill employs robust AI algorithms and certified billers to ensure maximum reimbursements, we cannot guarantee payment from individual insurers, nor can we be held liable for denials stemming from lack of medical necessity or improper clinical documentation originating from the provider.
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--navy)", marginTop: "40px", marginBottom: "16px" }}>6. Termination</h2>
                    <p style={{ marginBottom: "24px" }}>
                        Service Agreements may be terminated by either party with a 60-day written notice, provided all outstanding invoices have been settled. Upon termination, GoBill will cooperate fully to ensure a smooth transition of your financial data back to your internal team or new vendor.
                    </p>
                </div>
            </section>
        </main>
    );
};
