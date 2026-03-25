import { useState, useEffect } from "react";
import { getAll, createOne, updateOne, deleteOne, COLLECTIONS } from "../../../services/contentService";
import { useAuth } from "../../../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

interface AppUser {
  id?: string;
  email: string;
  role: "admin" | "supervisor";
  createdAt: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", border: "1px solid #E2E8F0", borderRadius: 8,
  fontSize: 14, color: "#1E293B", boxSizing: "border-box" as const, outline: "none",
};

export const UserManagement = () => {
  const { isAdmin } = useAuth();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "supervisor">("supervisor");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getAll(COLLECTIONS.USERS);
      setUsers(data as unknown as AppUser[]);
    } catch {
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  if (!isAdmin) {
    return (
      <div style={{ textAlign: "center", padding: 60 }}>
        <p style={{ fontSize: 18, color: "#DC2626", fontWeight: 600 }}>🔒 Access Denied</p>
        <p style={{ fontSize: 14, color: "#64748B" }}>Only administrators can manage users.</p>
      </div>
    );
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      // Create Firebase Auth user
      const cred = await createUserWithEmailAndPassword(auth, newEmail, newPassword);
      // Store role in Firestore
      await createOne(COLLECTIONS.USERS, {
        email: newEmail,
        role: newRole,
        createdAt: new Date().toISOString(),
      }, cred.user.uid);

      setMessage("✓ User created!");
      setShowAddForm(false);
      setNewEmail("");
      setNewPassword("");
      setNewRole("supervisor");
      loadUsers();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: "admin" | "supervisor") => {
    try {
      await updateOne(COLLECTIONS.USERS, userId, { role: newRole });
      loadUsers();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    }
  };

  const handleDelete = async (userId: string) => {
    if (!confirm("Remove this user? (They will also need to be deleted from Firebase Auth console.)")) return;
    try {
      await deleteOne(COLLECTIONS.USERS, userId);
      loadUsers();
    } catch (err: any) {
      setMessage("✗ " + err.message);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <p style={{ margin: 0, fontSize: 14, color: "#64748B" }}>{users.length} user(s)</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          style={{ padding: "8px 20px", background: "#665FFD", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
        >
          {showAddForm ? "Cancel" : "+ Add User"}
        </button>
      </div>

      {message && (
        <div style={{ padding: "10px 16px", borderRadius: 8, marginBottom: 16, background: message.startsWith("✓") ? "#F0FDF4" : "#FEF2F2", color: message.startsWith("✓") ? "#16A34A" : "#DC2626", fontSize: 13 }}>
          {message}
        </div>
      )}

      {showAddForm && (
        <form onSubmit={handleAddUser} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, padding: 24, marginBottom: 24 }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 600, color: "#1E293B" }}>Create New User</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>Email</label>
              <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required style={inputStyle} placeholder="user@gobill.co" />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required minLength={6} style={inputStyle} placeholder="Minimum 6 characters" />
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 4 }}>Role</label>
            <div style={{ display: "flex", gap: 12 }}>
              {(["supervisor", "admin"] as const).map((r) => (
                <label key={r} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 14, color: "#334155" }}>
                  <input type="radio" name="role" value={r} checked={newRole === r} onChange={() => setNewRole(r)} />
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" disabled={saving} style={{ padding: "10px 28px", background: "#665FFD", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            {saving ? "Creating..." : "Create User"}
          </button>
        </form>
      )}

      {loading ? (
        <p style={{ color: "#94A3B8" }}>Loading users...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {users.map((u) => (
            <div key={u.id} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: u.role === "admin" ? "#DBEAFE" : "#FEF3C7",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  {u.role === "admin" ? "👑" : "👤"}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1E293B" }}>{u.email}</p>
                  <p style={{ margin: "2px 0 0", fontSize: 12, color: "#94A3B8" }}>
                    {u.role.toUpperCase()} · Added {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "N/A"}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <select
                  value={u.role}
                  onChange={(e) => handleRoleChange(u.id!, e.target.value as "admin" | "supervisor")}
                  style={{ padding: "6px 12px", border: "1px solid #E2E8F0", borderRadius: 6, fontSize: 12, cursor: "pointer" }}
                >
                  <option value="supervisor">Supervisor</option>
                  <option value="admin">Admin</option>
                </select>
                <button onClick={() => handleDelete(u.id!)} style={{ padding: "6px 14px", background: "#FEF2F2", color: "#DC2626", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
