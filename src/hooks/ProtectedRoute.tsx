import { Navigate, useLocation } from 'react-router-dom';
import { getTizaraAdminToken } from './handelAdminToken';

const ProtectedRoute = ({ children }: any) => {
  const location = useLocation();

  if (!getTizaraAdminToken) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
