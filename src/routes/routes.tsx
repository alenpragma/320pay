import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import GeneralSettings from "../comonents/GeneralSettings"
import Dashboard from "../pages/Dashboard/Dashboard"
import StartHere from "../pages/StartHere/StartHere"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/startHere",
        element: <StartHere />,
      },
      {
        path: "/generalSettings",
        element: <GeneralSettings />,
      },
    ],
  },

  {
    path: "/signup",
    element: <p>Signup</p>,
  },
  {
    path: "*",
    element: <p>NOT FOUND</p>,
  },
])

export default routes
