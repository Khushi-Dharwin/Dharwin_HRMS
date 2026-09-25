import WelcomeHeader from "../../components/dashboard/WelcomeHeader";
import KPISection from "../../components/dashboard/KPISection";
import ApprovalQueue from "../../components/dashboard/ApprovalQueue";
import AttendanceChart from "../../components/dashboard/AttendanceChart";
import OutToday from "../../components/dashboard/OutToday";
import QuickActions from "../../components/dashboard/QuickActions";
import UpcomingHolidays from "../../components/dashboard/UpcomingHolidays";
import UpcomingBirthdays from "../../components/dashboard/UpcomingBirthdays";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <WelcomeHeader />

      <KPISection />

      <div className="dashboard-grid">
        <div className="dashboard-main">
          <ApprovalQueue />
          <AttendanceChart />
          <OutToday />
        </div>

        <div className="dashboard-side">
          <QuickActions />
          <UpcomingHolidays />
          <UpcomingBirthdays />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;