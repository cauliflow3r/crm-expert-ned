import React, { useEffect } from "react";
import TaskBoard from "../components/TaskBoard";
import { useTickets } from "../provider/TicketsContextProvider";

const TicketsPage = () => {
  const { getTickets, allTickets, handlePatch, myTickets, addSubtask } =
    useTickets();

  useEffect(() => {
    document.title = "Задачник";
    getTickets();
  }, []);

  const handlePatchAndRefresh = async (ticketId, updatedData) => {
    try {
      await handlePatch(ticketId, updatedData);
      // After the patch request is successful, trigger a refresh by fetching the updated data
      getTickets();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ overflow: "auto", position: "absolute" }}>
      <TaskBoard
        getTickets={getTickets}
        allTickets={allTickets}
        handlePatch={handlePatchAndRefresh} // Use the custom function to handle patch and refresh
        myTickets={myTickets}
        addSubtask={addSubtask}
      />
    </div>
  );
};

export default TicketsPage;
