export const BlogSection = (): JSX.Element => {
  const services = [
    {
      step: 1,
      title: "Revenue Cycle\nManagement (RCM)",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-4.png",
      bgColor: "#2c60ff",
    },
    {
      step: 2,
      title: "A/R Collections\nManagement",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-6.png",
      bgColor: "#0191d3",
    },
    {
      step: 3,
      title: "Medical Billing",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-5.png",
      bgColor: "#9b62ff",
    },
    {
      step: 4,
      title: "Denial\nManagement",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-7.png",
      bgColor: "#233b82",
    },
    {
      step: 5,
      title: "Pre-Authorization &\nEligibility Verification",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon.png",
      bgColor: "#6e45ff",
    },
    {
      step: 6,
      title: "Provider\nCredentialing",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-3.png",
      bgColor: "#1b2c5f",
    },
    {
      step: 7,
      title: "Appointment\nScheduling",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-1.png",
      bgColor: "#4f5aff",
    },
    {
      step: 8,
      title: "Virtual Front-Desk\nOfficer",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-2.png",
      bgColor: "#36c2c8",
    },
  ];

  const row1 = services.slice(0, 4);
  const row2 = services.slice(4);

  const ArrowRight = () => (
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ flexShrink: 0 }}>
      <line x1="0" y1="10" x2="32" y2="10" stroke="#665FFD" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="32,4 40,10 32,16" fill="#665FFD" />
    </svg>
  );

  const ArrowLeft = () => (
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ flexShrink: 0 }}>
      <line x1="8" y1="10" x2="40" y2="10" stroke="#665FFD" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="8,4 0,10 8,16" fill="#665FFD" />
    </svg>
  );

  const ArrowDown = () => (
    <svg width="20" height="44" viewBox="0 0 20 44" fill="none">
      <line x1="10" y1="0" x2="10" y2="36" stroke="#665FFD" strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="4,36 10,44 16,36" fill="#665FFD" />
    </svg>
  );

  const Circle = ({
    service,
  }: {
    service: (typeof services)[0];
  }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        position: "relative",
      }}
    >
      {/* Step Badge */}
      <div
        style={{
          position: "absolute",
          top: -8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#fff",
          border: "2px solid #665FFD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-family)",
          fontWeight: 700,
          fontSize: 13,
          color: "#665FFD",
          zIndex: 2,
          boxShadow: "0 2px 8px rgba(102,95,253,0.2)",
        }}
      >
        {service.step}
      </div>
      {/* Circle */}
      <div
        style={{
          width: 170,
          height: 170,
          borderRadius: "50%",
          background: service.bgColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: 20,
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.06)";
          e.currentTarget.style.boxShadow = `0 16px 40px ${service.bgColor}60`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={service.icon}
            alt={service.title}
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 600,
            fontSize: 12,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.3,
            whiteSpace: "pre-line",
          }}
        >
          {service.title}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="services"
      style={{
        padding: "var(--section-pad-y) 0",
        background: "#fff",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 60,
            maxWidth: 600,
            margin: "0 auto 60px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "clamp(26px, 2.5vw, 32px)",
              color: "var(--navy)",
              marginBottom: 20,
              letterSpacing: "0.11px",
            }}
          >
            Your Search for Practice Solutions Stops Here
          </h2>
          <p
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.4vw, 22px)",
              color: "var(--text-black)",
              lineHeight: 1.5,
              letterSpacing: "0.08px",
            }}
          >
            Comprehensive medical practice management and billing solutions that
            optimize your revenue cycle and operational efficiency
          </p>
        </div>

        {/* ── Desktop Flow Layout ── */}
        <div className="steps-flow-desktop" style={{ maxWidth: 1050, margin: "0 auto" }}>
          {/* Row 1: Steps 1 → 2 → 3 → 4 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
            }}
          >
            {row1.map((s, i) => (
              <div key={s.step} style={{ display: "flex", alignItems: "center" }}>
                <Circle service={s} />
                {i < row1.length - 1 && (
                  <div style={{ padding: "0 8px" }}>
                    <ArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connector: Row 1 → Row 2 (right side) */}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 80 }}>
            <ArrowDown />
          </div>

          {/* Row 2: Steps 5 ← 6 ← 7 ← 8 (displayed right-to-left visually, but 8 → 5 in order) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
            }}
          >
            {row2
              .slice()
              .reverse()
              .map((s, i, arr) => (
                <div key={s.step} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && (
                    <div style={{ padding: "0 8px" }}>
                      <ArrowLeft />
                    </div>
                  )}
                  <Circle service={s} />
                </div>
              ))}
          </div>
        </div>

        {/* ── Mobile Grid Layout ── */}
        <div
          className="steps-flow-mobile"
          style={{
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.step}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Circle service={s} />
              {i < services.length - 1 && (
                <div style={{ padding: "4px 0" }}>
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-flow-desktop { display: none !important; }
          .steps-flow-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
};
