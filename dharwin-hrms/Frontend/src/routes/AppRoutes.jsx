import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const Placeholder = ({ title }) => {
  return (
    <div className="card" style={{ padding: "30px" }}>
      <h2>{title}</h2>
      <p style={{ color: "var(--text-secondary)", marginTop: "8px" }}>
        This module will be built next.
      </p>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/attendance/daily"
          element={<Placeholder title="Daily Attendance" />}
        />

        <Route
          path="/employees/directory"
          element={<Placeholder title="Employee Directory" />}
        />

        <Route
          path="/approvals"
          element={<Placeholder title="Approvals" />}
        />

        <Route
          path="/notifications"
          element={<Placeholder title="Notifications" />}
        />

        <Route
          path="/settings/company"
          element={<Placeholder title="Company Profile" />}
        />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Route>
    </Routes>
  );
};

export default AppRoutes;