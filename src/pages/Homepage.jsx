import React from "react";
import Mainlayout from "../layouts/Mainlayout";
import TaskBoard from "../components/TaskBoard";

const Homepage = () => {
  return (
    <div>
      <Mainlayout>
        <TaskBoard />
      </Mainlayout>
    </div>
  );
};

export default Homepage;
