import React from "react";
import styles from "../styles/Taskboard.module.css";

const TaskBoard = ({ allTickets, handlePatch }) => {
  if (!allTickets) {
    // If allTickets is not available (loading), display a loading indicator
    return <div className={styles.loading}>Loading...</div>;
  }

  if (allTickets.length === 0) {
    // If there are no tickets to display, show a message
    return <div className={styles.noTickets}>No tickets available.</div>;
  }

  return (
    <div className={styles.container}>
      {allTickets.map((ticket) => (
        <div key={ticket.id} className={styles.ticket}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <button onClick={() => handlePatch(ticket.id)}>Update Ticket</button>
          {/* Add more ticket information as needed */}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
