const Icons = {
  Sparkles: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18"></path><path d="M3 12h18"></path><path d="M16 8l-8 8"></path><path d="M8 8l8 8"></path>
    </svg>
  ),
  Eye: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  Dollar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Calendar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  AlertTriangle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  ),
  Search: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  List: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  ),
  TrendingUp: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  TrendingDown: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>
    </svg>
  )
};

export const DashboardSlide = () => {
  return (
    <div
      style={{
        background: "#F8FAFC",
        borderRadius: 16,
        padding: "24px",
        fontFamily: "'Inter', sans-serif",
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)",
        border: "1px solid #E2E8F0",
        margin: "0 auto",
        maxWidth: 1100,
        textAlign: "left",
      }}
    >
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "#1E293B" }}>Good evening, Dr. Davis</h3>
          <p style={{ margin: "4px 0 0", fontSize: 14, color: "#64748B" }}>
            Revenue is up <span style={{ color: "#10B981", fontWeight: 500 }}>5.1%</span> this month, but <span style={{ color: "#EF4444", fontWeight: 500 }}>$71K</span> is at risk. You have <strong style={{color: "#334155"}}>3 urgent tasks</strong> pending.
          </p>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#0D9488",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "10px 16px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer"
          }}
        >
          {Icons.Sparkles} Ask AI
        </button>
      </div>

      {/* PRACTICE PERFORMANCE SCORE */}
      <div style={{ background: "white", borderRadius: 12, padding: "20px 24px", marginBottom: 20, display: "flex", alignItems: "center", border: "1px solid #E2E8F0" }}>
        <div style={{ paddingRight: 32, borderRight: "1px solid #E2E8F0", minWidth: 160 }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Practice Performance Score</p>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <h2 style={{ margin: 0, fontSize: 48, fontWeight: 700, color: "#EF4444", lineHeight: 1 }}>59</h2>
            <p style={{ margin: "4px 0 0", fontSize: 14, fontWeight: 600, color: "#EF4444" }}>Critical</p>
            <p style={{ margin: "4px 0 0", fontSize: 12, fontWeight: 500, color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
              {Icons.TrendingUp} +1 vs last month
            </p>
          </div>
        </div>
        
        <div style={{ display: "flex", flex: 1, padding: "0 32px", justifyContent: "space-between" }}>
          {[
            { label: "Operational Efficiency", score: "60", change: "+3", type: "pos" },
            { label: "Patient Retention", score: "53", change: null, type: "neu" },
            { label: "Revenue Cycle", score: "59", change: "+1", type: "pos" },
            { label: "Therapist Productivity", score: "67", change: null, type: "neu" },
            { label: "Payer Performance", score: "56", change: "+1", type: "pos" },
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 500, color: "#64748B", maxWidth: 70, lineHeight: 1.2 }}>{item.label}</p>
              <h3 style={{ margin: "8px 0 4px", fontSize: 20, fontWeight: 600, color: item.score < "60" ? "#EF4444" : "#F59E0B" }}>{item.score}</h3>
              {item.change && (
                <p style={{ margin: 0, fontSize: 11, fontWeight: 500, color: item.type === "pos" ? "#10B981" : "#64748B" }}>
                  {item.change}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ paddingLeft: 32 }}>
          <button style={{ display: "flex", alignItems: "center", gap: 6, background: "white", border: "1px solid #E2E8F0", borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 500, color: "#334155", cursor: "pointer" }}>
            {Icons.Eye} View Details
          </button>
        </div>
      </div>

      {/* MAIN KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 20 }}>
        {/* Net Revenue */}
        <div style={{ background: "white", borderRadius: 12, padding: 20, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#64748B" }}>Net Revenue</p>
            <div style={{ background: "#ECFDF5", color: "#0D9488", padding: 6, borderRadius: 6 }}>{Icons.Dollar}</div>
          </div>
          <h2 style={{ margin: "12px 0 4px", fontSize: 32, fontWeight: 700, color: "#1E293B" }}>$299K</h2>
          <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 500, color: "#10B981", display: "flex", alignItems: "center", gap: 4 }}>
            {Icons.TrendingUp} +5.1% vs last month
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#64748B", lineHeight: 1.5, flex: 1 }}>
            3,500 visits * ~$85/visit. Up from stronger payer mix at Downtown PT.
          </p>
          <button style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 500, color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", width: "100%" }}>
            {Icons.Eye} Review revenue
          </button>
        </div>

        {/* Total Visits */}
        <div style={{ background: "white", borderRadius: 12, padding: 20, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#64748B" }}>Total Visits</p>
            <div style={{ background: "#F1F5F9", color: "#475569", padding: 6, borderRadius: 6 }}>{Icons.Calendar}</div>
          </div>
          <h2 style={{ margin: "12px 0 4px", fontSize: 32, fontWeight: 700, color: "#1E293B" }}>3,500</h2>
          <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 500, color: "#EF4444", display: "flex", alignItems: "center", gap: 4 }}>
            {Icons.TrendingDown} -3.2% vs last month
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#64748B", lineHeight: 1.5, flex: 1 }}>
            Each lost visit = ~$85 revenue. Therapist PTO at Downtown PT + cancellation spike at Westside.
          </p>
          <button style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 500, color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", width: "100%" }}>
            {Icons.Search} Investigate clinics
          </button>
        </div>

        {/* Revenue at Risk */}
        <div style={{ background: "white", borderRadius: 12, padding: 20, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#64748B" }}>Revenue at Risk</p>
            <div style={{ background: "#FEF2F2", color: "#EF4444", padding: 6, borderRadius: 6 }}>{Icons.AlertTriangle}</div>
          </div>
          <h2 style={{ margin: "12px 0 4px", fontSize: 32, fontWeight: 700, color: "#EF4444" }}>$71K</h2>
          <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 500, color: "#64748B" }}>
            Auth risk + predicted loss
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#64748B", lineHeight: 1.5, flex: 1 }}>
            ~840 visits at risk. Expiring auths (Bayview highest) + predicted dropout loss.
          </p>
          <button style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 500, color: "#DC2626", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", width: "100%" }}>
            {Icons.List} Open task list
          </button>
        </div>
      </div>

      {/* SMALL STATS ROW */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
        {[
          { label: "REV / VISIT", value: "$85", change: "+1.2%", cType: "pos" },
          { label: "VISITS / CASE", value: "14.2", change: "-1.1%", cType: "neg" },
          { label: "UTILIZATION", value: "78%", change: "-4.5%", cType: "neg", highlight: true },
          { label: "CANCEL RATE", value: "12.3%", change: "+1.8%", cType: "neg", highlight: true },
          { label: "DSO", value: "34d", change: "-2%", cType: "pos" },
          { label: "GROWTH", value: "82", change: "+3%", cType: "pos" },
          { label: "TASKS", value: "8", change: null, cType: "neu" },
        ].map((stat, idx) => (
          <div key={idx} style={{ flex: 1, minWidth: 100, background: stat.highlight ? "#FFFBEB" : "white", border: stat.highlight ? "1px solid #FDE68A" : "1px solid #E2E8F0", borderRadius: 10, padding: "16px 12px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "#64748B", letterSpacing: "0.05em" }}>{stat.label}</p>
            <h3 style={{ margin: "8px 0 4px", fontSize: 20, fontWeight: 700, color: "#1E293B" }}>{stat.value}</h3>
            {stat.change && (
              <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: stat.cType === "pos" ? "#10B981" : "#EF4444" }}>
                {stat.change}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* AI INSIGHTS */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#0F172A", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#0D9488" }}>{Icons.Sparkles}</span> AI Insights
          </h4>
          <a href="#" style={{ fontSize: 13, fontWeight: 500, color: "#0D9488", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
            View all →
          </a>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {/* Output 3 distinct cards based on the image */}
          {/* Card 1 */}
          <div style={{ flex: 1, background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#DC2626", display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#DC2626" }}></span> RISK</span>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ background: "#D1FAE5", color: "#059669", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>High conf.</span>
                <span style={{ background: "#F1F5F9", color: "#475569", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>Billing</span>
              </div>
            </div>
            <h5 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 600, color: "#1E293B" }}>Revenue at Risk</h5>
            <p style={{ margin: 0, fontSize: 12, color: "#475569", lineHeight: 1.5 }}>$71K at risk from expiring authorizations and dropout...</p>
          </div>
          
          {/* Card 2 */}
          <div style={{ flex: 1, background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#D97706", display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97706" }}></span> TREND</span>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ background: "#D1FAE5", color: "#059669", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>High conf.</span>
                <span style={{ background: "#F1F5F9", color: "#475569", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>Ops</span>
              </div>
            </div>
            <h5 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 600, color: "#1E293B" }}>Visit Volume Decline</h5>
            <p style={{ margin: 0, fontSize: 12, color: "#475569", lineHeight: 1.5 }}>Visits down 3.2% MoM — therapist PTO at Downtown...</p>
          </div>
          
          {/* Card 3 */}
          <div style={{ flex: 1, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#16A34A", display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A" }}></span> OPPORTUNITY</span>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ background: "#FEF3C7", color: "#D97706", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>Med conf.</span>
                <span style={{ background: "#F1F5F9", color: "#475569", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>Clinic Mgr</span>
              </div>
            </div>
            <h5 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 600, color: "#1E293B" }}>Growth Opportunity</h5>
            <p style={{ margin: 0, fontSize: 12, color: "#475569", lineHeight: 1.5 }}>Lakefront has 15% spare capacity. Improving patient...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
