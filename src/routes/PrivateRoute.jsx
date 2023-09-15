import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the protected content
  return element;
};

export default PrivateRoute;
