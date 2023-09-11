import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/fullblack.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img style={{ height: "100px" }} src={logo} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <input
            className={styles.searchInp}
            type="text"
            name=""
            id=""
            placeholder="Поиск"
          />
          <button className={styles.searchBtn}>Поиск</button>
        </div>
        <button className={styles.profile}>Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
