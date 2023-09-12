import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const API = "https://realty-ggcv.onrender.com";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/user/login/`, formData);
      const { access, refresh } = res.data;
      localStorage.setItem("accessToken", JSON.stringify(access));
      localStorage.setItem("refreshToken", JSON.stringify(refresh));
      localStorage.setItem("user", JSON.stringify(formData.username));
      const allUsers = await axios.get(`${API}/user/profile/`);

      // setting currentuser info
      for (const user of allUsers.data.results) {
        if (user.username === formData.username) {
          localStorage.setItem("id", user.id);
          localStorage.setItem("first_name", user.first_name);
          localStorage.setItem("last_name", user.last_name);
          break;
        }
      }

      navigate("/");
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
  const getToken = (type = "accessToken") => {
    const token = localStorage.getItem(type);
    return token || "";
  };
  const setToken = (token, type = "accessToken") => {
    if (!token) {
      return;
    }
    localStorage.setItem(type, token);
  };

  const values = {
    currentUser,
    errorMessage,
    loading,
    handleLogin,
    getToken,
    setToken,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
