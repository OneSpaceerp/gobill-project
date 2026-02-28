import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { solutionPages } from "../../data/solutionData";

/* ── Checkmark Icon ── */
const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="var(--primary)" fillOpacity="0.12" />
        <path d="M6 10L9 13L14 7" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Accordion Arrow ── */
const ArrowIcon = ({ open }: { open: boolean }) => (
    <svg
        width="20" height="20" viewBox="0 0 20 20" fill="none"
        style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}
    >
        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const SolutionPage = (): JSX.Element => {
    const { slug } = useParams<{ slug: string }>();
    const data = solutionPages.find((p) => p.slug === slug);
    const [expandedIdx, setExpandedIdx] = useState<number>(0);

    if (!data) {
        return (
            <main style={{ padding: "120px 24px 80px", textAlign: "center" }}>
                <h1 style={{ fontFamily: "var(--font-family)", fontSize: 36, color: "var(--text-dark)" }}>
                    Page Not Found
                </h1>
                <Link to="/" style={{ color: "var(--primary)", fontFamily: "var(--font-family)", fontSize: 18 }}>
                    ← Back to Home
                </Link>
            </main>
        );
    }

    return (
        <main>
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0655 0%, #10217D 50%, #665FFD 100%)",
                    padding: "110px 0 90px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute", top: -100, right: -100,
                        width: 400, height: 400, borderRadius: "50%",
                        background: "rgba(102,95,253,0.15)", filter: "blur(80px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute", bottom: -60, left: "30%",
                        width: 250, height: 250, borderRadius: "50%",
                        background: "rgba(102,95,253,0.1)", filter: "blur(60px)",
                    }}
                />
                <div className="container">
                    <p style={{
                        fontFamily: "var(--font-family)", fontWeight: 500, fontSize: 16,
                        color: "rgba(255,255,255,0.7)", marginBottom: 12,
                        letterSpacing: 1, textTransform: "uppercase",
                    }}>
                        Solutions
                    </p>
                    <h1 style={{
                        fontFamily: "var(--font-family)", fontWeight: 700,
                        fontSize: "clamp(32px, 4vw, 52px)", color: "#fff",
                        lineHeight: 1.15, marginBottom: 20, maxWidth: 700,
                    }}>
                        {data.heroTitle}
                    </h1>
                    <p style={{
                        fontFamily: "var(--font-family)", fontWeight: 400,
                        fontSize: "clamp(16px, 1.2vw, 20px)", color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6, maxWidth: 640, marginBottom: 32,
                    }}>
                        {data.tagline}
                    </p>
                    <Link
                        to="/assessment"
                        style={{
                            display: "inline-block", background: "#fff",
                            color: "var(--primary)", padding: "16px 36px",
                            borderRadius: 30, fontSize: 17, fontWeight: 600,
                            fontFamily: "var(--font-family)", textDecoration: "none",
                            transition: "all 0.3s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.3)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                        Book A Meeting
                    </Link>
                </div>
            </section>

            {/* ═══════════════════ INTRO DESCRIPTION ═══════════════════ */}
            <section style={{ padding: "72px 0 48px" }}>
                <div className="container">
                    <p style={{
                        fontFamily: "var(--font-family)", fontWeight: 400,
                        fontSize: "clamp(16px, 1.15vw, 19px)", color: "var(--text-body)",
                        lineHeight: 1.8, maxWidth: 900, margin: "0 auto", textAlign: "center",
                    }}>
                        {data.description}
                    </p>
                </div>
            </section>

            {/* ═══════════════════ CONTENT SECTIONS (alternating) ═══════════════════ */}
            {data.contentSections.map((section, idx) => (
                <section
                    key={idx}
                    style={{
                        padding: "60px 0",
                        background: idx % 2 === 0 ? "#fff" : "linear-gradient(135deg, rgba(102,95,253,0.03), rgba(16,33,125,0.04))",
                    }}
                >
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            flexDirection: section.layout === "left" ? "row-reverse" : "row",
                            alignItems: "center",
                            gap: 60,
                            flexWrap: "wrap",
                        }}
                    >
                        {/* Text side */}
                        <div style={{ flex: "1 1 460px" }}>
                            <h2 style={{
                                fontFamily: "var(--font-family)", fontWeight: 700,
                                fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--text-dark)",
                                marginBottom: 24, lineHeight: 1.2,
                            }}>
                                {section.title}
                            </h2>
                            {section.text.map((p, pIdx) => (
                                <p key={pIdx} style={{
                                    fontFamily: "var(--font-family)", fontWeight: 400,
                                    fontSize: 16, color: "var(--text-body)",
                                    lineHeight: 1.8, marginBottom: 16,
                                }}>
                                    {p}
                                </p>
                            ))}
                        </div>
                        {/* Visual side (decorative gradient block) */}
                        <div style={{
                            flex: "1 1 360px", minHeight: 300,
                            borderRadius: 20, overflow: "hidden",
                            background: idx % 2 === 0
                                ? "linear-gradient(135deg, #665FFD 0%, #10217D 100%)"
                                : "linear-gradient(135deg, #10217D 0%, #0a0655 100%)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            position: "relative",
                        }}>
                            <div style={{
                                width: 120, height: 120, borderRadius: "50%",
                                background: "rgba(255,255,255,0.08)", position: "absolute",
                                top: 40, left: 40,
                            }} />
                            <div style={{
                                width: 80, height: 80, borderRadius: "50%",
                                background: "rgba(255,255,255,0.06)", position: "absolute",
                                bottom: 30, right: 30,
                            }} />
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                {idx % 2 === 0 ? (
                                    <>
                                        <path d="M12 2v20M2 12h20" />
                                        <circle cx="12" cy="12" r="8" />
                                    </>
                                ) : (
                                    <>
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <path d="M3 9h18M9 21V9" />
                                    </>
                                )}
                            </svg>
                        </div>
                    </div>
                </section>
            ))}

            {/* ═══════════════════ DETAILED FEATURES (Accordion) ═══════════════════ */}
            <section style={{ padding: "80px 0", background: "linear-gradient(180deg, #f8f7ff 0%, #fff 100%)" }}>
                <div
                    className="container"
                    style={{
                        display: "flex", gap: 60, alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Accordion side */}
                    <div style={{ flex: "1 1 500px" }}>
                        <h2 style={{
                            fontFamily: "var(--font-family)", fontWeight: 700,
                            fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--text-dark)",
                            marginBottom: 12,
                        }}>
                            What's Included
                        </h2>
                        <p style={{
                            fontFamily: "var(--font-family)", fontSize: 16,
                            color: "var(--text-body)", lineHeight: 1.6,
                            marginBottom: 32,
                        }}>
                            Explore the details of our {data.title.toLowerCase()} services.
                        </p>
                        {data.detailedFeatures.map((feat, idx) => {
                            const isOpen = expandedIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        borderBottom: "1px solid rgba(0,0,0,0.08)",
                                        overflow: "hidden",
                                    }}
                                >
                                    <button
                                        onClick={() => setExpandedIdx(isOpen ? -1 : idx)}
                                        style={{
                                            display: "flex", alignItems: "center",
                                            justifyContent: "space-between", width: "100%",
                                            padding: "20px 0", border: "none",
                                            background: "none", cursor: "pointer",
                                            fontFamily: "var(--font-family)", fontWeight: 600,
                                            fontSize: 17, color: isOpen ? "var(--primary)" : "var(--text-dark)",
                                            textAlign: "left", transition: "color 0.2s",
                                        }}
                                    >
                                        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                            <span style={{
                                                width: 32, height: 32, borderRadius: 8,
                                                background: isOpen ? "var(--primary)" : "#f0f0f7",
                                                color: isOpen ? "#fff" : "var(--text-dark)",
                                                display: "flex", alignItems: "center",
                                                justifyContent: "center", fontSize: 14,
                                                fontWeight: 700, flexShrink: 0,
                                                transition: "all 0.2s",
                                            }}>
                                                {idx + 1}
                                            </span>
                                            {feat.title}
                                        </span>
                                        <ArrowIcon open={isOpen} />
                                    </button>
                                    <div
                                        style={{
                                            maxHeight: isOpen ? 200 : 0,
                                            opacity: isOpen ? 1 : 0,
                                            transition: "all 0.35s ease",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <p style={{
                                            fontFamily: "var(--font-family)", fontSize: 15,
                                            color: "var(--text-body)", lineHeight: 1.7,
                                            padding: "0 0 20px 44px",
                                            margin: 0,
                                        }}>
                                            {feat.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Visual side */}
                    <div style={{
                        flex: "1 1 360px", minHeight: 350,
                        borderRadius: 20, overflow: "hidden",
                        background: "linear-gradient(135deg, #0a0655 0%, #665FFD 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative",
                    }}>
                        <div style={{
                            width: 150, height: 150, borderRadius: "50%",
                            background: "rgba(255,255,255,0.06)", position: "absolute",
                            top: 50, right: 40,
                        }} />
                        <div style={{
                            width: 200, height: 200, borderRadius: "50%",
                            background: "rgba(255,255,255,0.04)", position: "absolute",
                            bottom: -30, left: -30,
                        }} />
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ STATS / METRICS ═══════════════════ */}
            {data.stats && (
                <section style={{ padding: "80px 0" }}>
                    <div
                        className="container"
                        style={{
                            display: "flex", gap: 60, alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {/* Visual side */}
                        <div style={{
                            flex: "1 1 340px", minHeight: 300,
                            borderRadius: 20,
                            background: "linear-gradient(135deg, #665FFD 0%, #10217D 100%)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            position: "relative", overflow: "hidden",
                        }}>
                            <div style={{
                                width: 100, height: 100, borderRadius: "50%",
                                background: "rgba(255,255,255,0.08)", position: "absolute",
                                top: 30, left: 30,
                            }} />
                            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8">
                                <path d="M18 20V10M12 20V4M6 20v-6" />
                            </svg>
                        </div>
                        {/* Content side */}
                        <div style={{ flex: "1 1 480px" }}>
                            <h2 style={{
                                fontFamily: "var(--font-family)", fontWeight: 700,
                                fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--text-dark)",
                                marginBottom: 12,
                            }}>
                                {data.stats.heading}
                            </h2>
                            {data.stats.subtext && (
                                <p style={{
                                    fontFamily: "var(--font-family)", fontSize: 16,
                                    color: "var(--text-body)", lineHeight: 1.6,
                                    marginBottom: 28,
                                }}>
                                    {data.stats.subtext}
                                </p>
                            )}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                gap: 16,
                            }}>
                                {data.stats.items.map((item, idx) => (
                                    <div key={idx} style={{
                                        display: "flex", alignItems: "center", gap: 12,
                                        padding: "12px 16px", borderRadius: 12,
                                        background: "rgba(102,95,253,0.04)",
                                        border: "1px solid rgba(102,95,253,0.08)",
                                    }}>
                                        <CheckIcon />
                                        <span style={{
                                            fontFamily: "var(--font-family)", fontSize: 15,
                                            color: "var(--text-dark)", fontWeight: 500,
                                        }}>
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {data.stats.closing && (
                                <p style={{
                                    fontFamily: "var(--font-family)", fontSize: 15,
                                    color: "var(--text-body)", lineHeight: 1.6,
                                    marginTop: 24,
                                }}>
                                    {data.stats.closing}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════ BENEFIT CARDS ═══════════════════ */}
            {data.benefitCards && (
                <section style={{
                    padding: "80px 0",
                    background: "linear-gradient(180deg, #f8f7ff 0%, #fff 100%)",
                }}>
                    <div className="container">
                        <h2 style={{
                            fontFamily: "var(--font-family)", fontWeight: 700,
                            fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--text-dark)",
                            textAlign: "center", marginBottom: 12,
                        }}>
                            The Benefits of Our {data.title}
                        </h2>
                        <p style={{
                            fontFamily: "var(--font-family)", fontSize: 16,
                            color: "var(--text-body)", textAlign: "center",
                            marginBottom: 48, maxWidth: 600, margin: "0 auto 48px",
                        }}>
                            Why healthcare practices choose GoBill for their {data.title.toLowerCase()} needs.
                        </p>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 28, maxWidth: 1200, margin: "0 auto",
                        }}>
                            {data.benefitCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#fff", borderRadius: 16,
                                        padding: "36px 28px", textAlign: "center",
                                        boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
                                        border: "1px solid rgba(0,0,0,0.04)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-6px)";
                                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(102,95,253,0.14)";
                                        e.currentTarget.style.borderColor = "rgba(102,95,253,0.2)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 2px 24px rgba(0,0,0,0.06)";
                                        e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
                                    }}
                                >
                                    <div style={{
                                        width: 56, height: 56, borderRadius: 16,
                                        background: "linear-gradient(135deg, #665FFD, #10217D)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        margin: "0 auto 20px",
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {idx === 0 && <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>}
                                            {idx === 1 && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>}
                                            {idx === 2 && <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>}
                                            {idx === 3 && <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>}
                                            {idx >= 4 && <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>}
                                        </svg>
                                    </div>
                                    <h3 style={{
                                        fontFamily: "var(--font-family)", fontWeight: 700,
                                        fontSize: 20, color: "var(--text-dark)", marginBottom: 12,
                                    }}>
                                        {card.title}
                                    </h3>
                                    <p style={{
                                        fontFamily: "var(--font-family)", fontSize: 15,
                                        color: "var(--text-body)", lineHeight: 1.6, margin: 0,
                                    }}>
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════ PARTNER SECTION ═══════════════════ */}
            {data.partnerSection && (
                <section style={{ padding: "80px 0" }}>
                    <div className="container" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                        <h2 style={{
                            fontFamily: "var(--font-family)", fontWeight: 700,
                            fontSize: "clamp(24px, 2.5vw, 36px)", color: "var(--text-dark)",
                            marginBottom: 20,
                        }}>
                            {data.partnerSection.title}
                        </h2>
                        <p style={{
                            fontFamily: "var(--font-family)", fontSize: 17,
                            color: "var(--text-body)", lineHeight: 1.8, marginBottom: 36,
                        }}>
                            {data.partnerSection.text}
                        </p>
                        <Link
                            to="/contact-us"
                            style={{
                                display: "inline-block", background: "var(--primary)",
                                color: "#fff", padding: "16px 36px",
                                borderRadius: 30, fontSize: 17, fontWeight: 600,
                                fontFamily: "var(--font-family)", textDecoration: "none",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(102,95,253,0.3)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                            Learn More
                        </Link>
                    </div>
                </section>
            )}

            {/* ═══════════════════ FINAL CTA ═══════════════════ */}
            <section
                style={{
                    padding: "80px 0",
                    background: "linear-gradient(135deg, #665FFD 0%, #10217D 100%)",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h2 style={{
                        fontFamily: "var(--font-family)", fontWeight: 700,
                        fontSize: "clamp(24px, 3vw, 40px)", color: "#fff",
                        marginBottom: 16,
                    }}>
                        {data.ctaTitle}
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-family)", fontWeight: 400,
                        fontSize: 18, color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6, maxWidth: 600,
                        margin: "0 auto 36px",
                    }}>
                        {data.ctaText}
                    </p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            to="/assessment"
                            style={{
                                display: "inline-block", background: "#fff",
                                color: "var(--primary)", padding: "16px 36px",
                                borderRadius: 30, fontSize: 17, fontWeight: 600,
                                fontFamily: "var(--font-family)", textDecoration: "none",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.3)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                            Start Free Assessment
                        </Link>
                        <Link
                            to="/contact-us"
                            style={{
                                display: "inline-block", background: "transparent",
                                color: "#fff", padding: "16px 36px", borderRadius: 30,
                                fontSize: 17, fontWeight: 500, fontFamily: "var(--font-family)",
                                textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};
