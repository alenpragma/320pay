// import { Navigate, useLocation } from "react-router-dom";

// export const userInfo = {
//   name: "edulife",
//   password: "1234",
// };

// const AdminRoute = ({ children } : any) => {
//   const name = localStorage.getItem("username");
//   const password = localStorage.getItem("password");
//   const location = useLocation();

//   if (userInfo.name == name && password == userInfo.password) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace />;
// };

// export default AdminRoute;

import { Navigate, useLocation } from "react-router-dom";

export const userInfo = {
  name: "edulife",
  password: "1234",
};

const ProtectRoute = ({ children } : any) => {
  const name = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const location = useLocation();
  console.log(location.pathname);

  if (userInfo.name === name && userInfo.password === password) {
    if (location.pathname === "/login") {
      return <Navigate to="/" replace />; // Redirect to home or another page if logged in and trying to access login
    }
    return children;
  }
  
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectRoute;
