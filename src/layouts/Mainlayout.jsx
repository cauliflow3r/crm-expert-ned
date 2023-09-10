import React from "react";
import Sidebar from "../components/Sidebar";

const Mainlayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Mainlayout;
