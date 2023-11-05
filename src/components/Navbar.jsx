import React, {useEffect, useState} from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/fullblack.png";
import { useUI } from "../provider/UiContextProvider";
import axios from "axios";

const Navbar = () => {
  const { isOpen } = useUI();

  const firstName = localStorage.getItem("first_name");
  const lastName = localStorage.getItem("last_name");
  const token = 'MG6UhRuFknBe5vgdkOrMlulSxgLQkL9v71TMy5mP5466cc36'
  const [isActive, setIsActive] = useState(false)
  const [data, setData] = useState({})
  function getInitials(firstName, lastName) {
    const firstInitial = firstName ? firstName.charAt(0) : "";
    const lastInitial = lastName ? lastName.charAt(0) : "";

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }

  const storedFirstName = localStorage.getItem("first_name") || "";
  const storedLastName = localStorage.getItem("last_name") || "";

  const initials = getInitials(storedFirstName, storedLastName);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("id");
    localStorage.removeItem("allUsers");
    window.location.href = "/";
  };

  const getCourse = async () => {
    try {
      const response = await axios.get('https://data.fx.kg/api/v1/average', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
     if (response.status === 200) {
       setData(response.data)
       setIsActive(true)
     }
    } catch (e) {
      console.log(e)
      setIsActive(false)
    }
  }

  useEffect(() => {
    getCourse()
  }, [])

  return (
    <div className={`${styles.container} ${isOpen ? styles.minimized : ""}`}>
      <div className={styles.left}>
        <img style={{ height: "100px" }} src={logo} alt="" />
      </div>
      <div className={styles.right}>
        {isActive &&
              <div className={styles.currency}>
                <span>1 $ = {data.buy_usd} с.</span>
                <span>1 ₽ = {data.buy_rub} с.</span>
              </div>

        }
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
        <button style={{ marginRight: "10px" }} onClick={logout}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Navbar;
