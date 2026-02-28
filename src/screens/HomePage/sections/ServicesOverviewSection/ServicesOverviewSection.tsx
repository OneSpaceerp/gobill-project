import { useState, useEffect, useCallback } from "react";

/* =============================================
   Slide 2 — "See How It Works" 8-step process
   Steps arranged in two rows of 4, connected by dashed lines
   Row 1: Steps 1, 3, 5, 7  (top text, bottom icon)
   Row 2: Steps 2, 4, 6, 8  (top icon, bottom text, right-aligned)
   ============================================= */
const stepsTop = [
  {
    number: 1,
    title: "Complimentary Assessment",
    desc: "We start with a free evaluation of your current billing process to uncover hidden revenue gaps and inefficiencies.",
    icon: "/img/step-1.svg",
  },
  {
    number: 3,
    title: "Seamless Integration & Automation",
    desc: "GoBill integrates directly into your existing workflow and EMR systems, so you don't lose time or disrupt patient care",
    icon: "/img/step-3.svg",
  },
  {
    number: 5,
    title: "Better Collections, Less Stress",
    desc: "Watch your revenue grow by up to 25%, with fewer denials, faster payments, and complete transparency every step of the way",
    icon: "/img/step-5.svg",
  },
  {
    number: 7,
    title: "Operation and Financial Analysis",
    desc: "We conduct thorough operational and financial analyses to identify inefficiencies, optimize workflows, and ensure your practice runs at peak performance.",
    icon: "/img/step-7.svg",
  },
];

const stepsBottom = [
  {
    number: 2,
    title: "Customized Strategy",
    desc: "Our certified billers design a plan tailored to your practice—from claims management to patient collections.",
    icon: "/img/step-2.svg",
  },
  {
    number: 4,
    title: "Data & Reporting Analytics",
    desc: "We provide detailed reporting and monthly insights into your revenue cycle, giving you the data to make informed, growth-focused decisions",
    icon: "/img/step-4.svg",
  },
  {
    number: 6,
    title: "AI-Powered Optimization",
    desc: "Our AI drives smarter billing by performing data analysis, risk management, evaluation, and cycle optimization, ensuring issues are prevented and your revenue cycle stays efficient",
    icon: "/img/step-6.svg",
  },
  {
    number: 8,
    title: "Data & Reporting Analytics",
    desc: "Receive comprehensive data analytics and custom reporting dashboards that give you real-time visibility into every aspect of your revenue cycle.",
    icon: "/img/step-8.svg",
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 2;

  const goTo = useCallback(
    (idx: number) => setActiveSlide((idx + totalSlides) % totalSlides),
    []
  );
  const next = useCallback(() => goTo(activeSlide + 1), [activeSlide, goTo]);
  const prev = useCallback(() => goTo(activeSlide - 1), [activeSlide, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next, isPaused]);

  const arrowBtn: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.92)",
    border: "1px solid rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    color: "var(--primary-dark)",
    cursor: "pointer",
    zIndex: 10,
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    backdropFilter: "blur(8px)",
  };

  /* Dashed connector line between icon circles */
  const connectorStyle: React.CSSProperties = {
    flex: 1,
    height: 3,
    backgroundImage:
      "repeating-linear-gradient(90deg, #09064E 0, #09064E 10px, transparent 10px, transparent 18px)",
    borderRadius: 50,
    margin: "0 -4px",
  };

  return (
    <section
      id="hero"
      style={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ─── Slide Track ─── */}
      <div
        style={{
          display: "flex",
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${activeSlide * (100 / totalSlides)}%)`,
          transition: "transform 0.7s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* ====================================
            SLIDE 1 — Hero  (original content)
            ==================================== */}
        <div
          style={{
            width: `${100 / totalSlides}%`,
            flexShrink: 0,
            background: "var(--bg-hero)",
            padding: "80px 0 60px",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 60,
              flexWrap: "wrap",
            }}
          >
            <div
              className="animate-fade-up"
              style={{ flex: "1 1 500px", minWidth: 320 }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  color: "var(--text-dark)",
                  lineHeight: 1.15,
                  marginBottom: 24,
                  letterSpacing: "0.17px",
                }}
              >
                From Billing to Brilliance
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  color: "var(--text-body)",
                  lineHeight: 1.6,
                  marginBottom: 40,
                  maxWidth: 680,
                  letterSpacing: "0.07px",
                }}
              >
                Unlock your practice’s true potential with AI-powered, expert-led revenue cycle management.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a
                  href="#book"
                  className="btn-primary"
                  style={{
                    fontSize: "clamp(16px, 1.2vw, 20px)",
                    padding: "18px 36px",
                  }}
                >
                  Book a Meeting
                </a>
                <a
                  href="#how-it-works"
                  className="btn-outline"
                  style={{
                    fontSize: "clamp(16px, 1.2vw, 20px)",
                    padding: "18px 36px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(1);
                  }}
                >
                  See How It Works
                </a>
              </div>
            </div>
            <div
              className="animate-fade-in"
              style={{
                flex: "1 1 400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
                minWidth: 300,
              }}
            >
              <video
                src="/img/gobill_hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  maxWidth: 360,
                  height: "auto",
                  borderRadius: 16,
                  boxShadow: "0 12px 40px rgba(16,33,125,0.2)",
                }}
              />
              <div
                style={{
                  background: "#fff",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-hero-card)",
                  padding: "24px 28px",
                  maxWidth: 400,
                  width: "100%",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: 16,
                    color: "#000",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Boost your practice revenue by up to 25% with certified,
                  HIPAA-compliant billing and revenue cycle solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================
            SLIDE 2 — "See How It Works" 6-Step
            Zigzag layout matching the Figma design
            ==================================== */}
        <div
          style={{
            width: `${100 / totalSlides}%`,
            flexShrink: 0,
            background: "#F7F7FF",
            padding: "60px 0 40px",
            position: "relative",
          }}
        >
          <div className="container" style={{ position: "relative" }}>
            {/* ── Heading ── */}
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: 20,
                  color: "#10217D",
                  margin: "0 0 12px",
                }}
              >
                See How It Works
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  color: "black",
                  lineHeight: 1.25,
                  maxWidth: 900,
                  margin: "0 auto",
                }}
              >
                A proven 8-step process to boost your collections and simplify
                your workflow
              </h2>
            </div>

            {/* ── Steps Area with background image ── */}
            <div
              className="steps-area"
              style={{
                backgroundImage: "url(/img/steps-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20,
                padding: "40px 32px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Semi-transparent overlay for readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(247, 247, 255, 0.85)",
                  borderRadius: 20,
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* ── ROW 1: Steps 1, 3, 5 (text on top, icon row below) ── */}
                <div
                  className="step-text-row-top"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: 28,
                    marginBottom: 16,
                  }}
                >
                  {stepsTop.map((step) => (
                    <div key={step.number}>
                      <p
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#09064E",
                          margin: 0,
                          lineHeight: 1.4,
                          fontStyle: "italic",
                        }}
                      >
                        Step {step.number}—
                        <br />
                        <strong style={{ fontWeight: 500, fontStyle: "italic" }}>{step.title}</strong>
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 400,
                          fontSize: 14,
                          color: "#343434",
                          margin: "8px 0 0",
                          lineHeight: 1.55,
                          maxWidth: 310,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ── ICON ROW: All 6 icons connected by dashed lines ── */}
                <div
                  className="icon-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0,
                    margin: "16px 0",
                  }}
                >
                  {/* Step 1 icon */}
                  <img src={stepsTop[0].icon} alt="Step 1" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 2 icon */}
                  <img src={stepsBottom[0].icon} alt="Step 2" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 3 icon */}
                  <img src={stepsTop[1].icon} alt="Step 3" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 4 icon */}
                  <img src={stepsBottom[1].icon} alt="Step 4" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 5 icon */}
                  <img src={stepsTop[2].icon} alt="Step 5" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 6 icon */}
                  <img src={stepsBottom[2].icon} alt="Step 6" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 7 icon */}
                  <img src={stepsTop[3].icon} alt="Step 7" style={{ width: 64, height: 64, flexShrink: 0 }} />
                  <div style={connectorStyle} />
                  {/* Step 8 icon */}
                  <img src={stepsBottom[3].icon} alt="Step 8" style={{ width: 64, height: 64, flexShrink: 0 }} />
                </div>

                {/* ── ROW 2: Steps 2, 4, 6 (icon row above, text below right-aligned) ── */}
                <div
                  className="step-text-row-bottom"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: 28,
                    marginTop: 16,
                  }}
                >
                  {stepsBottom.map((step) => (
                    <div key={step.number} style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#09064E",
                          margin: 0,
                          lineHeight: 1.4,
                          fontStyle: "italic",
                        }}
                      >
                        Step {step.number}—
                        <br />
                        <strong style={{ fontWeight: 500, fontStyle: "italic" }}>{step.title}</strong>
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 400,
                          fontSize: 14,
                          color: "#343434",
                          margin: "8px 0 0",
                          lineHeight: 1.55,
                          marginLeft: "auto",
                          maxWidth: 340,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CTA Button ── */}
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a
                href="#assessment"
                style={{
                  display: "inline-block",
                  background: "#665FFD",
                  borderRadius: 30,
                  padding: "20px 48px",
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: "clamp(18px, 1.5vw, 24px)",
                  color: "#fff",
                  letterSpacing: "0.08px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 32px rgba(102,95,253,0.30)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#5750e6";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(102,95,253,0.40)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#665FFD";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(102,95,253,0.30)";
                }}
              >
                Start Your Complimentary Assessment Today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Arrows ─── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{ ...arrowBtn, left: 20 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--primary)";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.92)";
          e.currentTarget.style.color = "var(--primary-dark)";
          e.currentTarget.style.transform = "translateY(-50%)";
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{ ...arrowBtn, right: 20 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--primary)";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.92)";
          e.currentTarget.style.color = "var(--primary-dark)";
          e.currentTarget.style.transform = "translateY(-50%)";
        }}
      >
        ›
      </button>

      {/* ─── Dots ─── */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 10,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            style={{
              width: activeSlide === idx ? 32 : 12,
              height: 12,
              borderRadius: 6,
              background:
                activeSlide === idx ? "var(--primary)" : "rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ─── Responsive ─── */}
      <style>{`
        @media (max-width: 768px) {
          #hero .container {
            flex-direction: column;
            text-align: center;
          }
          .step-text-row-top,
          .step-text-row-bottom {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .step-text-row-bottom > div {
            text-align: left !important;
          }
          .icon-row {
            flex-wrap: wrap !important;
            gap: 12px !important;
            justify-content: center !important;
          }
          .icon-row > div {
            display: none !important;
          }
          .steps-area {
            padding: 24px 16px !important;
          }
        }
        @media (max-width: 1024px) {
          .icon-row img {
            width: 64px !important;
            height: 64px !important;
          }
        }
      `}</style>
    </section>
  );
};
