import React, { useEffect } from "react";
import TaskBoard from "../components/TaskBoard";
import { useTickets } from "../provider/TicketsContextProvider";

const TicketsPage = () => {
  const { getTickets, allTickets, handlePatch } = useTickets();
  useEffect(() => {
    document.title = "Tickets";
    getTickets();
  }, []);

  return (
    <div style={{ overflow: "auto", position: "absolute" }}>
      <TaskBoard allTickets={allTickets} handlePatch={handlePatch} />
    </div>
  );
};

export default TicketsPage;
