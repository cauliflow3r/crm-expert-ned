import axios from "axios";
import {setToken} from "../utils/token";

export const updateAccessToken = async () => {
  const refresh = JSON.parse(localStorage.getItem("refreshToken"));
  try {
    const response = await axios.post(
      'https://realty-ggcv.onrender.com/user/refresh_token/',
      {refresh}
    );
    const access_token = response.data.access;
    setToken(access_token)

    return access_token;
  } catch (error) {
    console.error("Failed to refresh access token", error);
    throw error;
  }
};