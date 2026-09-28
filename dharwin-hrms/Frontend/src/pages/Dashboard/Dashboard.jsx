import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import AddOutlined from "@mui/icons-material/AddOutlined";
import CampaignOutlined from "@mui/icons-material/CampaignOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlined from "@mui/icons-material/ErrorOutlined";
import PersonAddAlt1Outlined from "@mui/icons-material/PersonAddAlt1Outlined";
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import diwaliImage from "../../assets/icons/Diwali.png";
import dussheraImage from "../../assets/icons/Dussheraa.jpg";
import gandhiJayantiImage from "../../assets/icons/Gandhi Jayanti.jpg";
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
      image: gandhiJayantiImage,
      remaining: "7 days",
    },
    {
      name: "Dussehra",
      date: "20 Oct 2026",
      image: dussheraImage,
      remaining: "25 days",
    },
    {
      name: "Diwali",
      date: "08 Nov 2026",
      image: diwaliImage,
      remaining: "44 days",
    },
  ];

  const attendance = [
    { day: "Mon", value: 92 },
    { day: "Tue", value: 88 },
    { day: "Wed", value: 95 },
    { day: "Thu", value: 81 },
    { day: "Fri", value: 94 },
  ];

  const outToday = [
    {
      name: "Priya Shah",
      initials: "PS",
      reason: "Casual leave",
      details: "28 Sep 2026 - 29 Sep 2026 · 2 days",
      status: "Approved",
    },
    {
      name: "Amit Rao",
      initials: "AR",
      reason: "Sick leave",
      details: "28 Sep 2026 - 30 Sep 2026 · 3 days",
      status: "Sick",
    },
    {
      name: "Neha Joshi",
      initials: "NJ",
      reason: "Work from home",
      details: "28 Sep 2026 · 1 day",
      status: "Remote",
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
              <CheckCircleOutlined />
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
              <AccessTimeOutlined />
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
              <ErrorOutlined />
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
              <PersonAddAlt1Outlined />
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
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendance} margin={{ top: 14, right: 16, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke="var(--chart-grid)" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "var(--text-muted)", fontSize: 11 }}
                    dy={8}
                  />
                  <YAxis
                    domain={[70, 100]}
                    ticks={[70, 80, 90, 100]}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                    width={42}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Attendance"]}
                    contentStyle={{
                      backgroundColor: "var(--surface-background)",
                      border: "1px solid var(--border-color)",
                      borderRadius: 8,
                      color: "var(--text-primary)",
                      fontSize: 12,
                    }}
                  />
                  <ReferenceLine
                    y={90}
                    stroke="#d19a36"
                    strokeDasharray="5 4"
                    label={{ value: "90% target", position: "insideTopRight", fill: "#a8751f", fontSize: 10 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    name="Attendance"
                    stroke="#2d9b57"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#ffffff", stroke: "#2d9b57", strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: "#2d9b57", stroke: "#ffffff", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Out Today */}
          <div className="dashboard-card">
            <div className="card-heading">
              <div>
                <h2>Today’s Workforce Status</h2>
                <p>Employees away or working remotely</p>
              </div>
              <span className="out-today-count">{outToday.length}</span>
            </div>

            <div className="out-today-list">
              {outToday.map((person) => (
                <div className="out-today-row" key={person.name}>
                  <div className="employee-avatar">{person.initials}</div>
                  <div className="out-today-info">
                    <strong>{person.name}</strong>
                    <span>{person.reason}</span>
                    <small>{person.details}</small>
                  </div>
                  <span className={`out-today-status ${person.status.toLowerCase()}`}>
                    <span aria-hidden="true" />
                    {person.status}
                  </span>
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
                <span className="quick-action-icon"><AddOutlined /></span>
                Apply for Leave
              </button>

              <button>
                <span className="quick-action-icon"><AccessTimeOutlined /></span>
                Regularize Attendance
              </button>

              <button>
                <span className="quick-action-icon"><PersonAddAlt1Outlined /></span>
                Add Employee
              </button>

              <button>
                <span className="quick-action-icon"><CampaignOutlined /></span>
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
                    <img src={holiday.image} alt={`${holiday.name} celebration`} />
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