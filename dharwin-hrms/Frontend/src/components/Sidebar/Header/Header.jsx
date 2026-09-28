import React, { useState } from "react";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import "./Header.css";

function Header({ setMobileOpen, theme, onToggleTheme }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">
      {/* Mobile Menu */}
      <button
        className="mobile-menu-button"
        aria-label="Open navigation menu"
        onClick={() => setMobileOpen(true)}
      >
        <MenuOutlined />
      </button>

      <div className="header-spacer" />

      {/* Date */}
      <div className="header-date">{today}</div>

      <button
        className="header-icon-button theme-button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        aria-pressed={theme === "dark"}
        onClick={onToggleTheme}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
      </button>

      {/* Notification */}
      <div className="header-dropdown-wrapper">
        <button
          className="header-icon-button"
          onClick={() => {
            setNotificationOpen(!notificationOpen);
            setProfileOpen(false);
          }}
          aria-label="Notifications"
        >
          <NotificationsNoneOutlined />
          <span className="notification-badge">4</span>
        </button>

        {notificationOpen && (
          <div className="header-dropdown notification-dropdown">
            <div className="dropdown-header">
              <strong>Notifications</strong>

              <button>Mark all read</button>
            </div>

            <div className="notification-item">
              <strong>Leave request</strong>
              <span>Priya requested casual leave</span>
              <small>10 minutes ago</small>
            </div>

            <div className="notification-item">
              <strong>Regularization request</strong>
              <span>Jtest requested attendance correction</span>
              <small>1 hour ago</small>
            </div>

            <div className="notification-item">
              <strong>Onboarding action</strong>
              <span>2 new hires need verification</span>
              <small>Yesterday</small>
            </div>

            <button className="view-all-button">
              View all notifications
            </button>
          </div>
        )}
      </div>

      {/* Profile */}
      <div className="header-dropdown-wrapper">
        <button
          className="profile-button"
          onClick={() => {
            setProfileOpen(!profileOpen);
            setNotificationOpen(false);
          }}
        >
          <div className="profile-avatar">
            JM
          </div>

          <div className="profile-info">
            <strong>Jason Mendonca</strong>
            <span>Admin · ADMIN001</span>
            <span>jason.mendonca@dharwin.com</span>
          </div>
        </button>

        {profileOpen && (
          <div className="header-dropdown profile-dropdown">
            <button>My Profile</button>
            <button>Company Profile</button>
            <button>Settings</button>

            <div className="dropdown-divider" />

            <button className="logout-button">
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;