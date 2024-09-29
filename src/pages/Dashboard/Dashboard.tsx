import BalanceCard from "../../Components/dashboard/BalanceCard";
import DashboardCardOne from "../../Components/dashboard/DashboardCardOne";
import DashboardCardTwo from "../../Components/dashboard/DashboardCardTwo";
import DashboardTable from "../../Components/dashboard/DashboardTable";
import axiosInstance from "../../utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

export interface Wallet {
  token_symbol: string;
  chainID: string;
}

const Dashboard = () => {
  const fetchData = async () => {
    const [profile, tokens, wallets, lastSessions, dashboardData] =
      await Promise.all([
        axiosInstance.get(`/client-profile`),
        axiosInstance.get(`/client-tokens`),
        axiosInstance.get(`/client-wallets`),
        axiosInstance.get(`/user-last-sessions`),
        axiosInstance.get(`/client/dashboard-data`),
      ]);
    return {
      profile: profile.data,
      tokens: tokens.data,
      wallet: wallets.data,
      lastSession: lastSessions.data,
      dashboardData: dashboardData.data,
    };
  };
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["profile", "tokens", "wallets", "lastSessions", "dashboardData"],
    queryFn: fetchData,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);
  const profile = data?.profile?.profile;
  const tokens = data?.tokens?.data;
  const wallets = data?.wallet?.data;
  const lastSessions = data?.lastSession?.sessions?.data;
  const dashboardData = data?.dashboardData?.data;
  const balance = tokens?.find((wallet: Wallet) => {
    return wallet.token_symbol === "USDT" && wallet.chainID === "56";
  });

  return (
    <div className="md:p-6 px-3 space-y-5 pt-4">
      <DashboardCardOne
        clientProfile={profile}
        totalBalance={balance}
        isLoading={isLoading}
        wallets={wallets}
        refetch={refetch}
      />
      <BalanceCard wallets={tokens} loading={isLoading} />
      <DashboardCardTwo dashboardData={dashboardData} isLoading={isLoading} />
      <DashboardTable lastSessions={lastSessions} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
