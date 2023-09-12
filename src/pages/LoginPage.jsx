import React, { useState } from "react";
import { useAuth } from "../provider/AuthContextProvider";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={formData.username}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
