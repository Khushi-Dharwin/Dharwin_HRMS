import React, { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Sidebar/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      default:
        return (
          <div className="placeholder-page">
            <h1>
              {activePage
                .replaceAll("-", " ")
                .replace(/\b\w/g, (letter) =>
                  letter.toUpperCase()
                )}
            </h1>

            <p>
              This page will be developed next.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="hrms-layout">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="hrms-content">

        <Header
          setMobileOpen={setMobileOpen}
        />

        <main className="page-content">
          {renderPage()}
        </main>

      </div>

    </div>
  );
}

export default App;