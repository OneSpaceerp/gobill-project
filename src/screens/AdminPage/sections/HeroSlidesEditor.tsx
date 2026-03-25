import { useState, useEffect } from "react";
import { getAll, createOne, updateOne, deleteOne, COLLECTIONS } from "../../../services/contentService";

interface Slide {
  id?: string;
  order: number;
  title: string;
  subtitle: string;
  heading: string;
  ctaText: string;
  ctaLink: string;
  background: string;
  imageUrl: string;
}

const emptySlide: Slide = { order: 0, title: "", subtitle: "", heading: "", ctaText: "", ctaLink: "", background: "#F7F7FF", imageUrl: "" };

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

export const HeroSlidesEditor = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [editing, setEditing] = useState<Slide | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadSlides = async () => {
    setLoading(true);
    try {
      const data = await getAll(COLLECTIONS.HERO_SLIDES, "order");
      setSlides(data as unknown as Slide[]);
    } catch {
      setSlides([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadSlides(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setMessage("");
    try {
      if (editing.id) {
        const { id, ...rest } = editing;
        await updateOne(COLLECTIONS.HERO_SLIDES, id, rest);
      } else {
        await createOne(COLLECTIONS.HERO_SLIDES, editing);
      }
      setMessage("✓ Saved!");
      setEditing(null);
      loadSlides();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this slide?")) return;
    try {
      await deleteOne(COLLECTIONS.HERO_SLIDES, id);
      loadSlides();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    }
  };

  if (loading) return <p style={{ color: "#94A3B8" }}>Loading slides...</p>;

  if (editing) {
    return (
      <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E2E8F0" }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 600, color: "#1E293B" }}>
          {editing.id ? "Edit Slide" : "New Slide"}
        </h3>
        {[
          { key: "order", label: "Order (number)", type: "number" },
          { key: "title", label: "Section Label (e.g. 'Data-Driven Insights')" },
          { key: "heading", label: "Heading" },
          { key: "subtitle", label: "Subtitle", area: true },
          { key: "ctaText", label: "CTA Button Text" },
          { key: "ctaLink", label: "CTA Link" },
          { key: "background", label: "Background Color" },
          { key: "imageUrl", label: "Image / Video URL" },
        ].map((f) => (
          <div key={f.key} style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>{f.label}</label>
            {f.area ? (
              <textarea
                value={(editing as any)[f.key] || ""}
                onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
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
        <p style={{ margin: 0, fontSize: 14, color: "#64748B" }}>{slides.length} slide(s)</p>
        <button
          onClick={() => setEditing({ ...emptySlide, order: slides.length + 1 })}
          style={{ padding: "8px 20px", background: "#665FFD", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
        >
          + Add Slide
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {slides.map((slide) => (
          <div key={slide.id} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#1E293B" }}>
                #{slide.order} — {slide.title || "(Untitled)"}
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748B" }}>{slide.heading}</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setEditing(slide)} style={{ padding: "6px 14px", background: "#F0F9FF", color: "#0369A1", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Edit</button>
              <button onClick={() => handleDelete(slide.id!)} style={{ padding: "6px 14px", background: "#FEF2F2", color: "#DC2626", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
