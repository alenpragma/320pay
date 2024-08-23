import { useEffect, useState } from "react";
import DashboardCardOne from "../../comonents/dashboard/DashboardCardOne";
import DashboardCardTwo from "../../comonents/dashboard/DashboardCardTwo";
import DashboardTable from "../../comonents/dashboard/DashboardTable";
import axiosInstance from "../../utils/axiosConfig";
import BalanceCard from "../../comonents/dashboard/BalanceCard";

const Dashboard = () => {
  const [clientProfile, setClientProfile] = useState();

  const getData = async () => {
    const response = await axiosInstance.get("/client-profile");
    if (response?.data?.success == 200) {
      setClientProfile(response?.data?.profile);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="md:p-6 px-3 space-y-5 pt-4">
      <DashboardCardOne clientProfile={clientProfile} />
      <BalanceCard />
      <DashboardCardTwo />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
