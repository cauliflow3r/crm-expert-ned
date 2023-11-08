import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/Ticket.module.css";

const AddTicketModal = ({ isOpen, closeModal, modalUser }) => {
  const [ticket, setTicket] = useState({
    title: "",
    phone: "",
    address: "",
    price: "",
    link: "",
    description: "",
    comment: "",
    archived: false,
    status: "To Do",
    color: "black",
    user: modalUser,
    client_id: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(ticket.user);
    console.log(name, value); // Log the name and value
    setTicket({ ...ticket, [name]: value });
  };
  const setUser = () => {
    setTicket({ ...ticket, user: modalUser });
  };

  const postTicket = async () => {
    try {
      const res = await axios.post(
        "https://realty-ggcv.onrender.com/crm_v2/tickets/",
        ticket
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${!isOpen ? styles.modalTicket : styles.modalTicketOpen}`}>
      <button style={{ marginBottom: "10px" }} onClick={closeModal}>
        X
      </button>
      <input
        onChange={handleInputChange}
        type="text"
        name="title"
        placeholder="Заголовок"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="phone"
        placeholder="Телефон"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="address"
        placeholder="Адрес"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="price"
        placeholder="Цена"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="link"
        placeholder="Ссылка"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="description"
        placeholder="Описание"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="comment"
        placeholder="Коментарии"
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="user"
        placeholder="мэнеджер"
        value={modalUser}
      />
      <input
        onChange={handleInputChange}
        type="text"
        name="client_id"
        placeholder="id клиента"
      />
      <button
        onClick={() => {
          setUser();
          postTicket();
          closeModal();
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default AddTicketModal;
