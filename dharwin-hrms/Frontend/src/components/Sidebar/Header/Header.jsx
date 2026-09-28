import React, { useState } from "react";
import "./Header.css";

function Header({ setMobileOpen }) {
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
        onClick={() => setMobileOpen(true)}
      >
        ☰
      </button>

      {/* Search */}
      {/* <div className="header-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search employees, requests..."
        />

        <span className="search-shortcut">⌘ K</span>
      </div> */}

      <div className="header-spacer" />

      {/* Date */}
      <div className="header-date">
        {today}
      </div>

      {/* Notification */}
      <div className="header-dropdown-wrapper">
        <button
          className="header-icon-button"
          onClick={() => {
            setNotificationOpen(!notificationOpen);
            setProfileOpen(false);
          }}
        >
          🔔
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
            <span>Administrator</span>
          </div>

          <span className="profile-arrow">⌄</span>
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