import React, { useState } from "react";
import { useAuth } from "../provider/AuthContextProvider";
import "../styles/Loginpage.css";
import { AiOutlineUser, AiFillUnlock } from "react-icons/ai";
import logo from "../assets/fullblack.png";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { handleLogin, setCurrentUser } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <img src={logo} alt="" className="logo" />
          <div className="input-container">
            <AiOutlineUser className="input-icon" />
            <input
              className="login-input"
              onChange={handleInputChange}
              value={formData.username}
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <AiFillUnlock className="input-icon" />
            <input
              className="login-input"
              onChange={handleInputChange}
              value={formData.password}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
