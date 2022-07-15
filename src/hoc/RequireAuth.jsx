import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
  console.log(isAuth, location);
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default RequireAuth;
