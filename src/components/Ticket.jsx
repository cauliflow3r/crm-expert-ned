import React from "react";
import styles from "../styles/Ticket.module.css";

const Ticket = ({ ticket }) => {
  return (
    <div className={styles.ticketContainer}>
      <p>{ticket.title}</p>
      <p>{ticket.address}</p>
      <p>{ticket.price}</p>
    </div>
  );
};

export default Ticket;
