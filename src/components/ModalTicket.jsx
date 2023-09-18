import React, { useEffect, useState } from "react";
import styles from "../styles/Ticket.module.css";

const ModalTicket = ({ ticket, closeModal, isOpen, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState({ ...ticket });
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket({
      ...editedTicket,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onUpdate(editedTicket);
    setIsEditing(false);
  };

  if (!ticket) return null;

  return (
    <div className={`${isOpen ? styles.modalTicketOpen : styles.modalTicket}`}>
      <div className={styles.modalTop}>
        <p className={styles.modalTitle}>{ticket.title}</p>
        <button className={styles.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
      <div className={styles.modalBody}>
        {isEditing ? (
          <form>
            <input
              type="text"
              name="title"
              value={editedTicket.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              value={editedTicket.address}
              onChange={handleInputChange}
            />
            <input type="text" name="price" value={editedTicket.price} />
            <input type="text" name="link" value={editedTicket.link} />
            <input type="text" name="phone" value={editedTicket.phone} />
            <button onClick={handleSaveClick}>Сохранить</button>
          </form>
        ) : (
          <ul style={{ listStyleType: "none" }}>
            <li>ID: {ticket.id}</li>
            <li>Адрес: {ticket.address}</li>
            <li>Цена: {ticket.price}</li>
            <li>
              <a href={ticket.link} target="_blank" rel="noreferrer noopener">
                Ссылка на объявление
              </a>
            </li>
            <li>Телефон: {ticket.phone}</li>
            <br />
            <li>Описание: {ticket.description}</li>
            {/* Display other ticket details */}
          </ul>
        )}
        <button onClick={handleEditClick}>Редактировать</button>
      </div>
      <div className={styles.bottomButtons}>
        <button>Забрать себе</button>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default ModalTicket;
