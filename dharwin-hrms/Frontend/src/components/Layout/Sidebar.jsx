import { useState } from "react";
import {
  LayoutDashboard,
  Clock3,
  CalendarDays,
  Users,
  CheckSquare,
  Wallet,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  CalendarCheck,
  CalendarRange,
  UserPlus,
  Building2,
  FileText,
  Banknote,
  Receipt,
  ShieldCheck,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    attendance: true,
    leave: false,
    employees: false,
    payroll: false,
    settings: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const linkClass = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">D</div>

        <div>
          <h2>Dharwin</h2>
          <span>HRMS</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        {/* Attendance */}
        <button
          className="sidebar-link sidebar-parent"
          onClick={() => toggleMenu("attendance")}
        >
          <div className="sidebar-link-left">
            <Clock3 size={18} />
            <span>Attendance</span>
          </div>

          {openMenus.attendance ? (
            <ChevronDown size={15} />
          ) : (
            <ChevronRight size={15} />
          )}
        </button>

        {openMenus.attendance && (
          <div className="submenu">
            <NavLink to="/attendance/daily">
              <ClipboardCheck size={15} />
              Daily attendance
            </NavLink>

            <NavLink to="/attendance/regularizations">
              <CalendarCheck size={15} />
              Regularizations
            </NavLink>

            <NavLink to="/attendance/roster">
              <CalendarRange size={15} />
              Shift roster
            </NavLink>
          </div>
        )}

        {/* Leave */}
        <button
          className="sidebar-link sidebar-parent"
          onClick={() => toggleMenu("leave")}
        >
          <div className="sidebar-link-left">
            <CalendarDays size={18} />
            <span>Leave</span>
          </div>

          {openMenus.leave ? (
            <ChevronDown size={15} />
          ) : (
            <ChevronRight size={15} />
          )}
        </button>

        {openMenus.leave && (
          <div className="submenu">
            <NavLink to="/leave/calendar">
              <CalendarDays size={15} />
              Leave calendar
            </NavLink>

            <NavLink to="/leave/balance">
              <FileText size={15} />
              Leave balance
            </NavLink>

            <NavLink to="/leave/holidays">
              <CalendarRange size={15} />
              Holiday calendar
            </NavLink>

            <NavLink to="/leave/apply">
              <ClipboardCheck size={15} />
              Apply for leave
            </NavLink>
          </div>
        )}

        <NavLink to="/timesheets" className={linkClass}>
          <Clock3 size={18} />
          <span>Timesheets</span>
        </NavLink>

        {/* Employees */}
        <button
          className="sidebar-link sidebar-parent"
          onClick={() => toggleMenu("employees")}
        >
          <div className="sidebar-link-left">
            <Users size={18} />
            <span>Employees</span>
          </div>

          {openMenus.employees ? (
            <ChevronDown size={15} />
          ) : (
            <ChevronRight size={15} />
          )}
        </button>

        {openMenus.employees && (
          <div className="submenu">
            <NavLink to="/employees/directory">
              <Users size={15} />
              Directory
            </NavLink>

            <NavLink to="/employees/onboarding">
              <UserPlus size={15} />
              Onboarding
            </NavLink>

            <NavLink to="/employees/departments">
              <Building2 size={15} />
              Departments
            </NavLink>

            <NavLink to="/employees/add">
              <UserPlus size={15} />
              Add employee
            </NavLink>
          </div>
        )}

        <NavLink to="/approvals" className={linkClass}>
          <CheckSquare size={18} />
          <span>Approvals</span>

          <span className="nav-count">3</span>
        </NavLink>

        {/* Payroll */}
        <button
          className="sidebar-link sidebar-parent"
          onClick={() => toggleMenu("payroll")}
        >
          <div className="sidebar-link-left">
            <Wallet size={18} />
            <span>Payroll</span>
          </div>

          {openMenus.payroll ? (
            <ChevronDown size={15} />
          ) : (
            <ChevronRight size={15} />
          )}
        </button>

        {openMenus.payroll && (
          <div className="submenu">
            <NavLink to="/payroll/payslips">
              <Receipt size={15} />
              Payslips
            </NavLink>

            <NavLink to="/payroll/salary">
              <Banknote size={15} />
              Salary structure
            </NavLink>

            <NavLink to="/payroll/reimbursements">
              <FileText size={15} />
              Reimbursements
            </NavLink>
          </div>
        )}

        <NavLink to="/notifications" className={linkClass}>
          <Bell size={18} />
          <span>Notifications</span>
        </NavLink>

        {/* Settings */}
        <button
          className="sidebar-link sidebar-parent"
          onClick={() => toggleMenu("settings")}
        >
          <div className="sidebar-link-left">
            <Settings size={18} />
            <span>Settings</span>
          </div>

          {openMenus.settings ? (
            <ChevronDown size={15} />
          ) : (
            <ChevronRight size={15} />
          )}
        </button>

        {openMenus.settings && (
          <div className="submenu">
            <NavLink to="/settings/company">
              <Building2 size={15} />
              Company profile
            </NavLink>

            <NavLink to="/settings/roles">
              <ShieldCheck size={15} />
              Roles & permissions
            </NavLink>

            <NavLink to="/settings/notifications">
              <Bell size={15} />
              Notification settings
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;