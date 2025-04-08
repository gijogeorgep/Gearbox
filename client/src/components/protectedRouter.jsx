import { AdminContext } from "../App";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { admin, isloading } = useContext(AdminContext);

  if (isloading) return <div>loading.......</div>;
  if (admin) {
    return <Navigate to="/adminhome" />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
