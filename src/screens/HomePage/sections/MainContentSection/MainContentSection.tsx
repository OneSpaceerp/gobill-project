import ellipse35 from "../../../../assets/outsource/Ellipse-35.png";
import ellipse36 from "../../../../assets/outsource/Ellipse-36.svg";

export const MainContentSection = (): JSX.Element => {
  /* ==============================
     DATA
     ============================== */

  const trustBadges = [
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163176@2x.png",
      title: "Trusted by Health Care Providers",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163180@2x.png",
      title: "Certified Billers",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163179@2x.png",
      title: "Proven Revenue Growth",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-3@2x.png",
      title: "HIPAA-Compliant Operations",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/layer-8@2x.png",
      title: "10+ Years of Industry Experience",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163177@2x.png",
      title: "Full-Service RCM",
    },
  ];

  const keyAdvantages = [
    { text: "Certified Expertise – Managed by AAPC & AHIMA-certified billers", offset: 0 },
    { text: "Fewer Denials – 99% first-pass claim approval rate", offset: -60 }, // Push left to clear the hollow ring
    { text: "Boost revenue by up to 25% within 90 days", offset: -60 },
    { text: "Seamless Integration – Works with your existing EMR and workflow", offset: 0 },
  ];

  const whyGoBillFeatures = [
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163112@2x.png",
      title: "Guaranteed High Reimbursement Rates",
      desc: "Our certified experts focus on maximizing your collections using New York-specific payer rules, ensuring you receive the highest possible payment for every claim submitted.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163116@2x.png",
      title: "Rapid and Accurate Claim Submissions",
      desc: "We leverage state-of-the-art technology to submit clean claims fast, drastically reducing the chance of rejection and ensuring quick turnaround on payments.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163119@2x.png",
      title: "Personalized New York Client Support",
      desc: "GoBill provides dedicated account managers located in the US who understand the unique compliance and regulatory landscape of New York healthcare.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163107@2x.png",
      title: "Actionable, Transparent Reporting",
      desc: "Receive customized reports on A/R aging, denial trends, and payment analysis, giving you real-time visibility and control over your practice's financial health.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163124@2x.png",
      title: "Proactive Authorization Management",
      desc: "We actively track and manage referrals and prior authorizations before the service is rendered, eliminating costly retroactive denials.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/uit-shield.svg",
      title: "Expert Denial & Appeals Management",
      desc: "Our team proactively follows up, appeals, and re-submits complicated claims with tenacious expertise to recover revenue others leave on the table.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-163130@2x.png",
      title: "Significant Reduction in Overhead Costs",
      desc: "By outsourcing to GoBill, you eliminate the need for in-house billing staff, software, and training, turning a fixed expense into a predictable cost.",
    },
    {
      icon: "https://c.animaapp.com/WhTQfAgd/img/group-4@2x.png",
      title: "Iron-Clad HIPAA & Compliance",
      desc: "We adhere to the strictest federal and New York state compliance standards, including HIPAA, protecting your practice from regulatory risk.",
    },
  ];

  const blogPosts = [
    {
      image: "https://c.animaapp.com/WhTQfAgd/img/image@4x.png",
      title: "How AI is Revolutionizing Medical Billing in 2025",
      date: "January 10, 2024",
    },
    {
      image: "https://c.animaapp.com/WhTQfAgd/img/unsplash-k8oak9bhx7m@4x.png",
      title: "5 Ways to Reduce Claim Denials and Maximize Revenue",
      date: "January 10, 2024",
    },
    {
      image: "https://c.animaapp.com/WhTQfAgd/img/image-1@4x.png",
      title: "The Complete Guide to Revenue Cycle Management",
      date: "January 10, 2024",
    },
  ];

  const testimonials = [
    {
      avatar: "https://c.animaapp.com/WhTQfAgd/img/ellipse-39-2@2x.png",
      name: "Dr. Emily R.",
      clinic: "Orthopedic Surgeon",
      quote:
        "GoBill completely turned around our revenue cycle. Our denial rate dropped by 25% in the first three months, and their team is always one step ahead.",
    },
    {
      avatar: "https://c.animaapp.com/WhTQfAgd/img/ellipse-39-2@2x.png",
      name: "Mark S.",
      clinic: "Practice Manager",
      quote:
        "Outsourcing to GoBill was the best financial decision we’ve made. The transparency and reporting give us peace of mind, knowing every dollar is accounted for.",
    },
    {
      avatar: "https://c.animaapp.com/WhTQfAgd/img/ellipse-39-2@2x.png",
      name: "Sarah J.",
      clinic: "Clinic Administrator",
      quote:
        "Their Provider Credentialing team is top-notch. What used to take us months was handled swiftly and efficiently.",
    },
  ];

  /* ==============================
     RENDER
     ============================== */
  return (
    <>
      {/* =========================================
          SECTION: Trust Icons
          ========================================= */}
      <section
        id="trust"
        style={{
          background: "var(--bg-trust)",
          padding: "48px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: 16,
              width: "100%",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 600,
                fontSize: "clamp(24px, 2.5vw, 36px)",
                color: "#fff",
                marginBottom: 8,
              }}
            >
              Compliance & Security You Can Trust
            </h2>
            <p
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.2vw, 20px)",
                color: "rgba(255,255,255,0.9)",
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              GoBill is fully HIPAA-compliant with secure, encrypted workflows
              designed to protect your patients' data at every step
            </p>
          </div>
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                width: 160,
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={badge.icon}
                  alt={badge.title}
                  style={{ width: 48, height: 48, objectFit: "contain" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          SECTION: Outsource Medical Billing
          ========================================= */}
      <section
        id="why-gobill"
        style={{
          padding: "var(--section-pad-y) 0",
          background: "#fff",
        }}
      >
        <div className="container">
          {/* Top: Header + Key Advantages */}
          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 80,
            }}
          >
            {/* Left Image */}
            <div
              style={{
                flex: "1 1 400px",
                minWidth: 300,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  left: 40,
                  width: "80%",
                  height: "80%",
                  background: "#0B0552",
                  borderRadius: 20,
                  zIndex: 0,
                }}
              />
              <img
                src="https://c.animaapp.com/WhTQfAgd/img/rectangle-43.svg"
                alt="Medical billing professionals at work"
                style={{
                  width: "100%",
                  maxWidth: 509,
                  position: "relative",
                  zIndex: 1,
                  borderRadius: 20,
                }}
              />
            </div>

            {/* Right Info */}
            <div style={{ flex: "1 1 400px", minWidth: 300 }}>
              <h2
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 600,
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  color: "#10217D",
                  marginBottom: 16,
                  letterSpacing: "0.11px",
                }}
              >
                Outsource Medical Billing Services That Drive Real Growth
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.5vw, 24px)",
                  color: "#000",
                  lineHeight: 1.6,
                  marginBottom: 32,
                  letterSpacing: "0.08px",
                }}
              >
                Discover how GoBill helps medical practices reduce denials,
                improve reimbursements, and scale efficiently through expert
                billing and data-backed strategy.
              </p>

              {/* Key Advantages Pills with C-Ring Graphic */}
              <div
                className="advantages-graphic-container"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  minHeight: 380, // Provide baseline height for the ring
                  paddingRight: 40, // Padding to ensure text isn't entirely blocked by the ring on small screens
                }}
              >
                {/* The Graphic Rings (Background) */}
                <div
                  className="advantages-rings"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 320,
                    height: 320,
                    zIndex: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end", // Align to right natively
                  }}
                >
                  {/* Thick Outer Ring */}
                  <img
                    src={ellipse35}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  {/* Inner Cutout/Circle */}
                  <img
                    src={ellipse36}
                    alt=""
                    style={{
                      position: "absolute",
                      width: "48%", // Sized accurately to create the crescent ring
                      height: "48%",
                      objectFit: "contain",
                      right: 18, // Shift perfectly right to form the C-shape
                      zIndex: 2,
                    }}
                  />
                </div>

                <div
                  className="advantages-pills"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    width: "100%",
                    position: "relative",
                    alignItems: "flex-end", // Align right towards the circle
                    zIndex: 3,
                  }}
                >
                  {keyAdvantages.map((adv, idx) => (
                    <div
                      key={idx}
                      className="advantage-pill"
                      style={{
                        background: "#10217D",
                        borderRadius: 30,
                        padding: "16px 28px",
                        border: "8px solid #fff", // White border masks the ring beneath it!
                        transition: "all 0.3s ease",
                        cursor: "default",
                        width: "fit-content",
                        maxWidth: 400, // Constrain so it wraps like the Figma screenshot
                        transform: `translateX(${adv.offset}px)`, // Use transform for precise shift!
                        position: "relative",
                        zIndex: 4,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = `translateX(${adv.offset + 8}px)`;
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(16,33,125,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = `translateX(${adv.offset}px)`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 500,
                          fontSize: "clamp(15px, 1.3vw, 18px)",
                          color: "#fff",
                          letterSpacing: "0.07px",
                        }}
                      >
                        {adv.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Why GoBill — Tilted Cards Mosaic */}
          <div>
            <div
              style={{
                marginBottom: 48,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 600,
                  fontSize: "clamp(26px, 2.5vw, 36px)",
                  color: "#10217D",
                  marginBottom: 16,
                  letterSpacing: "0.13px",
                }}
              >
                Why GoBill?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.5vw, 24px)",
                  color: "#000",
                  lineHeight: 1.5,
                  maxWidth: 1000,
                  letterSpacing: "0.08px",
                }}
              >
                Our medical billing company offers an all-in-one coordinated
                process by certified experts that guarantees high reimbursement
                rates and maximizes your collection efficiency
              </p>
            </div>

            {/* Figma Snake Cards – Desktop */}
            <div
              className="why-cards-desktop"
              style={{
                maxWidth: 1000,
                margin: "0 auto",
                display: "flex", // Keep flex to center image
                justifyContent: "center",
              }}
            >
              <img
                src="/img/why-gobill.png"
                alt="Why GoBill Features Overview"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Mobile: Infinite Vertical Stacked Cards */}
            <div
              className="why-cards-mobile"
              style={{
                display: "none",
                width: "100%",
                height: 550, // Clip the overflow to create a window for the sliding cards
                overflow: "hidden",
                position: "relative",
                padding: "10px 16px",
              }}
            >
              <div
                className="marquee-track-vertical"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {[...whyGoBillFeatures, ...whyGoBillFeatures].map((feature, idx) => {
                  const colors = [
                    "#2C60FF", "#0291D3", "#9B62FF", "#233B82",
                    "#6E45FF", "#1B2C5F", "#4F5AFF", "#36C2C8",
                  ];
                  const colorIdx = idx % 8;
                  const isEven = idx % 2 === 0;
                  const rotation = isEven ? 5 : -5;

                  // For a perfect continuous loop spanning negative margins:
                  // The first item sets the baseline. 
                  // Every subsequent item pulls up -30.
                  const marginTop = idx === 0 ? 0 : -30;

                  return (
                    <div
                      key={idx}
                      style={{
                        width: "100%",
                        maxWidth: 380,
                        background: colors[colorIdx],
                        borderRadius: 24,
                        padding: "24px 28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: isEven ? "row" : "row-reverse",
                        gap: 20,
                        transform: `rotate(${rotation}deg)`,
                        marginTop,
                        position: "relative",
                        zIndex: idx,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 600,
                          fontSize: "clamp(16px, 4.5vw, 20px)",
                          color: "#fff",
                          lineHeight: 1.3,
                          flex: 1,
                          textAlign: isEven ? "left" : "right"
                        }}
                      >
                        {feature.title}
                      </span>
                      <div style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          style={{
                            width: 36,
                            height: 36,
                            objectFit: "contain",
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scrollMarqueeVertical {
            0% {
              transform: translateY(0);
            }
            100% {
              /* Exact measurement offset for perfectly jumping halfway down the doubled set */
              /* 15px is the offset required to account for the single missing 30px overlap at index 0 */
              transform: translateY(calc(-50% - 15px));
            }
          }
          @media (max-width: 900px) {
            .why-cards-desktop { display: none !important; }
            .why-cards-mobile { display: block !important; }
            .marquee-track-vertical {
              animation: scrollMarqueeVertical 25s linear infinite;
            }
          }
          @media (max-width: 600px) {
            #why-gobill > div > div:first-child {
              flex-direction: column;
            }
            .advantages-graphic-container {
              min-height: auto !important;
              padding-right: 0 !important;
            }
            .advantages-rings {
              display: none !important; /* Hide massive graphics on narrow mobile */
            }
            .advantages-pills {
               align-items: center !important; /* Stack centered evenly with no offsets */
            }
            .advantage-pill {
               transform: translateX(0) !important; 
            }
          }
        `}</style>
      </section>

      {/* =========================================
          SECTION: Partnership
          ========================================= */}
      <section
        style={{
          padding: "60px 0",
          background: "var(--bg-subtle)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "clamp(26px, 2.5vw, 36px)",
              color: "var(--primary-dark)",
              marginBottom: 20,
            }}
          >
            Partnership Without the Fine Print
          </h2>
          <p
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.3vw, 22px)",
              color: "#000",
              lineHeight: 1.7,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            At GoBill, we do things differently:
            <br />
            <strong>No Lock-In Contracts:</strong> Cancel anytime, penalty-free.
            <br />
            <strong>Pay Only for Results:</strong> Our fee is based solely on
            successful collections.
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION: Blog
          ========================================= */}
      <section
        id="blogs"
        style={{
          padding: "var(--section-pad-y) 0",
          background: "#fff",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 600,
                fontSize: "clamp(26px, 2.5vw, 36px)",
                color: "var(--primary-dark)",
                marginBottom: 12,
              }}
            >
              Our Blogs
            </h2>
            <p
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.3vw, 22px)",
                color: "#000",
              }}
            >
              Read more from our blogs
            </p>
          </div>

          <div
            className="blog-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              marginBottom: 40,
            }}
          >
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "var(--radius-card)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(16,33,125,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 220,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 500,
                      fontSize: 17,
                      color: "var(--m3-text-black)",
                      lineHeight: 1.4,
                      marginBottom: 12,
                    }}
                  >
                    {post.title}
                  </h3>
                  <time
                    style={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 500,
                      fontSize: 12,
                      color: "var(--text-muted)",
                    }}
                  >
                    {post.date}
                  </time>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="#all-blogs" className="btn-outline" style={{ fontSize: 18, padding: "16px 40px" }}>
              More Blogs
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .blog-grid {
              grid-template-columns: 1fr !important;
              max-width: 400px;
              margin-left: auto !important;
              margin-right: auto !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================
          SECTION: Complimentary Assessment CTA
          ========================================= */}
      <section
        id="assessment"
        style={{
          padding: "var(--section-pad-y) 0",
          background: "#fafafe",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "var(--bg-assessment)",
              borderRadius: "var(--radius-btn)",
              padding: "clamp(48px, 6vw, 80px) clamp(24px, 5vw, 60px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circle */}
            <img
              src="https://c.animaapp.com/WhTQfAgd/img/ellipse-38@2x.png"
              alt=""
              aria-hidden="true"
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: "50%",
                margin: "0 auto 32px",
                display: "block",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3vw, 40px)",
                color: "#fff",
                marginBottom: 28,
                lineHeight: 1.2,
              }}
            >
              Start Your Complimentary Practice Assessment
            </h2>
            <p
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.3vw, 22px)",
                color: "#fff",
                lineHeight: 1.6,
                maxWidth: 800,
                margin: "0 auto 40px",
              }}
            >
              Evaluate your company's medical billing and practice performance
              with our complimentary assessment and free expert consultation.
              Identify areas for improvement, boost your revenue cycle
              efficiency, and enjoy consistently high reimbursement rates.
            </p>
            <a
              href="#start-assessment"
              className="btn-outline"
              style={{
                background: "#fff",
                color: "var(--text-dark)",
                borderColor: "var(--primary)",
                fontSize: 20,
                padding: "18px 48px",
              }}
            >
              Start Now
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION: Testimonials
          ========================================= */}
      <section
        id="testimonials"
        style={{
          padding: "var(--section-pad-y) 0",
          background: "#fff",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 600,
                fontSize: "clamp(26px, 2.5vw, 36px)",
                color: "var(--primary-dark)",
                marginBottom: 16,
              }}
            >
              What Our Clients Say About GoBill
            </h2>
            <p
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.2vw, 20px)",
                color: "#000",
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              Trusted by healthcare professionals who turned their billing
              challenges into growth stories
            </p>
          </div>

          <div
            className="testimonials-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 30,
              marginBottom: 48,
            }}
          >
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-testimonial)",
                  padding: 32,
                  position: "relative",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 48px rgba(16,33,125,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-testimonial)";
                }}
              >
                {/* Quote Icon */}
                <img
                  src="https://c.animaapp.com/WhTQfAgd/img/sidekickicons-quotation-mark-1.svg"
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 16,
                    width: 60,
                    height: 60,
                    opacity: 0.15,
                  }}
                />

                {/* Avatar + Name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 20,
                  }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-family)",
                        fontWeight: 500,
                        fontSize: 15,
                        color: "#000",
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-family)",
                        fontWeight: 400,
                        fontSize: 13,
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {t.clinic}
                    </p>
                  </div>
                </div>

                <blockquote
                  style={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: 17,
                    color: "#000",
                    lineHeight: 1.5,
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </blockquote>
              </article>
            ))}
          </div>

          {/* Testimonial CTAs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <a href="#success-stories" className="btn-primary" style={{ fontSize: 18, padding: "16px 36px" }}>
              Read More Success Stories
            </a>
            <a href="#join" className="btn-outline" style={{ fontSize: 18, padding: "16px 36px" }}>
              Join the GoBill Network
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .testimonials-grid {
              grid-template-columns: 1fr !important;
              max-width: 450px;
              margin-left: auto !important;
              margin-right: auto !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};
