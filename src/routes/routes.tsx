import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import StartHere from "../pages/StartHere/StartHere"
import Deposit from "../pages/Deposit/Deposit"
import Dashboard from "../pages/Dashboard/Dashboard"
import Licenses from "../pages/Licenses/Licenses"
import Orders from "../pages/Orders/Orders"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/start-here',
        element: <StartHere />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/licenses",
        element: <Licenses />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },

  // {
  //   path: "/signup",
  //   element: <p>Signup</p>,
  // },
  // {
  //   path: "*",
  //   element: <p>NOT FOUND</p>,
  // },
])

export default routes
