export interface SolutionPageData {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    features: { title: string; description: string }[];
    ctaTitle?: string;
    ctaText?: string;
}

export const solutionPages: SolutionPageData[] = [
    {
        slug: "rcm",
        title: "Revenue Cycle Management (RCM)",
        tagline: "Optimize your entire financial workflow—from patient intake to final payment—so you can focus on patient care.",
        description:
            "Maximize your revenue and minimize your paperwork with GoBill's virtual medical billing solutions. Our proven methods guarantee high reimbursement rates, ensuring your medical practice collects every dollar due to you.",
        features: [
            { title: "End-to-End Visibility", description: "Track every dollar with customized, easy-to-read dashboards." },
            { title: "Faster Reimbursements", description: "Streamlined processes mean fewer days in A/R." },
            { title: "Patient Financial Engagement", description: "Clear, compassionate patient billing that improves satisfaction." },
            { title: "Proactive Audits", description: "Continuous review of your financial health to stop leaks before they happen." },
        ],
        ctaTitle: "Let's Optimize Your Revenue Cycle",
        ctaText: "Schedule a complimentary assessment and discover how GoBill can transform your billing operations.",
    },
    {
        slug: "medical-billing-and-coding",
        title: "Medical Billing Services",
        tagline: "From coding errors to missed deadlines, poor billing practices cost your practice money. GoBill’s certified experts ensure every claim is submitted cleanly and paid fully.",
        description:
            "Our certified medical billers and coders ensure accurate claim submissions, reducing denials and maximizing reimbursement for your practice.",
        features: [
            { title: "Improved Cash Flow", description: "Accelerate payments with 99% accuracy on first-pass submissions." },
            { title: "Compliance Guaranteed", description: "Stay ahead of changing CMS and private payer regulations." },
            { title: "Expert Coding", description: "Reduce under-coding or over-coding risks." },
            { title: "Total Transparency", description: "Real-time reporting on claim status." },
        ],
        ctaTitle: "Get Accurate Billing Today",
        ctaText: "Let our certified billers handle your coding and billing so you can focus on your patients.",
    },
    {
        slug: "denial-management",
        title: "Denial Management",
        tagline: "Don't take \"No\" for an answer. We overturn unfair denials and recover revenue.",
        description:
            "Stop leaving money on the table. GoBill's denial management services identify root causes, prevent future denials, and recover lost revenue through strategic appeals.",
        features: [
            { title: "Intelligent Appeals", description: "We build evidence-based appeal packets that win." },
            { title: "Root-Cause Analysis", description: "We identify the reasons behind denials and fix them at the source (e.g., front-desk errors, coding mistakes)." },
            { title: "24-Hour Action", description: "Denied claims are reviewed and acted upon within 24 hours of receipt." },
            { title: "Preventative Strategy", description: "We continuously educate your staff on new payer rules to avoid future rejections." },
        ],
        ctaTitle: "Recover Your Lost Revenue",
        ctaText: "Schedule a denial analysis and find out how much revenue you're leaving on the table.",
    },
    {
        slug: "appointment-scheduling",
        title: "Appointment Scheduling",
        tagline: "Virtual Front Desk & Appointment Management",
        description:
            "Streamline your patient scheduling with GoBill's virtual front desk services. Reduce no-shows, improve patient flow, and enhance the overall experience.",
        features: [
            { title: "Online Scheduling", description: "24/7 online appointment booking for patient convenience." },
            { title: "Automated Reminders", description: "SMS and email reminders to reduce no-shows by up to 40%." },
            { title: "Insurance Verification", description: "Pre-visit insurance verification to reduce claim denials." },
            { title: "Patient Communication", description: "Professional communication with patients for scheduling and follow-ups." },
            { title: "Calendar Management", description: "Optimized scheduling to maximize provider utilization." },
            { title: "Reporting", description: "Scheduling analytics to identify trends and optimization opportunities." },
        ],
        ctaTitle: "Optimize Your Patient Flow",
        ctaText: "Let us handle your scheduling so your team can focus on patient care.",
    },
    {
        slug: "ar-collections-management",
        title: "Accounts Receivable (A/R) Collections Management",
        tagline: "Turn pending payments into realized revenue with strategic A/R follow-ups.",
        description:
            "Reduce your days in AR and improve collections with GoBill's dedicated accounts receivable management services. We pursue every dollar your practice has earned.",
        features: [
            { title: "Aged Claim Recovery", description: "We aggressively pursue 90+ and 120+ day balances." },
            { title: "Patient Payment Plans", description: "Structured installment plans that increase the likelihood of payment." },
            { title: "Priority Workflows", description: "High-balance and easy-to-win claims are targeted first for fast cash flow." },
            { title: "Dedicated Account Managers", description: "A single point of contact reviewing your A/R aging reports monthly." },
        ],
        ctaTitle: "Improve Your Collections",
        ctaText: "Find out how we can reduce your days in AR and improve your bottom line.",
    },
    {
        slug: "pre-authorization",
        title: "Pre-Auth & Eligibility Verification",
        tagline: "Pre-Authorization & Eligibility Verification Services",
        description:
            "Eliminate claim denials caused by authorization issues. GoBill handles pre-authorization requests and eligibility verification so you can provide care with confidence.",
        features: [
            { title: "Real-Time Verification", description: "Instant eligibility checks to confirm patient coverage before the visit." },
            { title: "Prior Authorization", description: "Handle the entire prior auth process from request to approval." },
            { title: "Benefits Investigation", description: "Detailed benefits breakdown so patients understand their financial responsibility." },
            { title: "Referral Management", description: "Coordinate referrals and authorizations across providers." },
            { title: "Coverage Alerts", description: "Automated alerts for coverage changes, terminations, or limitations." },
            { title: "Compliance Tracking", description: "Ensure all services are properly authorized and documented." },
        ],
        ctaTitle: "Eliminate Authorization Denials",
        ctaText: "Let us handle your pre-auth and eligibility so every claim gets paid.",
    },
    {
        slug: "provider-credentialing",
        title: "Provider Credentialing",
        tagline: "Provider Credentialing & Enrollment Services",
        description:
            "Accelerate your payer enrollment and credentialing process with GoBill. We handle the paperwork, follow-ups, and compliance requirements so you can start seeing patients sooner.",
        features: [
            { title: "Initial Credentialing", description: "Complete credentialing applications for new providers across all major payers." },
            { title: "Re-Credentialing", description: "Timely re-credentialing submissions to prevent gaps in network participation." },
            { title: "CAQH Management", description: "Maintain and update your CAQH profile for streamlined credentialing." },
            { title: "Payer Enrollment", description: "Enrollment with Medicare, Medicaid, and commercial insurance plans." },
            { title: "License Tracking", description: "Track license expirations, DEA renewals, and board certifications." },
            { title: "Privileging Support", description: "Hospital and facility privileging application support." },
        ],
        ctaTitle: "Get Credentialed Faster",
        ctaText: "Start seeing patients sooner with our streamlined credentialing services.",
    },
];
