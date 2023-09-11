import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { Squash as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
    console.log("clicked");
  };

  return (
    <div
      className={`${styles.container} ${isMinimized ? styles.minimized : ""}`}
    >
      <div className={styles.imageContainer}>
        <Hamburger
          toggled={!isMinimized}
          toggle={toggleSidebar}
          color="white"
        />
      </div>
      <div className={styles.navigation}>
        <button className={`${isMinimized ? styles.centered : ""}`}>
          <img
            className={styles.btnLogo}
            width="30px"
            height="30px"
            src="https://img.icons8.com/material-outlined/96/cloud-database.png"
            alt="cloud-database"
          />
          <p
            className={`${styles.btnLabel} ${isMinimized ? styles.hidden : ""}`}
          >
            Клиетская база
          </p>
        </button>
        <button className={`${isMinimized ? styles.centered : ""}`}>
          <img
            className={styles.btnLogo}
            width="30px"
            height="30px"
            src="https://img.icons8.com/external-basicons-line-edtgraphics/50/external-Kanban-project-management-basicons-line-edtgraphics.png"
            alt="external-Kanban-project-management-basicons-line-edtgraphics"
          />
          <p
            className={`${styles.btnLabel} ${isMinimized ? styles.hidden : ""}`}
          >
            Задачник
          </p>
        </button>
        <button className={`${isMinimized ? styles.centered : ""}`}>
          <img
            className={styles.btnLogo}
            width="30px"
            height="30px"
            src="https://img.icons8.com/ios/50/internet-browser--v1.png"
            alt="internet-browser--v1"
          />
          <p
            className={`${styles.btnLabel} ${isMinimized ? styles.hidden : ""}`}
          >
            Сайт
          </p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
