import React, { useEffect, useState } from "react";
import styles from "../styles/Taskboard.module.css";
import axios from "axios";
import Ticket from "./Ticket";
import { useTickets } from "../provider/TicketsContextProvider";
import ModalTicket from "./ModalTicket";
import AddTicketModal from "./AddTicketModal";

const AdminBoard = () => {
  const [admindata, setAdminData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);

  // const getAdminData = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://realty-ggcv.onrender.com/crm_v2/admins/",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     );
  //     setAdminData(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const {
    getTickets,
    allTickets,
    handlePatch,
    myTickets,
    addSubtask,
    updateSubtask,
  } = useTickets();
  const allUsers = JSON.parse(localStorage.getItem("allUsers"));
  console.log(allUsers);

  useEffect(() => {
    document.title = "admin panel";
    getTickets();
    // getAdminData();
  }, []);
  if (!allUsers) return null;
  if (!allTickets) return null;

  const openModal = (id) => {
    const modalticket = allTickets.find((ticket) => ticket.id === id);
    setSelectedTicket(modalticket);
    setIsOpen(true);
  };
  const closeModal = (e) => {
    setSelectedTicket(null);
    getTickets();
    setIsOpen(false);
  };
  const openAddModal = (id) => {
    setModalUser(id);
    setAddModal(true);
  };
  const closeAddModal = () => {
    getTickets();
    setAddModal(false);
  };

  return (
    <div className={styles.container}>
      <AddTicketModal
        modalUser={modalUser}
        isOpen={addModal}
        closeModal={closeAddModal}
      />
      <ModalTicket
        isOpen={isOpen}
        closeModal={closeModal}
        ticket={selectedTicket}
        handlePatch={handlePatch}
        addSubtask={addSubtask}
        updateSubtask={updateSubtask}
      />
      <div style={{ display: "flex" }}>
        {allUsers.map((user) => {
          return (
            <div
              key={user.first_name}
              style={{ display: "flex", flexDirection: "column" }}
              className={styles.taskboardGrid}
            >
              <h2>{`${user.first_name} ${user.last_name}`}</h2>
              <button onClick={() => openAddModal(user.id)}>Добавить</button>
              <p>статус: К работе </p>
              {allTickets.map((ticket) => {
                console.log(ticket);
                if (ticket.user === user.id && ticket.status === "To Do")
                  return (
                    <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                      <Ticket ticket={ticket} />
                    </div>
                  );
              })}
              <p>статус: В работе </p>
              {allTickets.map((ticket) => {
                console.log(ticket);
                if (ticket.user === user.id && ticket.status === "In Progress")
                  return (
                    <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                      <Ticket ticket={ticket} />
                    </div>
                  );
              })}
              <p>статус: Сдлелано</p>
              {allTickets.map((ticket) => {
                console.log(ticket);
                if (ticket.user === user.id && ticket.status === "Done")
                  return (
                    <div onClick={() => openModal(ticket.id)} key={ticket.id}>
                      <Ticket ticket={ticket} />
                    </div>
                  );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminBoard;
