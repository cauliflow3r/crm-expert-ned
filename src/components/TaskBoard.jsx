import React, { useState } from "react";
import styles from "../styles/Taskboard.module.css";
import Ticket from "./Ticket";
import ModalTicket from "./ModalTicket";

const TaskBoard = ({ allTickets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const openModal = (id) => {
    const modalticket = allTickets.find((ticket) => ticket.id === id);
    setSelectedTicket(modalticket);
    setIsOpen(true);
  };
  const closeModal = () => {
    setSelectedTicket(null);
    setIsOpen(false);
  };

  if (!allTickets) return null;
  console.log(allTickets);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Задачники</h1>

      <ModalTicket
        isOpen={isOpen}
        closeModal={closeModal}
        ticket={selectedTicket}
      />

      <div className={styles.taskboardGrid}>
        <div className={styles.newTickets}>
          {allTickets.map((ticket) => {
            if (ticket.status === "New") {
              return (
                <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                  <Ticket ticket={ticket} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
