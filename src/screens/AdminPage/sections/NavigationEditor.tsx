import { useState, useEffect } from "react";
import { getNavigation, updateNavigation } from "../../../services/contentService";

interface NavLink {
  label: string;
  path: string;
  subMenu?: { label: string; path: string }[];
}

interface NavData {
  headerLinks: NavLink[];
  footerExpertise: { text: string; path: string }[];
  footerCompany: { text: string; path: string }[];
  footerBottom: { label: string; path: string }[];
  socialLinks: { name: string; href: string }[];
}

const defaultNav: NavData = {
  headerLinks: [],
  footerExpertise: [],
  footerCompany: [],
  footerBottom: [],
  socialLinks: [],
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #E2E8F0",
  borderRadius: 6,
  fontSize: 13,
  color: "#1E293B",
  boxSizing: "border-box" as const,
  outline: "none",
};

const btnStyle: React.CSSProperties = {
  padding: "6px 14px",
  border: "none",
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 600,
  cursor: "pointer",
};

export const NavigationEditor = () => {
  const [data, setData] = useState<NavData>(defaultNav);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"header" | "footerExpertise" | "footerCompany" | "footerBottom" | "social">("header");

  useEffect(() => {
    const load = async () => {
      try {
        const nav = await getNavigation();
        if (nav) setData(nav as unknown as NavData);
      } catch {
        // no data yet
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await updateNavigation(data as any);
      setMessage("✓ Saved!");
    } catch (err: any) {
      setMessage("✗ " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { key: "header" as const, label: "Header Links" },
    { key: "footerExpertise" as const, label: "Footer Expertise" },
    { key: "footerCompany" as const, label: "Footer Company" },
    { key: "footerBottom" as const, label: "Footer Bottom" },
    { key: "social" as const, label: "Social Links" },
  ];

  const renderLinkEditor = (
    links: { label?: string; text?: string; name?: string; path?: string; href?: string }[],
    updateFn: (updated: any[]) => void,
    labelField: string,
    pathField: string,
  ) => (
    <div>
      {links.map((link, idx) => (
        <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
          <input
            style={{ ...inputStyle, flex: 1 }}
            value={(link as any)[labelField] || ""}
            onChange={(e) => {
              const updated = [...links];
              (updated[idx] as any)[labelField] = e.target.value;
              updateFn(updated);
            }}
            placeholder="Label"
          />
          <input
            style={{ ...inputStyle, flex: 1 }}
            value={(link as any)[pathField] || ""}
            onChange={(e) => {
              const updated = [...links];
              (updated[idx] as any)[pathField] = e.target.value;
              updateFn(updated);
            }}
            placeholder="Path / URL"
          />
          <button
            onClick={() => updateFn(links.filter((_, i) => i !== idx))}
            style={{ ...btnStyle, background: "#FEF2F2", color: "#DC2626" }}
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={() => updateFn([...links, { [labelField]: "", [pathField]: "" }])}
        style={{ ...btnStyle, background: "#F0FDF4", color: "#16A34A", marginTop: 8 }}
      >
        + Add Link
      </button>
    </div>
  );

  if (loading) return <p style={{ color: "#94A3B8" }}>Loading...</p>;

  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E2E8F0" }}>
      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #E2E8F0", paddingBottom: 12 }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...btnStyle,
              background: activeTab === tab.key ? "#665FFD" : "#F1F5F9",
              color: activeTab === tab.key ? "#fff" : "#475569",
              padding: "8px 16px",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "header" &&
        renderLinkEditor(data.headerLinks, (u) => setData({ ...data, headerLinks: u }), "label", "path")}
      {activeTab === "footerExpertise" &&
        renderLinkEditor(data.footerExpertise, (u) => setData({ ...data, footerExpertise: u }), "text", "path")}
      {activeTab === "footerCompany" &&
        renderLinkEditor(data.footerCompany, (u) => setData({ ...data, footerCompany: u }), "text", "path")}
      {activeTab === "footerBottom" &&
        renderLinkEditor(data.footerBottom, (u) => setData({ ...data, footerBottom: u }), "label", "path")}
      {activeTab === "social" &&
        renderLinkEditor(data.socialLinks, (u) => setData({ ...data, socialLinks: u }), "name", "href")}

      {/* Save */}
      <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center" }}>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{ ...btnStyle, background: "#665FFD", color: "#fff", padding: "10px 24px", fontSize: 14 }}
        >
          {saving ? "Saving..." : "Save Navigation"}
        </button>
        {message && <span style={{ fontSize: 13, color: message.startsWith("✓") ? "#10B981" : "#DC2626" }}>{message}</span>}
      </div>
    </div>
  );
};
