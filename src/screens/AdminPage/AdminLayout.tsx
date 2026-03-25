import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { DashboardSection } from "./sections/DashboardSection";
import { ContentEditor } from "./sections/ContentEditor";
import { NavigationEditor } from "./sections/NavigationEditor";
import { HeroSlidesEditor } from "./sections/HeroSlidesEditor";
import { ServicesEditor } from "./sections/ServicesEditor";
import { BlogsEditor } from "./sections/BlogsEditor";
import { UserManagement } from "./sections/UserManagement";

type AdminSection =
  | "dashboard"
  | "content"
  | "navigation"
  | "slides"
  | "services"
  | "blogs"
  | "users";

const menuItems: { key: AdminSection; label: string; icon: string; adminOnly?: boolean }[] = [
  { key: "dashboard", label: "Dashboard", icon: "📊" },
  { key: "content", label: "Site Content", icon: "📝" },
  { key: "navigation", label: "Navigation", icon: "🔗" },
  { key: "slides", label: "Hero Slides", icon: "🖼️" },
  { key: "services", label: "Services", icon: "⚙️" },
  { key: "blogs", label: "Blog Posts", icon: "📰" },
  { key: "users", label: "User Management", icon: "👥", adminOnly: true },
];

export const AdminLayout = () => {
  const { user, logout, isAdmin } = useAuth();
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard": return <DashboardSection />;
      case "content": return <ContentEditor />;
      case "navigation": return <NavigationEditor />;
      case "slides": return <HeroSlidesEditor />;
      case "services": return <ServicesEditor />;
      case "blogs": return <BlogsEditor />;
      case "users": return isAdmin ? <UserManagement /> : <DashboardSection />;
      default: return <DashboardSection />;
    }
  };

  const visibleItems = menuItems.filter((item) => !item.adminOnly || isAdmin);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarCollapsed ? 72 : 260,
          background: "linear-gradient(180deg, #0B0552 0%, #1a1070 100%)",
          transition: "width 0.3s ease",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: sidebarCollapsed ? "20px 16px" : "20px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!sidebarCollapsed && (
            <span style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>GoBill Admin</span>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: 8,
              padding: "8px",
              cursor: "pointer",
              color: "#fff",
              fontSize: 16,
            }}
          >
            {sidebarCollapsed ? "→" : "←"}
          </button>
        </div>

        {/* Menu */}
        <nav style={{ flex: 1, padding: "12px 8px" }}>
          {visibleItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: sidebarCollapsed ? "12px 16px" : "12px 16px",
                border: "none",
                borderRadius: 10,
                background:
                  activeSection === item.key
                    ? "rgba(102,95,253,0.3)"
                    : "transparent",
                color: activeSection === item.key ? "#fff" : "rgba(255,255,255,0.7)",
                fontSize: 14,
                fontWeight: activeSection === item.key ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                marginBottom: 4,
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.key) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.key) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Info */}
        <div
          style={{
            padding: sidebarCollapsed ? "16px 12px" : "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {!sidebarCollapsed && (
            <>
              <p style={{ margin: "0 0 4px", fontSize: 13, color: "#fff", fontWeight: 500 }}>
                {user?.email}
              </p>
              <p style={{ margin: "0 0 12px", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
                Role: {user?.role?.toUpperCase()}
              </p>
            </>
          )}
          <button
            onClick={logout}
            style={{
              width: "100%",
              padding: "8px",
              background: "rgba(239,68,68,0.2)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: 8,
              color: "#FCA5A5",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {sidebarCollapsed ? "🚪" : "Sign Out"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          background: "#F1F5F9",
          overflow: "auto",
        }}
      >
        {/* Header */}
        <header
          style={{
            background: "#fff",
            padding: "16px 32px",
            borderBottom: "1px solid #E2E8F0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#1E293B" }}>
            {menuItems.find((m) => m.key === activeSection)?.label || "Dashboard"}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 20,
                background: isAdmin ? "#DBEAFE" : "#FEF3C7",
                color: isAdmin ? "#1D4ED8" : "#D97706",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {user?.role?.toUpperCase()}
            </span>
          </div>
        </header>

        {/* Section Content */}
        <div style={{ padding: 32 }}>{renderSection()}</div>
      </main>
    </div>
  );
};
