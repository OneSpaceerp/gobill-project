
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
    {
      step: 9,
      title: "Operation and\nFinancial Analysis",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-7.png",
      bgColor: "#0e7c6b",
    },
    {
      step: 10,
      title: "Data & Reporting\nAnalytics",
      icon: "https://c.animaapp.com/WhTQfAgd/img/icon-6.png",
      bgColor: "#e86833",
    },
  ];


  const getCirclePos = (index: number) => {
    // 10 items = 360 / 10 = 36 deg step
    // We want index 0 (Step 1) to be at -90 degrees (top)
    const angleDeg = (index * 36) - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    // Expanded ring radius to give circles breathing room
    const radius = 260;

    // We compute the X and Y translation from the center
    const x = Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * radius;

    return { x, y };
  };



  const Circle = ({
    service,
    isVisible = false,
    pos = { x: 0, y: 0 },
    isDesktop = true,
  }: {
    service: (typeof services)[0];
    isVisible?: boolean;
    pos?: { x: number; y: number };
    isDesktop?: boolean;
  }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        // If desktop, absolutely position relative to center of container
        position: isDesktop ? "absolute" : "relative",
        top: isDesktop ? "50%" : "auto",
        left: isDesktop ? "50%" : "auto",
        marginLeft: isDesktop ? -57.5 : 0, // Half of 115px width
        marginTop: isDesktop ? -57.5 : 0,  // Half of 115px height

        // Circle is permanently visible
        opacity: 1,
        transform: isDesktop ? `translate(${pos.x}px, ${pos.y}px) scale(1)` : 'translateY(0) scale(1)',
        pointerEvents: "auto",
        zIndex: 5,
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
          width: 115,
          height: 115,
          borderRadius: "50%",
          background: service.bgColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: 8,
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
        onMouseEnter={(e) => {
          if (!isVisible) return;
          e.currentTarget.style.transform = "translateY(-6px) scale(1.06)";
          e.currentTarget.style.boxShadow = `0 16px 40px ${service.bgColor}60`;
          e.currentTarget.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }}
        onMouseLeave={(e) => {
          if (!isVisible) return;
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
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
            style={{ width: 28, height: 28, objectFit: "contain" }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: 600,
            fontSize: 10,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.2,
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
        overflowX: "hidden", // Prevent horizontal scrollbar on transform
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            maxWidth: 600,
            margin: "0 auto 20px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "clamp(24px, 2.2vw, 28px)",
              color: "var(--navy)",
              marginBottom: 16,
              letterSpacing: "0.11px",
            }}
          >
            Your Search For The Ultimate RCM Partner Stops Here
          </h2>
          <p
            style={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "var(--text-black)",
              lineHeight: 1.5,
              letterSpacing: "0.08px",
            }}
          >
            Stop losing sleep over denied claims and shrinking margins. GoBill delivers end-to-end medical billing strategies that ensure you get paid faster, fuller, and with zero hassle.
          </p>
        </div>

        {/* ── Desktop Circular Layout ── */}
        <div className="steps-circular-desktop" style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              width: 720, // Bound size safely containing 2x radius (520) + circle width (115) + breath
              height: 720,
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* The Central Drawing Circle */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 520, // Matches double the 260 radius
                height: 520,
                borderRadius: "50%",
                border: "3px dashed rgba(102, 95, 253, 0.3)",
                zIndex: 1,
                // Fade in the ring once at least 1 circle is visible
                opacity: 1,
                transition: "opacity 1s ease",
              }}
            >
            </div>

            {/* The 10 Services Circles */}
            {services.map((s, i) => {
              const pos = getCirclePos(i);
              return (
                <Circle
                  key={s.step}
                  service={s}
                  isVisible={true}
                  pos={pos}
                  isDesktop={true}
                />
              );
            })}
          </div>
        </div>

        {/* ── Mobile Flow Layout ── */}
        <div
          className="steps-flow-mobile"
          style={{
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            maxHeight: "80vh",
            overflowY: "auto",
            paddingBottom: 40
          }}
        >
          {services.map((s) => {
            return (
              <Circle key={s.step} service={s} isVisible={true} isDesktop={false} />
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-circular-desktop { display: none !important; }
          .steps-flow-mobile { 
            display: grid !important; 
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 0 16px;
          }
        }
        @media (max-width: 500px) {
          .steps-flow-mobile { 
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section >
  );
};
