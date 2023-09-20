import React, { useEffect } from "react";
import TaskBoard from "../components/TaskBoard";
import { useTickets } from "../provider/TicketsContextProvider";

const TicketsPage = () => {
  const { getTickets, allTickets, handlePatch, myTickets, addSubtask } =
    useTickets();
  useEffect(() => {
    document.title = "Tickets";
    getTickets();
  }, []);

  return (
    <div style={{ overflow: "auto", position: "absolute" }}>
      <TaskBoard
        allTickets={allTickets}
        handlePatch={handlePatch}
        myTickets={myTickets}
        addSubtask={addSubtask}
      />
    </div>
  );
};

export default TicketsPage;
