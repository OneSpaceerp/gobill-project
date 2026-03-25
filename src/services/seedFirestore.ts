import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { solutionPages } from "../data/solutionData";
import { blogsData } from "../data/blogsData";

/**
 * Seeds Firestore with all the hardcoded website data.
 * Should only be run once from the admin dashboard.
 */
export async function seedFirestore(onProgress?: (msg: string) => void) {
  const log = (msg: string) => {
    console.log("[SEED]", msg);
    onProgress?.(msg);
  };

  /* ─── 1. SERVICES ─── */
  log("Seeding services...");
  for (let i = 0; i < solutionPages.length; i++) {
    const s = solutionPages[i];
    await setDoc(doc(db, "services", s.slug), {
      order: i + 1,
      slug: s.slug,
      title: s.title,
      heroTitle: s.heroTitle,
      tagline: s.tagline,
      description: s.description,
      heroImage: s.heroImage || "",
      heroBgImage: s.heroBgImage || "",
      iconImage: s.iconImage || "",
      ctaTitle: s.ctaTitle || "",
      ctaText: s.ctaText || "",
      includeImage: s.includeImage || "",
      statsImage: s.statsImage || "",
      featuresJson: JSON.stringify(s.features || []),
      contentSectionsJson: JSON.stringify(s.contentSections || []),
      detailedFeaturesJson: JSON.stringify(s.detailedFeatures || []),
      benefitCardsJson: JSON.stringify(s.benefitCards || []),
      statsJson: JSON.stringify(s.stats || null),
      partnerSectionJson: JSON.stringify(s.partnerSection || null),
    });
    log(`  ✓ Service: ${s.title}`);
  }

  /* ─── 2. BLOGS ─── */
  log("Seeding blog posts...");
  for (let i = 0; i < blogsData.length; i++) {
    const b = blogsData[i];
    await setDoc(doc(db, "blogs", b.slug), {
      order: i + 1,
      slug: b.slug,
      title: b.title,
      date: b.date,
      image: b.image,
      content: b.content,
    });
    log(`  ✓ Blog: ${b.title}`);
  }

  /* ─── 3. HERO SLIDES ─── */
  log("Seeding hero slides...");
  const heroSlides = [
    {
      order: 1,
      title: "Medical Billing Excellence",
      heading: "From Billing to Brilliance",
      subtitle: "Complete revenue cycle management solutions that help healthcare providers maximize reimbursements and reduce denials.",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
      background: "#F7F7FF",
      imageUrl: "",
    },
    {
      order: 2,
      title: "Data-Driven Insights",
      heading: "Gain Full Visibility Into Your Revenue",
      subtitle: "Powerful analytics and reporting tools that give you real-time insights into your practice's financial performance.",
      ctaText: "Learn More",
      ctaLink: "/data-reporting-analytics",
      background: "#F0F7FF",
      imageUrl: "",
    },
    {
      order: 3,
      title: "AI-Powered Dashboard",
      heading: "Smart Practice Management",
      subtitle: "Harness the power of AI to optimize your revenue cycle with intelligent automation and predictive analytics.",
      ctaText: "Get Started",
      ctaLink: "/ai-optimization",
      background: "#F5F0FF",
      imageUrl: "",
    },
  ];
  for (const slide of heroSlides) {
    await setDoc(doc(db, "heroSlides", `slide-${slide.order}`), slide);
    log(`  ✓ Slide: ${slide.title}`);
  }

  /* ─── 4. NAVIGATION ─── */
  log("Seeding navigation...");
  await setDoc(doc(db, "navigation", "main"), {
    headerLinks: [
      {
        label: "Expertise",
        path: "#",
        subMenu: [
          { label: "Medical Billing Services", path: "/solutions/medical-billing-and-coding" },
          { label: "Revenue Cycle Management (RCM)", path: "/solutions/rcm" },
          { label: "A/R Collections Management", path: "/solutions/ar-collections-management" },
          { label: "Denial Management", path: "/solutions/denial-management" },
          { label: "Virtual Patient Engagement Officer", path: "/solutions/virtual-front-desk-officer" },
          { label: "Pre-Authorization and Eligibility Verification", path: "/solutions/pre-authorization" },
          { label: "Appointment Scheduling", path: "/solutions/appointment-scheduling" },
          { label: "Provider Credentialing", path: "/solutions/provider-credentialing" },
        ],
      },
      { label: "Blogs", path: "/blogs" },
      { label: "Who We Serve", path: "/about-us" },
      {
        label: "Company",
        path: "#",
        subMenu: [
          { label: "About Us", path: "/about-us" },
          { label: "Why GoBill", path: "/why-gobill" },
          { label: "FAQs", path: "/faqs" },
        ],
      },
      { label: "Contact Us", path: "/contact-us" },
    ],
    footerExpertise: [
      { text: "Medical Billing Services", path: "/solutions/medical-billing-and-coding" },
      { text: "Data & Reporting Analytics", path: "#" },
      { text: "AI-Powered Optimization", path: "#" },
      { text: "Provider Credentialing", path: "/solutions/provider-credentialing" },
      { text: "Virtual Patient Engagement Officer", path: "/solutions/virtual-front-desk-officer" },
    ],
    footerCompany: [
      { text: "Why GoBill", path: "/why-gobill" },
      { text: "About Us", path: "/about-us" },
      { text: "FAQs", path: "/faqs" },
      { text: "Site Map", path: "/sitemap" },
    ],
    footerBottom: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
    socialLinks: [
      { name: "Facebook", href: "https://www.facebook.com/gobillsolutions" },
      { name: "Instagram", href: "https://www.instagram.com/gobillsolutions" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/gobillsolutions" },
    ],
  });
  log("  ✓ Navigation saved");

  /* ─── 5. SITE CONTENT ─── */
  log("Seeding site content...");

  await setDoc(doc(db, "siteContent", "hero"), {
    title: "From Billing to Brilliance",
    subtitle: "Complete revenue cycle management solutions that help healthcare providers maximize reimbursements and reduce denials.",
    ctaText: "Contact Us",
    ctaLink: "/contact-us",
    videoUrl: "",
    cardText: "Manage your practice's revenue cycle with confidence — from patient intake to final reimbursement.",
  });
  log("  ✓ Hero content");

  await setDoc(doc(db, "siteContent", "trust"), {
    heading: "Why Healthcare Providers Trust GoBill",
    subtext: "We combine certified expertise with cutting-edge technology to deliver measurable results.",
  });
  log("  ✓ Trust content");

  await setDoc(doc(db, "siteContent", "whyGobill"), {
    heading: "Why GoBill?",
    description: "We don't just process claims — we optimize your entire revenue cycle. Our team of AAPC & AHIMA-certified professionals leverage advanced technology and deep industry expertise to ensure every dollar is captured.",
  });
  log("  ✓ Why GoBill content");

  await setDoc(doc(db, "siteContent", "partnership"), {
    heading: "Your Strategic RCM Partner",
    body: "Whether your billing model needs a complete overhaul or just an improvement, we'll build a tailored improvement plan with customized solutions specifically for your practice.",
  });
  log("  ✓ Partnership content");

  await setDoc(doc(db, "siteContent", "assessment"), {
    heading: "Ready to optimize your revenue cycle?",
    description: "Take our free practice assessment to discover opportunities for improved collections and reduced denials.",
    ctaText: "Start Free Assessment",
  });
  log("  ✓ Assessment CTA content");

  await setDoc(doc(db, "siteContent", "testimonials"), {
    heading: "What Our Clients Say",
    subtext: "Healthcare providers trust GoBill to deliver measurable results and exceptional service.",
  });
  log("  ✓ Testimonials content");

  await setDoc(doc(db, "siteContent", "footer"), {
    ctaHeading: "Billing to profitability",
    ctaSubtext: "Driving Profitability and Value Creation through Strategic RCM",
    motto: "GoBill is a premier medical billing company dedicated to simplifying the complex world of healthcare revenue cycle management.",
    copyright: "Copyright © 2025 GoBill. All Rights Reserved.",
  });
  log("  ✓ Footer content");

  log("🎉 Seeding complete! All data has been written to Firestore.");
}
