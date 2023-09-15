import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/fullblack.png";
import { useUI } from "../provider/UiContextProvider";

const Navbar = () => {
  const { isOpen } = useUI();

  const firstName = localStorage.getItem("first_name");
  const lastName = localStorage.getItem("last_name");
  function getInitials(firstName, lastName) {
    const firstInitial = firstName ? firstName.charAt(0) : "";
    const lastInitial = lastName ? lastName.charAt(0) : "";

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }

  const storedFirstName = localStorage.getItem("first_name") || "";
  const storedLastName = localStorage.getItem("last_name") || "";

  const initials = getInitials(storedFirstName, storedLastName);

  console.log("Initials:", initials);

  return (
    <div className={`${styles.container} ${isOpen ? styles.minimized : ""}`}>
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
        <button className={styles.profile}>{initials}</button>
      </div>
    </div>
  );
};

export default Navbar;
