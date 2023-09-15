import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import TicketsPage from "../pages/TicketsPage";
import Mainlayout from "../layouts/Mainlayout";
import SiteAdminPage from "../pages/SiteAdminPage";

// Private routes - so only authenticated users can access them.
function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");

  // Check for accessToken
  return accessToken ? (
    children
  ) : (
    <Navigate to="/login" replace /> // Redirect to /login if no accessToken
  );
}

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Mainlayout>
            <Routes>
              <Route
                index
                element={
                  <PrivateRoute>
                    <Homepage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/tickets"
                element={
                  <PrivateRoute>
                    <TicketsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/site-admin"
                element={
                  <PrivateRoute>
                    <SiteAdminPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Mainlayout>
        }
      />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
