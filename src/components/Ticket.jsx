import React from "react";
import styles from "../styles/Ticket.module.css";

const Ticket = ({ ticket }) => {
  if (ticket.subtask.length === 0) {
    return (
      <div className={styles.ticketContainer}>
        <p>{ticket.title}</p>
        <p>{ticket.address}</p>
        <p>{ticket.price}</p>
        <p style={{ color: "red" }}>нет подзадач</p>
      </div>
    );
  }
  const completedTickets = ticket.subtask.filter((subtask) => {
    return subtask.is_completed === true; // Add return here
  });
  return (
    <div className={styles.ticketContainer}>
      <p>{ticket.title}</p>
      <p>{ticket.address}</p>
      <p>{ticket.price}</p>
      <p style={{ color: "red" }}>
        {completedTickets.length} из {ticket.subtask.length}
        {/* Corrected typo here */}
      </p>
    </div>
  );
};

export default Ticket;
