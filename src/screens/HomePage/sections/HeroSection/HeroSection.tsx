import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/* ──────────────────────────────────────
   Icons
   ────────────────────────────────────── */
const Icons = {
  Expertise: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.45.62 2.84 1.5 3.5.76.76 1.23 1.52 1.41 2.5" /><path d="M12 2v2" /><path d="M12 14v2" /><path d="M20 8h2" /><path d="M2 8h2" />
    </svg>
  ),
  Blogs: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  WhoWeServe: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Company: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  ),
  Contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" />
    </svg>
  )
};

/* ──────────────────────────────────────
   Navigation data matching updated brief
   ────────────────────────────────────── */
const expertiseMenu = [
  {
    label: "Medical Billing Services",
    path: "/solutions/medical-billing-and-coding",
    subMenu: [
      { label: "Medical Billing Services", path: "/solutions/medical-billing-and-coding" },
      { label: "Revenue Cycle Management (RCM)", path: "/solutions/rcm" },
      { label: "A/R Collections Management", path: "/solutions/ar-collections-management" },
      { label: "Denial Management", path: "/solutions/denial-management" },
    ]
  },
  {
    label: "Virtual Patient Engagement Officer",
    path: "/solutions/virtual-front-desk-officer",
    subMenu: [
      { label: "Virtual Patient Engagement Officer", path: "/solutions/virtual-front-desk-officer" },
      { label: "Pre-Authorization and Eligibility Verification", path: "/solutions/pre-authorization" },
      { label: "Appointment Scheduling", path: "/solutions/appointment-scheduling" },
    ]
  },
  {
    label: "Provider Credentialing",
    path: "/solutions/provider-credentialing",
    subMenu: [{ label: "The Process", path: "/solutions/provider-credentialing#process" }]
  },
];

const companyMenu = [
  { label: "About Us", path: "/about-us" },
  { label: "Why GoBill", path: "/why-gobill" },
  { label: "FAQs", path: "/faqs" },
];

const whoWeServeMenu = [
  { label: "Large Practices", path: "#", isStatic: true },
  { label: "Medium Practices", path: "#", isStatic: true },
  { label: "Small Practices", path: "#", isStatic: true }
];

/* ── Reusable dropdown component ── */
const Dropdown = ({
  label,
  icon,
  items,
  open,
  toggle,
  onClose,
}: {
  label: string;
  icon?: React.ReactNode;
  items: any[];
  open: boolean;
  toggle: () => void;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setTimeout(() => onClose(), 0);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose, open]);

  return (
    <div ref={ref} onMouseLeave={() => setHoveredSubmenu(null)} style={{ position: "relative" }}>
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
        {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
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
          {items.map((item, idx) => {
            if (item.isStatic) {
              return (
                <div
                  key={idx}
                  style={{
                    display: "block",
                    padding: "11px 20px",
                    fontFamily: "var(--font-family)",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "var(--text-dark)",
                    borderLeft: "3px solid transparent",
                    cursor: "default"
                  }}
                >
                  {item.label}
                </div>
              );
            }

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSubmenu(item.label)}
                style={{ position: "relative" }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "11px 20px",
                    fontFamily: "var(--font-family)",
                    fontSize: 14,
                    fontWeight: 400,
                    textDecoration: "none",
                    transition: "all 0.15s",
                    borderLeft: "3px solid transparent",
                    cursor: "pointer",
                    background: hoveredSubmenu === item.label ? "rgba(102,95,253,0.06)" : "transparent",
                    color: hoveredSubmenu === item.label ? "var(--primary)" : "var(--text-dark)",
                    borderLeftColor: hoveredSubmenu === item.label ? "var(--primary)" : "transparent",
                  }}
                >
                  {item.label}
                  {item.subMenu && (
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* SubMenu implementation */}
                {item.subMenu && hoveredSubmenu === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      background: "#fff",
                      borderRadius: 8,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                      padding: "8px 0",
                      minWidth: 180,
                      zIndex: 201,
                      marginLeft: 2
                    }}
                  >
                    {item.subMenu.map((sub: any, sIdx: number) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        onClick={onClose}
                        style={{
                          display: "block",
                          padding: "8px 20px",
                          fontFamily: "var(--font-family)",
                          fontSize: 13,
                          color: "var(--text-dark)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dark)"}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
          {/* Expertise ▾ */}
          <Dropdown
            label="Expertise"
            icon={Icons.Expertise}
            items={expertiseMenu}
            open={openDropdown === "expertise"}
            toggle={() =>
              setOpenDropdown(openDropdown === "expertise" ? null : "expertise")
            }
            onClose={() => setOpenDropdown(null)}
          />

          {/* Who We Serve ▾ */}
          <Dropdown
            label="Who We Serve"
            icon={Icons.WhoWeServe}
            items={whoWeServeMenu}
            open={openDropdown === "whoWeServe"}
            toggle={() =>
              setOpenDropdown(openDropdown === "whoWeServe" ? null : "whoWeServe")
            }
            onClose={() => setOpenDropdown(null)}
          />

          {/* Company ▾ */}
          <Dropdown
            label="Company"
            icon={Icons.Company}
            items={companyMenu}
            open={openDropdown === "company"}
            toggle={() =>
              setOpenDropdown(openDropdown === "company" ? null : "company")
            }
            onClose={() => setOpenDropdown(null)}
          />

          {/* Blogs */}
          <Link
            to="/blogs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
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
            {Icons.Blogs} Blogs
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact-us"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
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
            {Icons.Contact} Contact Us
          </Link>
        </nav>

        {/* ── Desktop Right ── */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <Link
            to="/assessment"
            className="btn-primary"
            style={{ padding: "8px 16px", fontSize: 12, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Complimentary Assessment
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
          {/* Expertise accordion */}
          <div style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "expertise" ? null : "expertise")}
              style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0", background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-family)", fontSize: 16, fontWeight: 500, color: "var(--text-dark)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>{Icons.Expertise} Expertise</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: mobileExpanded === "expertise" ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === "expertise" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {expertiseMenu.map((item, idx) => (
                  <div key={idx}>
                    <Link to={item.path} onClick={() => setMobileOpen(false)}
                      style={{ display: "block", padding: "10px 0", fontSize: 15, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                    {item.subMenu && (
                      <div style={{ paddingLeft: 16 }}>
                        {item.subMenu.map((sub: any, sIdx: number) => (
                          <Link key={sIdx} to={sub.path} onClick={() => setMobileOpen(false)}
                            style={{ display: "block", padding: "6px 0", fontSize: 14, color: "var(--text-gray)", fontFamily: "var(--font-family)", textDecoration: "none" }}
                          >
                            ↳ {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Who We Serve accordion */}
          <div style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "whoWeServe" ? null : "whoWeServe")}
              style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0", background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-family)", fontSize: 16, fontWeight: 500, color: "var(--text-dark)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>{Icons.WhoWeServe} Who We Serve</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: mobileExpanded === "whoWeServe" ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === "whoWeServe" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {whoWeServeMenu.map((item, idx) => (
                  <div key={idx} style={{ display: "block", padding: "10px 0", fontSize: 15, color: "var(--text-dark)", fontFamily: "var(--font-family)", cursor: "default" }}>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

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
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>{Icons.Company} Company</span>
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

          {/* Blogs */}
          <Link to="/blogs" onClick={() => setMobileOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 0", fontSize: 16, fontWeight: 500, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
          >
            {Icons.Blogs} Blogs
          </Link>

          {/* Contact Us */}
          <Link to="/contact-us" onClick={() => setMobileOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 0", fontSize: 16, fontWeight: 500, color: "var(--text-dark)", fontFamily: "var(--font-family)", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
          >
            {Icons.Contact} Contact Us
          </Link>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
            <Link to="/assessment" className="btn-primary" onClick={() => setMobileOpen(false)}
              style={{ padding: "12px 24px", fontSize: 15, textAlign: "center", textDecoration: "none" }}>
              Complimentary Assessment
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
