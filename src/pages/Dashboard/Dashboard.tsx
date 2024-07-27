import DashboardCardOne from "../../comonents/dashboard/DashboardCardOne";
import DashboardCardTwo from "../../comonents/dashboard/DashboardCardTwo";
import DashboardTable from "../../comonents/dashboard/DashboardTable";

const Dashboard = () => {
  return (
    <div className="p-5 space-y-5">
      <DashboardCardOne />
      <DashboardCardTwo />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
