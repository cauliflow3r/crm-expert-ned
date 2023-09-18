import React, { useEffect } from "react";
import TaskBoard from "../components/TaskBoard";
import { useTickets } from "../provider/TicketsContextProvider";

const TicketsPage = () => {
  const { getTickets, allTickets, handlePatch, myTickets } = useTickets();
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
      />
    </div>
  );
};

export default TicketsPage;
