import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styles from "../styles/MainLayout.module.css";

const Mainlayout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      <Sidebar />
      <div className={styles.mainContainer}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Mainlayout;
