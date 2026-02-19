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
        title: "Revenue Cycle Management",
        tagline: "360° End-to-End Revenue Cycle Management",
        description:
            "Maximize your revenue and minimize your paperwork with GoBill's virtual medical billing solutions. Our proven methods guarantee high reimbursement rates, ensuring your medical practice collects every dollar due to you.",
        features: [
            { title: "Charge Capture & Entry", description: "Accurate charge capture and entry to ensure every service is billed correctly and completely." },
            { title: "Claims Submission", description: "Timely and accurate claims submission to maximize first-pass acceptance rates." },
            { title: "Payment Posting", description: "Efficient payment posting with detailed reconciliation to keep your accounts up to date." },
            { title: "Denial Management", description: "Proactive denial tracking, analysis, and appeal management to recover lost revenue." },
            { title: "Patient Billing", description: "Clear, patient-friendly billing statements and collections to improve patient satisfaction." },
            { title: "Reporting & Analytics", description: "Comprehensive dashboards and reports giving you full visibility into your revenue cycle performance." },
        ],
        ctaTitle: "Let's Optimize Your Revenue Cycle",
        ctaText: "Schedule a complimentary assessment and discover how GoBill can transform your billing operations.",
    },
    {
        slug: "medical-billing-and-coding",
        title: "Medical Billing & Coding",
        tagline: "Expert Medical Billing & Coding Services",
        description:
            "Our certified medical billers and coders ensure accurate claim submissions, reducing denials and maximizing reimbursement for your practice.",
        features: [
            { title: "CPT & ICD-10 Coding", description: "Expert coding with up-to-date CPT, ICD-10, and HCPCS knowledge for maximum accuracy." },
            { title: "Claim Scrubbing", description: "Automated and manual claim reviews to catch errors before submission." },
            { title: "ERA/EOB Processing", description: "Efficient processing of electronic remittance advice and explanation of benefits." },
            { title: "Compliance Reviews", description: "Regular audits to ensure coding accuracy and HIPAA compliance." },
            { title: "Specialty-Specific Coding", description: "Tailored coding expertise across cardiology, orthopedics, dermatology, and more." },
            { title: "Outsourced Billing", description: "Full-service outsourced billing so you can focus on patient care." },
        ],
        ctaTitle: "Get Accurate Billing Today",
        ctaText: "Let our certified billers handle your coding and billing so you can focus on your patients.",
    },
    {
        slug: "denial-management",
        title: "Denial Management",
        tagline: "Proactive Denial Prevention & Recovery",
        description:
            "Stop leaving money on the table. GoBill's denial management services identify root causes, prevent future denials, and recover lost revenue through strategic appeals.",
        features: [
            { title: "Root Cause Analysis", description: "Identify why claims are denied and implement corrective actions to prevent recurrence." },
            { title: "Appeal Management", description: "Aggressive appeal strategies to overturn denied claims and recover maximum revenue." },
            { title: "Denial Tracking", description: "Real-time denial tracking dashboards for complete visibility into denial trends." },
            { title: "Payer-Specific Strategies", description: "Customized denial prevention strategies tailored to each insurance payer's requirements." },
            { title: "Staff Training", description: "Educate your team on common denial triggers and prevention best practices." },
            { title: "Performance Reporting", description: "Monthly reports showing denial rates, recovery rates, and revenue impact." },
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
        title: "AR & Collections Management",
        tagline: "Accounts Receivable & Collections Excellence",
        description:
            "Reduce your days in AR and improve collections with GoBill's dedicated accounts receivable management services. We pursue every dollar your practice has earned.",
        features: [
            { title: "Aging Analysis", description: "Detailed AR aging reports to prioritize high-value accounts." },
            { title: "Follow-up Workflows", description: "Systematic follow-up processes for payer and patient balances." },
            { title: "Payment Plans", description: "Flexible patient payment plans to improve collections while maintaining satisfaction." },
            { title: "Credit Balance Resolution", description: "Identify and resolve credit balances to maintain compliance." },
            { title: "Collections Escalation", description: "Structured escalation processes for delinquent accounts." },
            { title: "Performance Metrics", description: "Track days in AR, collection rates, and net collection ratio." },
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
