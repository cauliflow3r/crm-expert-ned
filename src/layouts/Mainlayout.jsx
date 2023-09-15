import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styles from "../styles/MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { useUI } from "../provider/UiContextProvider";

const Mainlayout = ({ children }) => {
  const { isOpen } = useUI();

  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      <Sidebar />
      <div className={`${styles.mainContainer} ${isOpen ? styles.open : ""}`}>
        <Navbar />
        {children}
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
