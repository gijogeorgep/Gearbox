import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/adminlogin" />;
};

const sellerProtectRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/sellerlogin" />;
};

export default ProtectedRoute;
export { sellerProtectRoute };
