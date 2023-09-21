import React, { useState } from "react";
import styles from "../styles/Taskboard.module.css";
import Ticket from "./Ticket";
import ModalTicket from "./ModalTicket";

const TaskBoard = ({ allTickets, myTickets, handlePatch, addSubtask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (id) => {
    const modalticket = allTickets.find((ticket) => ticket.id === id);
    setSelectedTicket(modalticket);
    setIsOpen(true);
  };
  const closeModal = (e) => {
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
          handlePatch={handlePatch}
          addSubtask={addSubtask}
        />

        <div className={styles.taskboardGrid}>
          <div className={styles.newTickets}>
            <h2 className={styles.title}>
              Новые Обьявления :{" "}
              {allTickets.filter((ticket) => ticket.user === null).length}
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
            <h2 className={styles.title}>
              К работе :
              {myTickets.filter((ticket) => ticket.status === "To Do").length}
            </h2>

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
            <h2 className={styles.title}>
              В работе:{" "}
              {
                myTickets.filter((ticket) => ticket.status === "In Progress")
                  .length
              }
            </h2>

            {myTickets.map((ticket) => {
              if (ticket.status === "In Progress") {
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
            <h2 className={styles.title}>
              Сделано :{" "}
              {myTickets.filter((ticket) => ticket.status === "Done").length}
            </h2>

            {myTickets.map((ticket) => {
              if (ticket.status === "Done") {
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
            <h2 className={styles.title}>
              Архив :
              {myTickets.filter((ticket) => ticket.archived === true).length}
            </h2>

            {myTickets.map((ticket) => {
              if (ticket.archived === true) {
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
