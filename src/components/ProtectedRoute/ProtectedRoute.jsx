import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ loggedIn, children }) {
  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children || <Outlet />;
}

export default ProtectedRoute;
