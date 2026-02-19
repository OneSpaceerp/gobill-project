import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/* ──────────────────────────────────────
   Navigation data matching original WP site
   ────────────────────────────────────── */
const solutionsMenu = [
  { label: "Revenue Cycle Management", path: "/solutions/rcm" },
  { label: "Medical Billing & Coding", path: "/solutions/medical-billing-and-coding" },
  { label: "Denial Management", path: "/solutions/denial-management" },
  { label: "Appointment Scheduling", path: "/solutions/appointment-scheduling" },
  { label: "AR & Collections Management", path: "/solutions/ar-collections-management" },
  { label: "Pre-Auth & Eligibility Verification", path: "/solutions/pre-authorization" },
  { label: "Provider Credentialing", path: "/solutions/provider-credentialing" },
];

const companyMenu = [
  { label: "About Us", path: "/about-us" },
  { label: "Why GoBill", path: "/why-gobill" },
];

/* ── Reusable dropdown component ── */
const Dropdown = ({
  label,
  items,
  open,
  toggle,
  onClose,
}: {
  label: string;
  items: { label: string; path: string }[];
  open: boolean;
  toggle: () => void;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={toggle}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-family)",
          fontSize: 15,
          fontWeight: 500,
          color: open ? "var(--primary)" : "var(--text-dark)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transition: "color 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = open ? "var(--primary)" : "var(--text-dark)")
        }
      >
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            transition: "transform 0.25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 12px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            padding: "8px 0",
            minWidth: 260,
            zIndex: 200,
            animation: "fadeIn 0.2s ease",
          }}
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={onClose}
              style={{
                display: "block",
                padding: "11px 20px",
                fontFamily: "var(--font-family)",
                fontSize: 14,
                fontWeight: 400,
                color: "var(--text-dark)",
                textDecoration: "none",
                transition: "all 0.15s",
                borderLeft: "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(102,95,253,0.06)";
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.borderLeftColor = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text-dark)";
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════
   Header Component
   ══════════════════════════════════════ */
export const HeroSection = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
        }}
      >
        {/* ── Logo ── */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <img
            src="https://c.animaapp.com/WhTQfAgd/img/screenshot-2025-11-08-040634-1@2x.png"
            alt="GoBill Logo"
            style={{ height: 44, width: "auto" }}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
          aria-label="Main navigation"
        >
          {/* Search icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--text-dark)",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Solutions ▾ */}
          <Dropdown
            label="Solutions"
            items={solutionsMenu}
            open={openDropdown === "solutions"}
            toggle={() =>
              setOpenDropdown(openDropdown === "solutions" ? null : "solutions")
            }
            onClose={() => setOpenDropdown(null)}
          />

          {/* Blogs */}
          <Link
            to="/blogs"
            style={{
              fontFamily: "var(--font-family)",
              fontSize: 15,
              fontWeight: 500,
              color: "var(--text-dark)",
              textDecoration: "none",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dark)")}
          >
            Blogs
          </Link>

          {/* Company ▾ */}
          <Dropdown
            label="Company"
            items={companyMenu}
            open={openDropdown === "company"}
            toggle={() =>
              setOpenDropdown(openDropdown === "company" ? null : "company")
            }
            onClose={() => setOpenDropdown(null)}
          />

          {/* Contact Us */}
          <Link
            to="/contact-us"
            style={{
              fontFamily: "var(--font-family)",
              fontSize: 15,
              fontWeight: 500,
              color: "var(--text-dark)",
              textDecoration: "none",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dark)")}
          >
            Contact Us
          </Link>
        </nav>

        {/* ── Desktop Right ── */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <a
            href="tel:+18884649750"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-family)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--primary-dark)",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +1 (888)-464-9750
          </a>
          <Link
            to="/assessment"
            className="btn-outline"
            style={{ padding: "10px 22px", fontSize: 13, textDecoration: "none" }}
          >
            Complimentary Assessment
          </Link>
          <Link
            to="/book-a-meeting"
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: 13, textDecoration: "none" }}
          >
            Book A Meeting
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: 24, height: 2, background: "var(--text-dark)", borderRadius: 2,
              transition: "transform 0.3s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              width: 24, height: 2, background: "var(--text-dark)", borderRadius: 2,
              transition: "opacity 0.3s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 24, height: 2, background: "var(--text-dark)", borderRadius: 2,
              transition: "transform 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* ── Mobile Menu Panel ── */}
      {mobileOpen && (
        <div
          className="mobile-menu-panel"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 0,
            padding: "8px 24px 24px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: "#fff",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          {/* Solutions accordion */}
          <div style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions")}
              style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0", background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-family)", fontSize: 16, fontWeight: 500, color: "var(--text-dark)",
              }}
            >
              Solutions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: mobileExpanded === "solutions" ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === "solutions" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {solutionsMenu.map((item, idx) => (
                  <Link key={idx} to={item.path} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "10px 0", fontSize: 15, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blogs */}
          <Link to="/blogs" onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "14px 0", fontSize: 16, fontWeight: 500, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
          >
            Blogs
          </Link>

          {/* Company accordion */}
          <div style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
              style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0", background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-family)", fontSize: 16, fontWeight: 500, color: "var(--text-dark)",
              }}
            >
              Company
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: mobileExpanded === "company" ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === "company" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {companyMenu.map((item, idx) => (
                  <Link key={idx} to={item.path} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "10px 0", fontSize: 15, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link to="/contact-us" onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "14px 0", fontSize: 16, fontWeight: 500, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
          >
            Contact Us
          </Link>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
            <a href="tel:+18884649750" style={{ fontFamily: "var(--font-family)", fontSize: 15, fontWeight: 500, color: "var(--primary-dark)", textAlign: "center", textDecoration: "none" }}>
              📞 +1 (888)-464-9750
            </a>
            <Link to="/assessment" className="btn-outline" onClick={() => setMobileOpen(false)}
              style={{ padding: "12px 24px", fontSize: 15, textAlign: "center", textDecoration: "none" }}>
              Complimentary Assessment
            </Link>
            <Link to="/book-a-meeting" className="btn-primary" onClick={() => setMobileOpen(false)}
              style={{ padding: "12px 24px", fontSize: 15, textAlign: "center", textDecoration: "none" }}>
              Book A Meeting
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
          .mobile-menu-panel { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
