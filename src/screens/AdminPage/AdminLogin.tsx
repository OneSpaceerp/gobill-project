import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export const AdminLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0B0552 0%, #665FFD 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "48px 40px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #665FFD 0%, #0B0552 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1E293B", margin: "0 0 4px" }}>
            GoBill Admin
          </h1>
          <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
            Sign in to manage your website
          </p>
        </div>

        {error && (
          <div
            style={{
              background: "#FEF2F2",
              border: "1px solid #FECACA",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 20,
              fontSize: 13,
              color: "#DC2626",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 6 }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@gobill.co"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #E2E8F0",
                borderRadius: 10,
                fontSize: 15,
                color: "#1E293B",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#665FFD")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
            />
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 6 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #E2E8F0",
                borderRadius: 10,
                fontSize: 15,
                color: "#1E293B",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#665FFD")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#94A3B8" : "linear-gradient(135deg, #665FFD 0%, #0B0552 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};
