import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import { useUI } from "../provider/UiContextProvider";

const Sidebar = () => {
  const { toggleSidebar, isOpen } = useUI();

  const navigate = useNavigate();

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.imageContainer}>
        <Hamburger toggled={isOpen} toggle={toggleSidebar} color="white" />
      </div>
      <div className={styles.navigation}>
        <button
          onClick={() => navigate("/")}
          className={`${isOpen ? styles.centered : ""}`}
        >
          <img
            className={styles.btnLogo}
            width="30px"
            height="30px"
            src="https://img.icons8.com/material-outlined/96/cloud-database.png"
            alt="cloud-database"
          />
          <p className={`${styles.btnLabel} ${isOpen ? "" : styles.hidden}`}>
            Клиетская база
          </p>
        </button>
        <button
          onClick={() => navigate("/tickets")}
          className={`${isOpen ? styles.centered : ""}`}
        >
          <img
            className={styles.btnLogo}
            width="30px"
            height="30px"
            src="https://img.icons8.com/external-basicons-line-edtgraphics/50/external-Kanban-project-management-basicons-line-edtgraphics.png"
            alt="external-Kanban-project-management-basicons-line-edtgraphics"
          />
          <p className={`${styles.btnLabel} ${isOpen ? "" : styles.hidden}`}>
            Задачник
          </p>
        </button>
        <button
          onClick={() => navigate("/site-admin")}
          className={`${isOpen ? styles.centered : ""}`}
        >
          <img
            className={styles.btnLogo}
            width="30px"
            height="30px"
            src="https://img.icons8.com/ios/50/internet-browser--v1.png"
            alt="internet-browser--v1"
          />
          <p className={`${styles.btnLabel} ${isOpen ? "" : styles.hidden}`}>
            Сайт
          </p>
        </button>
        {localStorage.getItem("id") == 6 && (
          <button
            onClick={() => navigate("/admin")}
            className={`${isOpen ? styles.centered : ""}`}
          >
            <img
              className={styles.btnLogo}
              width="30px"
              height="30px"
              src="https://img.icons8.com/3d-fluency/94/manager--v3.png"
              alt="manager--v3"
            />
            <p className={`${styles.btnLabel} ${isOpen ? "" : styles.hidden}`}>
              Admin
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
