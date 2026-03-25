import { useState, useEffect } from "react";
import { getAll, createOne, updateOne, deleteOne, COLLECTIONS } from "../../../services/contentService";

interface Service {
  id?: string;
  order: number;
  slug: string;
  title: string;
  heroTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroBgImage: string;
  iconImage: string;
  ctaTitle: string;
  ctaText: string;
  // Features stored as JSON string for easy editing
  featuresJson: string;
}

const emptyService: Service = {
  order: 0, slug: "", title: "", heroTitle: "", tagline: "", description: "",
  heroImage: "", heroBgImage: "", iconImage: "", ctaTitle: "", ctaText: "", featuresJson: "[]",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "8px 12px", border: "1px solid #E2E8F0", borderRadius: 6,
  fontSize: 13, color: "#1E293B", boxSizing: "border-box" as const, outline: "none",
};

export const ServicesEditor = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadServices = async () => {
    setLoading(true);
    try {
      const data = await getAll(COLLECTIONS.SERVICES, "order");
      setServices(data as unknown as Service[]);
    } catch {
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadServices(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setMessage("");
    try {
      if (editing.id) {
        const { id, ...rest } = editing;
        await updateOne(COLLECTIONS.SERVICES, id, rest);
      } else {
        await createOne(COLLECTIONS.SERVICES, editing);
      }
      setMessage("✓ Saved!");
      setEditing(null);
      loadServices();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    try {
      await deleteOne(COLLECTIONS.SERVICES, id);
      loadServices();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    }
  };

  if (loading) return <p style={{ color: "#94A3B8" }}>Loading services...</p>;

  if (editing) {
    const fields = [
      { key: "order", label: "Order", type: "number" },
      { key: "slug", label: "URL Slug" },
      { key: "title", label: "Title" },
      { key: "heroTitle", label: "Hero Title" },
      { key: "tagline", label: "Tagline", area: true },
      { key: "description", label: "Description", area: true },
      { key: "heroImage", label: "Hero Image URL" },
      { key: "heroBgImage", label: "Hero Background Image URL" },
      { key: "iconImage", label: "Icon Image URL" },
      { key: "ctaTitle", label: "CTA Title" },
      { key: "ctaText", label: "CTA Text", area: true },
      { key: "featuresJson", label: "Features (JSON array)", area: true },
    ];

    return (
      <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E2E8F0" }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 600, color: "#1E293B" }}>
          {editing.id ? `Edit: ${editing.title}` : "New Service"}
        </h3>
        {fields.map((f) => (
          <div key={f.key} style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>{f.label}</label>
            {f.area ? (
              <textarea
                value={(editing as any)[f.key] || ""}
                onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: "vertical", fontFamily: f.key === "featuresJson" ? "monospace" : "inherit" }}
              />
            ) : (
              <input
                type={f.type || "text"}
                value={(editing as any)[f.key] || ""}
                onChange={(e) => setEditing({ ...editing, [f.key]: f.type === "number" ? Number(e.target.value) : e.target.value })}
                style={inputStyle}
              />
            )}
          </div>
        ))}

        {message && <p style={{ fontSize: 13, color: message.startsWith("✓") ? "#10B981" : "#DC2626", marginBottom: 12 }}>{message}</p>}

        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={handleSave} disabled={saving} style={{ padding: "10px 24px", background: "#665FFD", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            {saving ? "Saving..." : "Save"}
          </button>
          <button onClick={() => { setEditing(null); setMessage(""); }} style={{ padding: "10px 24px", background: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 14, cursor: "pointer" }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <p style={{ margin: 0, fontSize: 14, color: "#64748B" }}>{services.length} service(s)</p>
        <button
          onClick={() => setEditing({ ...emptyService, order: services.length + 1 })}
          style={{ padding: "8px 20px", background: "#665FFD", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
        >
          + Add Service
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {services.map((svc) => (
          <div key={svc.id} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#1E293B" }}>{svc.title || "(Untitled)"}</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748B" }}>/{svc.slug}</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setEditing(svc)} style={{ padding: "6px 14px", background: "#F0F9FF", color: "#0369A1", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Edit</button>
              <button onClick={() => handleDelete(svc.id!)} style={{ padding: "6px 14px", background: "#FEF2F2", color: "#DC2626", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
