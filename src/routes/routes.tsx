import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import StartHere from "../pages/StartHere/StartHere";
import Deposit from "../pages/Deposit/Deposit";
import Dashboard from "../pages/Dashboard/Dashboard";
import Licenses from "../pages/Licenses/Licenses";
import Orders from "../pages/Orders/Orders";
import PurchasePlane from "../pages/PurchasePlane/PurchasePlane";
import DepositLog from "../pages/DepositLog/DepositLog";
import Login from "../pages/Register/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../comonents/ProtectRouter/ProtectRoute";
import Wallet from "../pages/Wallet/WalletPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
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
        path: "/licenses",
        element: <Licenses />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/purchase-plane",
        element: <PurchasePlane />,
      },
      {
        path: "/deposit-log",
        element: <DepositLog />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <p>NOT FOUND</p>,
  },
]);

export default routes;
