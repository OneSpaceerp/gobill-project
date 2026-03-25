import { useState, useEffect } from "react";
import { getAll, createOne, updateOne, deleteOne, COLLECTIONS } from "../../../services/contentService";

interface Blog {
  id?: string;
  order: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

const emptyBlog: Blog = { order: 0, slug: "", title: "", date: "", image: "", content: "" };

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "8px 12px", border: "1px solid #E2E8F0", borderRadius: 6,
  fontSize: 13, color: "#1E293B", boxSizing: "border-box" as const, outline: "none",
};

export const BlogsEditor = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const data = await getAll(COLLECTIONS.BLOGS, "order");
      setBlogs(data as unknown as Blog[]);
    } catch {
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadBlogs(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setMessage("");
    try {
      if (editing.id) {
        const { id, ...rest } = editing;
        await updateOne(COLLECTIONS.BLOGS, id, rest);
      } else {
        await createOne(COLLECTIONS.BLOGS, editing);
      }
      setMessage("✓ Saved!");
      setEditing(null);
      loadBlogs();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;
    try {
      await deleteOne(COLLECTIONS.BLOGS, id);
      loadBlogs();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    }
  };

  if (loading) return <p style={{ color: "#94A3B8" }}>Loading blogs...</p>;

  if (editing) {
    return (
      <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E2E8F0" }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 600, color: "#1E293B" }}>
          {editing.id ? `Edit: ${editing.title}` : "New Blog Post"}
        </h3>
        {[
          { key: "order", label: "Order", type: "number" },
          { key: "slug", label: "URL Slug" },
          { key: "title", label: "Title" },
          { key: "date", label: "Date (e.g. January 2, 2024)" },
          { key: "image", label: "Cover Image URL" },
        ].map((f) => (
          <div key={f.key} style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>{f.label}</label>
            <input
              type={f.type || "text"}
              value={(editing as any)[f.key] || ""}
              onChange={(e) => setEditing({ ...editing, [f.key]: f.type === "number" ? Number(e.target.value) : e.target.value })}
              style={inputStyle}
            />
          </div>
        ))}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>Content (HTML)</label>
          <textarea
            value={editing.content || ""}
            onChange={(e) => setEditing({ ...editing, content: e.target.value })}
            rows={12}
            style={{ ...inputStyle, resize: "vertical", fontFamily: "monospace", fontSize: 12 }}
          />
        </div>

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
        <p style={{ margin: 0, fontSize: 14, color: "#64748B" }}>{blogs.length} blog post(s)</p>
        <button
          onClick={() => setEditing({ ...emptyBlog, order: blogs.length + 1 })}
          style={{ padding: "8px 20px", background: "#665FFD", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
        >
          + Add Blog Post
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {blog.image && (
                <img src={blog.image} alt="" style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover" }} />
              )}
              <div>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#1E293B" }}>{blog.title || "(Untitled)"}</p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "#94A3B8" }}>{blog.date}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setEditing(blog)} style={{ padding: "6px 14px", background: "#F0F9FF", color: "#0369A1", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Edit</button>
              <button onClick={() => handleDelete(blog.id!)} style={{ padding: "6px 14px", background: "#FEF2F2", color: "#DC2626", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
