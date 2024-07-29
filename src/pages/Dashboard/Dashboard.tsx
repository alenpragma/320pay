import DashboardCardOne from "../../comonents/dashboard/DashboardCardOne";
import DashboardCardTwo from "../../comonents/dashboard/DashboardCardTwo";
import DashboardTable from "../../comonents/dashboard/DashboardTable";

const Dashboard = () => {
  return (
    <div className="md:p-6 px-3 space-y-5 pt-4">
      <DashboardCardOne />
      <DashboardCardTwo />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
