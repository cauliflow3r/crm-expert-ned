import React from "react";
import styles from "../styles/Ticket.module.css";

const ModalTicket = ({ ticket, closeModal, isOpen }) => {
  if (!ticket) return null;
  console.log(ticket);
  return (
    <div className={`${isOpen ? styles.modalTicketOpen : styles.modalTicket}`}>
      <p>{ticket.title}</p>
      <button className={styles.btn} onClick={closeModal}>
        X
      </button>
      <button className={styles.btn}>забрать себе</button>
    </div>
  );
};

export default ModalTicket;
