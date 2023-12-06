import React, {useEffect, useState} from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/fullblack.png";
import { useUI } from "../provider/UiContextProvider";
import axios from "axios";
import RefreshIcon from '@mui/icons-material/Refresh';
import {Button} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Box from "@mui/material/Box";
import UserAdminPanel from "./UserAdminPanel";

const Navbar = () => {
  const { isOpen } = useUI();

  const firstName = localStorage.getItem("first_name");
  const lastName = localStorage.getItem("last_name");
  const token = 'MG6UhRuFknBe5vgdkOrMlulSxgLQkL9v71TMy5mP5466cc36'
  const API_KEY = '317147e078c54d6c882102156230710'
  const [isActive, setIsActive] = useState(false)
  const [isActiveWeather, setIsActiveWeather] = useState(false)
  const [data, setData] = useState({})
  const [weatherData, setWeatherData] = useState({})
  const fullName = `${firstName} ${lastName}`
  const [userModal, setUserModal] = useState(false)
  const id = localStorage.getItem('id')

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
     }
    } catch (e) {
      console.log(e)
    } finally {
      setIsActive(true)
    }
  }

  const getWeather =  async () => {
    try {
      const response =  await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Бишкек>&aqi=no`)
      if (response.status === 200 ) {
        setWeatherData(response.data)
      }
    } catch (e) {
      console.log('Ошибка получения погоды!')
    } finally {
      setIsActiveWeather(true)
    }
  }


  useEffect(() => {
    getCourse()
    getWeather()
  }, [])

  return (
    <div className={`${styles.container} ${isOpen ? styles.minimized : ""}`}>
      <div className={styles.left}>
        <img style={{ height: "100px" }} src={logo} alt="" />
      </div>
      <div className={styles.right}>

        { isActiveWeather ?
            <div className={styles.weatherWrap}>
              <span>{weatherData.current.temp_c} ℃</span>
              <img
                  className={styles.weatherWrapImg}
                  src={weatherData.current.condition.icon}
                  alt="weather-icon"
              />
              <div
                  onClick={getWeather}
                  className={styles.refreshIcon}
              >
                <RefreshIcon
                    size='small'
                />
              </div>
            </div>
            :
            <Box sx={{ width: 100, marginRight: '20px' }}>
              <Skeleton animation="wave"/>
            </Box>
        }

        {isActive ?
              <div className={styles.currency}>
                <span>1 USD ≈ {data.buy_usd} с.</span>
              </div>
            :
            <Box sx={{ width: 100, marginRight: '20px' }}>
              <Skeleton animation="wave"/>
            </Box>
        }

        <Button
            onClick={ id === '6' || id === '7' ? () => setUserModal(true) : null}
            color='success'
            variant='contained'
            size='small'
            sx={{marginRight: '20px'}}
        >
          {fullName}
        </Button>

        <Button
            onClick={logout}
            color='success'
            variant='contained'
            size='small'
            sx={{marginRight: '20px'}}
        >
          Выйти
        </Button>
      </div>
      {userModal &&
          <UserAdminPanel
              userModal={userModal}
              setUserModal={setUserModal}
          />
      }
    </div>
  );
};

export default Navbar;
