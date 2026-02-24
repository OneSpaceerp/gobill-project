import { Link } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const expertiseLinks = [
    { text: "Medical Billing Services", path: "/solutions/medical-billing-and-coding" },
    { text: "Data & Reporting Analytics", path: "/data-reporting-analytics" },
    { text: "AI-Powered Optimization", path: "/ai-optimization" },
    { text: "Provider Credentialing", path: "/solutions/provider-credentialing" },
  ];

  const whoWeServeLinks = [
    { text: "Large Practices", path: "#" },
    { text: "Medium Practices", path: "#" },
    { text: "Small Practices", path: "#" },
  ];

  const companyLinks = [
    { text: "Why GoBill", path: "/why-gobill" },
    { text: "About Us", path: "/about-us" },
    { text: "FAQs", path: "/faqs" },
    { text: "Site Map", path: "#" },
  ];

  const socialIcons = [
    {
      name: "Facebook",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://www.facebook.com/gobillsolutions",
    },
    {
      name: "Instagram",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: "https://www.instagram.com/gobillsolutions",
    },
    {
      name: "LinkedIn",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/company/gobill-solutions",
    },
  ];

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-family)",
    fontWeight: 400,
    fontSize: 15,
    color: "rgba(255,255,255,0.85)",
    transition: "color 0.2s ease, transform 0.2s ease",
    display: "block",
    padding: "4px 0",
    textDecoration: "none",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "var(--font-family)",
    fontWeight: 600,
    fontSize: 18,
    color: "#fff",
    marginBottom: 16,
  };

  return (
    <footer
      style={{
        background: "var(--footer-gradient)",
        padding: 0,
      }}
    >
      {/* Top CTA Strip */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 24px 48px",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 600,
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Billing to profitability
        </h2>
        <p
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 400,
            fontSize: "clamp(15px, 1.3vw, 22px)",
            color: "rgba(255,255,255,0.9)",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Driving Profitability and Value Creation through Strategic RCM
        </p>
      </div>

      {/* Main Footer Content */}
      <div
        className="container"
        style={{
          padding: "48px 24px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
            gap: 32,
            alignItems: "start",
          }}
        >
          {/* Logo + Motto */}
          <div>
            <img
              src="https://c.animaapp.com/WhTQfAgd/img/screenshot-2025-11-09-095433-1@2x.png"
              alt="GoBill Logo"
              style={{
                width: 160,
                height: "auto",
                marginBottom: 20,
                filter: "brightness(0) invert(1)",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 400,
                fontSize: 16,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              From Billing to Brilliance: Financial excellence powered by AI
            </p>
            {/* Let's Have a Talk Button */}
            <div style={{ marginBottom: 24 }}>
              <Link
                to="/book-a-meeting"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 28px",
                  background: "#fff",
                  color: "var(--text-dark)",
                  borderRadius: "var(--radius-btn)",
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: 15,
                  border: "1px solid var(--primary)",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap" as const,
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "var(--text-dark)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Let's Have a Talk
              </Link>
            </div>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: 16,
              }}
            >
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.name}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#850eb1";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 style={headingStyle}>Expertise</h3>
            {expertiseLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Who We Serve */}
          <div>
            <h3 style={headingStyle}>Who We Serve</h3>
            {whoWeServeLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Blogs */}
          <div>
            <h3 style={headingStyle}>Blogs</h3>
            <Link
              to="/blogs"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              Blogs
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 style={headingStyle}>Company</h3>
            {companyLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                style={linkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={headingStyle}>Contact Us</h3>
            <Link
              to="/contact-us"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          padding: "20px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            © GoBill 2025
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms and Conditions", path: "/terms-and-conditions" },
              { label: "Contact", path: "/contact-us" }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  transition: "color 0.2s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:first-child {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .footer-grid > div:first-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
