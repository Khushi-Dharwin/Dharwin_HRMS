import React, { useState } from "react";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import ChevronRight from "@mui/icons-material/ChevronRight";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import TaskAltOutlined from "@mui/icons-material/TaskAltOutlined";
import Logo from "../../assets/Logo.jpeg";
import "./Sidebar.css";

const menuItems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    path: "dashboard",
  },
  {
    title: "Attendance",
    icon: CalendarMonthOutlined,
    children: [
      "Daily Attendance",
      "Regularizations",
      "Shift Roster",
    ],
  },
  {
    title: "Leave",
    icon: EventAvailableOutlined,
    children: [
      "Leave Calendar",
      "Leave Balance",
      "Holiday Calendar",
      "Apply for Leave",
    ],
  },
  {
    title: "Timesheets",
    icon: AccessTimeOutlined,
    path: "timesheets",
  },
  {
    section: "Manage",
  },
  {
    title: "Employees",
    icon: PeopleAltOutlined,
    children: [
      "Directory",
      "Onboarding",
      "Departments",
      "Add Employee",
    ],
  },
  {
    title: "Approvals",
    icon: TaskAltOutlined,
    path: "approvals",
    badge: 3,
  },
  {
    title: "Payroll",
    icon: PaymentsOutlined,
    children: [
      "Payslips",
      "Salary Structure",
      "Reimbursements",
    ],
  },
  {
    section: "System",
  },
  {
    title: "Notifications",
    icon: NotificationsNoneOutlined,
    path: "notifications",
  },
  {
    title: "Settings",
    icon: SettingsOutlined,
    children: [
      "Company Profile",
      "Roles & Permissions",
      "Notification Settings",
    ],
  },
];

function Sidebar({ activePage, setActivePage, mobileOpen, setMobileOpen }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleNavigation = (item) => {
    if (item.path) {
      setActivePage(item.path);
      setMobileOpen(false);
    }
  };

  const handleChildNavigation = (child) => {
    setActivePage(child.toLowerCase().replaceAll(" ", "-"));
    setMobileOpen(false);
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <img src={Logo} alt="Dharwin HRMS logo" className="logo-mark" />

          {/* <div className="logo-content">
            <h2>Dharwin</h2>
            <span>HRMS</span>
          </div> */}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            if (item.section) {
              return (
                <div className="sidebar-section-title" key={index}>
                  {item.section}
                </div>
              );
            }

            const isActive = activePage === item.path;
            const isOpen = openMenus[item.title];
            const Icon = item.icon;

            return (
              <div key={item.title}>
                <button
                  className={`sidebar-item ${
                    isActive ? "sidebar-item-active" : ""
                  }`}
                  onClick={() =>
                    item.children
                      ? toggleMenu(item.title)
                      : handleNavigation(item)
                  }
                >
                  <span className="sidebar-icon"><Icon /></span>

                  <span className="sidebar-label">{item.title}</span>

                  {item.badge && (
                    <span className="sidebar-badge">{item.badge}</span>
                  )}

                  {item.children && (
                    <span
                      className={`sidebar-arrow ${
                        isOpen ? "sidebar-arrow-open" : ""
                      }`}
                    >
                      <ChevronRight />
                    </span>
                  )}
                </button>

                {item.children && isOpen && (
                  <div className="sidebar-submenu">
                    {item.children.map((child) => {
                      const childPath = child.toLowerCase().replaceAll(" ", "-");
                      const isChildActive = activePage === childPath;

                      return (
                        <button
                          key={child}
                          className={`sidebar-subitem ${
                            isChildActive ? "sidebar-subitem-active" : ""
                          }`}
                          onClick={() => handleChildNavigation(child)}
                        >
                          <span className="sidebar-subitem-dot" aria-hidden="true" />
                          <span>{child}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom Profile */}
        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <div className="help-icon"><HelpOutlined /></div>

            <div>
              <strong>Need help?</strong>
              <span>Contact HR support</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;