

export const BlogsPage = (): JSX.Element => {
    const blogs = [
        {
            title: "How To Speed Up The Prior Authorization Process",
            date: "January 2, 2024",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/how-to-speed-up-the-prior-authorization-process1.png",
            link: "https://www.gobill.co/blogs/how-to-speed-up-the-prior-authorization-process",
        },
        {
            title: "Understanding Clean Claim In Medical Billing & How To Improve It",
            date: "December 28, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/understanding-clean-claim-in-medical-billing-how-to-improve.png",
            link: "https://www.gobill.co/blogs/understanding-clean-claim-in-medical-billing-how-to-improve-it",
        },
        {
            title: "6 Common Reasons For Claims Denials & What To Do",
            date: "December 25, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/x-common-reasons-for-claims-denials-what-to-do1.png",
            link: "https://www.gobill.co/blogs/6-common-reasons-for-claims-denials-what-to-do",
        },
        {
            title: "The Importance Of Patient Scheduling (Plus Best Practices)",
            date: "December 21, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/the-importance-of-patient-scheduling-plus-best-practice.png",
            link: "https://www.gobill.co/blogs/the-importance-of-patient-scheduling-plus-best-practices",
        },
        {
            title: "Understanding Accounts Receivable in Medical Billing",
            date: "December 19, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/person-medical-invoice-blue-credit-card-healthcare-accounts-receivable-payment.png",
            link: "https://www.gobill.co/blogs/understanding-accounts-receivable-in-medical-billing",
        },
        {
            title: "Physician Credentialing: What It Is & Why It Matters",
            date: "December 14, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/physician-credentialing-what-it-is-why-it-matter.png",
            link: "https://www.gobill.co/blogs/physician-credentialing-what-it-is-why-it-matters",
        },
        {
            title: "6 Medical Billing Process Steps That Are Essential for Healthcare Providers",
            date: "December 12, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/6-steps-of-a-successful-medical-billing-processs.png",
            link: "https://www.gobill.co/blogs/6-medical-billing-process-steps-that-are-essential-for-healthcare-providers",
        },
        {
            title: "Why Outsourcing Your Medical Billing Is A Good Idea",
            date: "December 7, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/why-outsourcing-your-medical-billing-good-idea.png",
            link: "https://www.gobill.co/blogs/why-outsourcing-your-medical-billing-is-a-good-idea",
        },
        {
            title: "A Guide To Healthcare Revenue Cycle Management",
            date: "December 5, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/12/a-guide-to-healthcare-revenue-cycle-mgmt.png",
            link: "https://www.gobill.co/blogs/a-guide-to-healthcare-revenue-cycle-management",
        },
        {
            title: "Demystifying the Enrollment and Credentialing Process for Medicare and Medicaid",
            date: "April 26, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/04/blog-3.jpg",
            link: "https://www.gobill.co/blogs/demystifying-the-enrollment-and-credentialing-process-for-medicare-and-medicaid-a-comprehensive-guide-to-credentialing-services",
        },
        {
            title: "Navigating the Complexities of Medical Billing and Coding",
            date: "April 26, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/04/blog-2.jpg",
            link: "https://www.gobill.co/blogs/navigating-the-complexities-of-medical-billing-and-coding-challenges-and-solutions",
        },
        {
            title: "Medical Billing: The Full Scoop",
            date: "April 10, 2023",
            image: "https://www.gobill.co/wp-content/uploads/2023/04/blog-1.jpg",
            link: "https://www.gobill.co/blogs/medical-billing-the-full-scoop",
        },
    ];

    return (
        <main>
            {/* Hero */}
            <section style={{ background: "linear-gradient(135deg, #0a0655 0%, #10217D 60%, #665FFD 100%)", padding: "100px 0 60px", textAlign: "center" }}>
                <div className="container">
                    <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", marginBottom: 16 }}>
                        GoBill Blog
                    </h1>
                    <p style={{ fontFamily: "var(--font-family)", fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto" }}>
                        Insights, tips, and industry updates from the GoBill team
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section style={{ padding: "64px 0 80px" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28, maxWidth: 1100, margin: "0 auto" }}>
                        {blogs.map((blog, i) => (
                            <a
                                key={i}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: "#fff",
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
                                    transition: "all 0.3s",
                                    cursor: "pointer",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                    textDecoration: "none",
                                    display: "block",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(102,95,253,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 24px rgba(0,0,0,0.06)";
                                }}
                            >
                                {/* Blog Image */}
                                <div style={{
                                    width: "100%",
                                    height: 200,
                                    background: `url(${blog.image}) center/cover no-repeat`,
                                    backgroundColor: "#f0f2f5",
                                }} />
                                <div style={{ padding: "20px 24px 24px" }}>
                                    <span style={{ fontFamily: "var(--font-family)", fontSize: 13, color: "var(--text-body)", display: "block", marginBottom: 10 }}>{blog.date}</span>
                                    <h3 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: 17, color: "var(--text-dark)", lineHeight: 1.4, margin: 0 }}>
                                        {blog.title}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
