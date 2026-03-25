import { useState, useEffect } from "react";
import { getSiteContent, updateSiteContent } from "../../../services/contentService";

interface ContentItem {
  key: string;
  label: string;
  fields: { name: string; type: "text" | "textarea" | "image"; label: string }[];
}

const contentSections: ContentItem[] = [
  {
    key: "hero",
    label: "Hero Section",
    fields: [
      { name: "title", type: "text", label: "Main Heading" },
      { name: "subtitle", type: "textarea", label: "Subtitle / Description" },
      { name: "ctaText", type: "text", label: "CTA Button Text" },
      { name: "ctaLink", type: "text", label: "CTA Button Link" },
      { name: "videoUrl", type: "text", label: "Hero Video URL" },
      { name: "cardText", type: "textarea", label: "Floating Card Text" },
    ],
  },
  {
    key: "trust",
    label: "Trust Section",
    fields: [
      { name: "heading", type: "text", label: "Section Heading" },
      { name: "subtext", type: "textarea", label: "Section Subtext" },
    ],
  },
  {
    key: "whyGobill",
    label: "Why GoBill Section",
    fields: [
      { name: "heading", type: "text", label: "Section Heading" },
      { name: "description", type: "textarea", label: "Section Description" },
    ],
  },
  {
    key: "partnership",
    label: "Partnership Section",
    fields: [
      { name: "heading", type: "text", label: "Section Heading" },
      { name: "body", type: "textarea", label: "Body Text" },
    ],
  },
  {
    key: "assessment",
    label: "Assessment CTA Section",
    fields: [
      { name: "heading", type: "text", label: "Section Heading" },
      { name: "description", type: "textarea", label: "Description" },
      { name: "ctaText", type: "text", label: "CTA Button Text" },
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials Section",
    fields: [
      { name: "heading", type: "text", label: "Section Heading" },
      { name: "subtext", type: "textarea", label: "Subtext" },
    ],
  },
  {
    key: "footer",
    label: "Footer",
    fields: [
      { name: "ctaHeading", type: "text", label: "Footer CTA Heading" },
      { name: "ctaSubtext", type: "textarea", label: "Footer CTA Subtext" },
      { name: "motto", type: "textarea", label: "Footer Motto" },
      { name: "copyright", type: "text", label: "Copyright Text" },
    ],
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #E2E8F0",
  borderRadius: 8,
  fontSize: 14,
  color: "#1E293B",
  boxSizing: "border-box",
  outline: "none",
};

export const ContentEditor = () => {
  const [activeKey, setActiveKey] = useState(contentSections[0].key);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const activeSection = contentSections.find((s) => s.key === activeKey)!;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setMessage("");
      try {
        const doc = await getSiteContent(activeKey);
        setFormData((doc as Record<string, any>) || {});
      } catch {
        setFormData({});
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [activeKey]);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await updateSiteContent(activeKey, formData);
      setMessage("✓ Saved successfully!");
    } catch (err: any) {
      setMessage("✗ Error: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: 24 }}>
      {/* Left nav */}
      <div style={{ width: 200, flexShrink: 0 }}>
        {contentSections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveKey(section.key)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px 14px",
              border: "none",
              borderRadius: 8,
              background: activeKey === section.key ? "#665FFD" : "transparent",
              color: activeKey === section.key ? "#fff" : "#475569",
              fontSize: 13,
              fontWeight: activeKey === section.key ? 600 : 400,
              cursor: "pointer",
              textAlign: "left",
              marginBottom: 4,
            }}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Editor */}
      <div style={{ flex: 1, background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E2E8F0" }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 600, color: "#1E293B" }}>
          {activeSection.label}
        </h3>

        {loading ? (
          <p style={{ color: "#94A3B8" }}>Loading...</p>
        ) : (
          <>
            {activeSection.fields.map((field) => (
              <div key={field.name} style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 6 }}>
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    value={formData[field.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[field.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    style={inputStyle}
                  />
                )}
              </div>
            ))}

            {message && (
              <p style={{ fontSize: 13, color: message.startsWith("✓") ? "#10B981" : "#DC2626", marginBottom: 16 }}>
                {message}
              </p>
            )}

            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: "10px 24px",
                background: "#665FFD",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: saving ? "not-allowed" : "pointer",
              }}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
