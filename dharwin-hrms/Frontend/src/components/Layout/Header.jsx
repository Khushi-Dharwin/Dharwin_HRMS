import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
} from "lucide-react";

import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu">
          <Menu size={20} />
        </button>

        <div className="search-box">
          <Search size={17} />

          <input
            type="text"
            placeholder="Search employees, leaves, attendance..."
          />

          <span className="search-shortcut">⌘ K</span>
        </div>
      </div>

      <div className="header-actions">
        <button className="icon-button" onClick={toggleTheme}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="icon-button notification-button">
          <Bell size={19} />
          <span />
        </button>

        <div className="profile">
          <div className="profile-avatar">KP</div>

          <div className="profile-info">
            <strong>Khushi Parmar</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;