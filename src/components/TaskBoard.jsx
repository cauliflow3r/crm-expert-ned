import React, { useState } from "react";
import styles from "../styles/Taskboard.module.css";
import Ticket from "./Ticket";
import ModalTicket from "./ModalTicket";

const TaskBoard = ({ allTickets, myTickets }) => {
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
  // console.log(allTickets);
  return (
    <div className={styles.container}>
      <div className={styles.appWindow}>
        <ModalTicket
          isOpen={isOpen}
          closeModal={closeModal}
          ticket={selectedTicket}
        />

        <div className={styles.taskboardGrid}>
          <div className={styles.newTickets}>
            <h2 className={styles.title}>
              Новые Обьявления : {allTickets.length}
            </h2>
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
        <div className={styles.taskboardGrid}>
          <div className={styles.inProgressTickets}>
            <h2 className={styles.title}>Мои Задачи : {myTickets.length}</h2>

            {myTickets.map((ticket) => {
              if (ticket.status === "To Do") {
                return (
                  <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                    <Ticket ticket={ticket} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.taskboardGrid}>
          <div className={styles.inProgressTickets}>
            <h2 className={styles.title}>Мои Задачи : {myTickets.length}</h2>

            {myTickets.map((ticket) => {
              if (ticket.status === "To Do") {
                return (
                  <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                    <Ticket ticket={ticket} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.taskboardGrid}>
          <div className={styles.inProgressTickets}>
            <h2 className={styles.title}>Мои Задачи : {myTickets.length}</h2>

            {myTickets.map((ticket) => {
              if (ticket.status === "To Do") {
                return (
                  <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                    <Ticket ticket={ticket} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={styles.taskboardGrid}>
          <div className={styles.inProgressTickets}>
            <h2 className={styles.title}>Мои Задачи : {myTickets.length}</h2>

            {myTickets.map((ticket) => {
              if (ticket.status === "To Do") {
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
    </div>
  );
};

export default TaskBoard;
