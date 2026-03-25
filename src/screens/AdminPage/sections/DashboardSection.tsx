import { useState, useEffect } from "react";
import { getAll, COLLECTIONS } from "../../../services/contentService";
import { seedFirestore } from "../../../services/seedFirestore";

export const DashboardSection = () => {
  const [stats, setStats] = useState({ services: 0, blogs: 0, slides: 0, users: 0 });
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedLog, setSeedLog] = useState<string[]>([]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const [services, blogs, slides, users] = await Promise.all([
        getAll(COLLECTIONS.SERVICES),
        getAll(COLLECTIONS.BLOGS),
        getAll(COLLECTIONS.HERO_SLIDES),
        getAll(COLLECTIONS.USERS),
      ]);
      setStats({
        services: services.length,
        blogs: blogs.length,
        slides: slides.length,
        users: users.length,
      });
    } catch {
      // If collections don't exist yet, show 0s
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStats(); }, []);

  const handleSeed = async () => {
    if (!confirm("This will overwrite any existing data in Firestore with the website defaults. Continue?")) return;
    setSeeding(true);
    setSeedLog([]);
    try {
      await seedFirestore((msg) => {
        setSeedLog((prev) => [...prev, msg]);
      });
      fetchStats(); // Refresh stats
    } catch (err: any) {
      setSeedLog((prev) => [...prev, "✗ Error: " + err.message]);
    } finally {
      setSeeding(false);
    }
  };

  const cards = [
    { label: "Services", value: stats.services, color: "#665FFD", icon: "⚙️" },
    { label: "Blog Posts", value: stats.blogs, color: "#0D9488", icon: "📰" },
    { label: "Hero Slides", value: stats.slides, color: "#D97706", icon: "🖼️" },
    { label: "Users", value: stats.users, color: "#DC2626", icon: "👥" },
  ];

  return (
    <div>
      <p style={{ fontSize: 14, color: "#64748B", marginBottom: 24 }}>
        Welcome to the GoBill Admin Panel. Manage all website content from here.
      </p>

      {loading ? (
        <p style={{ color: "#94A3B8" }}>Loading stats...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 32 }}>
          {cards.map((card) => (
            <div
              key={card.label}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "24px 20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#64748B" }}>{card.label}</span>
                <span style={{ fontSize: 24 }}>{card.icon}</span>
              </div>
              <h2 style={{ margin: 0, fontSize: 36, fontWeight: 700, color: card.color }}>{card.value}</h2>
              <p style={{ margin: "8px 0 0", fontSize: 12, color: "#94A3B8" }}>Total items in database</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E2E8F0" }}>
        <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 600, color: "#1E293B" }}>Quick Actions</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={handleSeed}
            disabled={seeding}
            style={{
              padding: "14px 20px",
              background: seeding ? "#E0E7FF" : "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 10,
              cursor: seeding ? "not-allowed" : "pointer",
              textAlign: "left",
              flex: "1 1 200px",
            }}
          >
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1E293B" }}>
              {seeding ? "Seeding..." : "Seed Initial Data"}
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "#64748B" }}>Populate Firestore with current website content</p>
          </button>
          <button
            onClick={() => window.open("/", "_blank")}
            style={{
              padding: "14px 20px",
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 10,
              cursor: "pointer",
              textAlign: "left",
              flex: "1 1 200px",
            }}
          >
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1E293B" }}>View Website</p>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "#64748B" }}>Open the public website in a new tab</p>
          </button>
        </div>
      </div>

      {/* Seed log */}
      {seedLog.length > 0 && (
        <div
          style={{
            marginTop: 20,
            background: "#0F172A",
            borderRadius: 12,
            padding: 20,
            maxHeight: 300,
            overflow: "auto",
          }}
        >
          <h4 style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 600, color: "#94A3B8" }}>Seed Log</h4>
          {seedLog.map((line, i) => (
            <p key={i} style={{ margin: "2px 0", fontSize: 12, fontFamily: "monospace", color: line.startsWith("✗") ? "#F87171" : line.includes("🎉") ? "#4ADE80" : "#E2E8F0" }}>
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
