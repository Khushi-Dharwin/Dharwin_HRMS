import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const approvals = [
    {
      name: "Jtest",
      type: "Regularization",
      details: "03 Sep · 09:00 AM → 06:00 PM",
      category: "Attendance",
    },
    {
      name: "Priya Shah",
      type: "Casual Leave",
      details: "27 Sep - 28 Sep · 2 days",
      category: "Leave",
    },
    {
      name: "Rahul Verma",
      type: "Regularization",
      details: "15 Sep · 11:00 AM → 11:30 AM",
      category: "Attendance",
    },
  ];

  const holidays = [
    {
      name: "Gandhi Jayanti",
      date: "02 Oct 2026",
      icon: "🕊️",
      remaining: "7 days",
    },
    {
      name: "Dussehra",
      date: "20 Oct 2026",
      icon: "🏹",
      remaining: "25 days",
    },
    {
      name: "Diwali",
      date: "08 Nov 2026",
      icon: "🪔",
      remaining: "44 days",
    },
  ];

  const birthdays = [
    {
      name: "Neha Joshi",
      role: "Designer",
      date: "Today",
      initials: "NJ",
    },
    {
      name: "Amit Rao",
      role: "Developer",
      date: "28 Sep",
      initials: "AR",
    },
    {
      name: "Priya Shah",
      role: "HR Executive",
      date: "30 Sep",
      initials: "PS",
    },
  ];

  return (
    <div className="dashboard">

      {/* Page Heading */}
      <div className="dashboard-heading">
        <div>
          <h1>Good afternoon, Jason</h1>

          <p>
            Here is what needs your attention today.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="dashboard-kpis">

        <div className="dashboard-card kpi-card">
          <div className="kpi-top">
            <span>Present Today</span>
            <div className="kpi-icon green">
              ✓
            </div>
          </div>

          <strong>42 / 48</strong>

          <small>
            87.5% attendance
          </small>
        </div>

        <div className="dashboard-card kpi-card">
          <div className="kpi-top">
            <span>On Leave</span>

            <div className="kpi-icon orange">
              ◷
            </div>
          </div>

          <strong>4</strong>

          <small>
            2 planned · 2 sick
          </small>
        </div>

        <div className="dashboard-card kpi-card">
          <div className="kpi-top">
            <span>Pending Approvals</span>

            <div className="kpi-icon red">
              !
            </div>
          </div>

          <strong>3</strong>

          <small>
            Leave & regularization
          </small>
        </div>

        <div className="dashboard-card kpi-card">
          <div className="kpi-top">
            <span>Onboarding</span>

            <div className="kpi-icon blue">
              ♙
            </div>
          </div>

          <strong>2</strong>

          <small>
            Documents to verify
          </small>
        </div>

      </div>

      {/* Main Grid */}
      <div className="dashboard-main-grid">

        {/* Left */}
        <div className="dashboard-left">

          {/* Approval Queue */}
          <div className="dashboard-card">
            <div className="card-heading">
              <div>
                <h2>Approval Queue</h2>
                <p>Requests waiting for your action</p>
              </div>

              <button className="text-button">
                View All
              </button>
            </div>

            <div className="approval-list">

              {approvals.map((approval) => (
                <div
                  className="approval-row"
                  key={`${approval.name}-${approval.type}`}
                >
                  <div className="employee-avatar">
                    {approval.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div className="approval-info">
                    <div>
                      <strong>{approval.name}</strong>

                      <span className="approval-tag">
                        {approval.category}
                      </span>
                    </div>

                    <p>
                      {approval.type} · {approval.details}
                    </p>
                  </div>

                  <div className="approval-actions">
                    <button className="approve-button">
                      Approve
                    </button>

                    <button className="reject-button">
                      Reject
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Attendance Chart */}
          <div className="dashboard-card">

            <div className="card-heading">
              <div>
                <h2>Attendance This Week</h2>
                <p>Average employee attendance</p>
              </div>

              <select className="dashboard-select">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
              </select>
            </div>

            <div className="attendance-chart">

              {[
                ["Mon", 92],
                ["Tue", 88],
                ["Wed", 95],
                ["Thu", 81],
                ["Fri", 94],
              ].map(([day, value]) => (
                <div className="chart-column" key={day}>

                  <span>{value}%</span>

                  <div className="chart-bar-container">
                    <div
                      className="chart-bar"
                      style={{
                        height: `${value}%`,
                      }}
                    />
                  </div>

                  <small>{day}</small>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Right */}
        <div className="dashboard-right">

          {/* Quick Actions */}
          <div className="dashboard-card">

            <div className="card-heading">
              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used actions</p>
              </div>
            </div>

            <div className="quick-actions">

              <button>
                <span>＋</span>
                Apply for Leave
              </button>

              <button>
                <span>◷</span>
                Regularize Attendance
              </button>

              <button>
                <span>♙</span>
                Add Employee
              </button>

              <button>
                <span>✎</span>
                Post Announcement
              </button>

            </div>
          </div>

          {/* Holidays */}
          <div className="dashboard-card">

            <div className="card-heading">
              <div>
                <h2>Upcoming Holidays</h2>
              </div>

              <button className="text-button">
                View Calendar
              </button>
            </div>

            <div className="simple-list">

              {holidays.map((holiday) => (
                <div className="simple-row" key={holiday.name}>

                  <div className="list-icon">
                    {holiday.icon}
                  </div>

                  <div className="simple-info">
                    <strong>{holiday.name}</strong>
                    <span>{holiday.date}</span>
                  </div>

                  <span className="green-status">
                    {holiday.remaining}
                  </span>

                </div>
              ))}

            </div>
          </div>

          {/* Birthdays */}
          <div className="dashboard-card">

            <div className="card-heading">
              <div>
                <h2>Birthdays</h2>
                <p>Next 7 days</p>
              </div>
            </div>

            <div className="simple-list">

              {birthdays.map((person) => (
                <div className="simple-row" key={person.name}>

                  <div className="employee-avatar small">
                    {person.initials}
                  </div>

                  <div className="simple-info">
                    <strong>{person.name}</strong>
                    <span>
                      {person.role} · {person.date}
                    </span>
                  </div>

                  <button className="wish-button">
                    Wish
                  </button>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;