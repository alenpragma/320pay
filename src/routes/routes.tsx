import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import StartHere from "../pages/StartHere/StartHere";
import Deposit from "../pages/Deposit/Deposit";
import Dashboard from "../pages/Dashboard/Dashboard";
import Licenses from "../pages/Licenses/Licenses";
import PurchasePlane from "../pages/PurchasePlane/PurchasePlane";
import DepositLog from "../pages/DepositLog/DepositLog";
import Login from "../pages/Register/Login";
import Register from "../pages/Register/Register";
import Wallet from "../pages/Wallet/WalletPage";
import TransitionHistory from "../pages/TransitionHistory/TransitionHistory";
import NotFound from "../pages/NotFound/NotFound";
import ProtectRoute from "../comonents/ProtectRouter/ProtectRoute";
import Payment from "../pages/Payment/Payment";
import WithdrawHistory from "../pages/WithdrawHistory/WithdrawHistory";
import Withdraw from "../pages/Withdraw/Withdraw";
import ManageServer from "../pages/ManageServer/ManageSerever";
import Otp from "../pages/OtpPage/Otp";
import Preview from "../pages/Preview/Preview";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import PasswordOtp from "../pages/ResetPassword/PasswordOtp";
import SetNewPassword from "../pages/ResetPassword/SetNewPassword";
import LoginLayout from "../layouts/LoginLayout";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <App />
      </ProtectRoute>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/start-here",
        element: <StartHere />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/licenses",
        element: <Licenses />,
      },
      {
        path: "/transaction-history",
        element: <TransitionHistory />,
      },
      {
        path: "/purchase-plan",
        element: <PurchasePlane />,
      },
      {
        path: "/deposit-log",
        element: <DepositLog />,
      },
      {
        path: "/withdraw-history",
        element: <WithdrawHistory />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/withdraw/preview/otp",
        element: <Otp />,
      },
      {
        path: "/withdraw/preview",
        element: <Preview />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/login/password-reset",
    element: <LoginLayout />,
    children: [
      {
        path: "",
        element: <ResetPassword />,
      },
      {
        path: "password-otp",
        element: <PasswordOtp />,
      },
      {
        path: "password-otp/confirm-password",
        element: <SetNewPassword />,
      },
    ],
  },
]);

export default routes;
