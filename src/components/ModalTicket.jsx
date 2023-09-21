import React, { useEffect, useState } from "react";
import styles from "../styles/Ticket.module.css";

const ModalTicket = ({
  ticket,
  closeModal,
  isOpen,
  handlePatch,
  addSubtask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState({ ...ticket });

  const [subtask, setSubtask] = useState({
    description: "",
    is_completed: false,
    // ticket: ticket.id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket({
      ...editedTicket,
      [name]: value,
    });
  };
  const takeTicket = async () => {
    const updatedTicket = {
      ...editedTicket,
      user: localStorage.getItem("id"), // Set the user field to the localStorage id
      status: "To Do",
      archived: false,
    };

    try {
      // Send the PATCH request with the updatedTicket data
      await handlePatch(ticket.id, updatedTicket);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveClick = () => {
    handlePatch(editedTicket);
    setIsEditing(false);
  };

  const handleStatusChange = async (e) => {
    const { value } = e.target;
    let updatedTicket = { ...editedTicket };
    console.log(value);

    if (value === "Archived") {
      updatedTicket = {
        ...updatedTicket,
        status: "Done",
        archived: true,
      };
    } else {
      updatedTicket = {
        ...updatedTicket,
        status: value,
        archived: false,
      };
    }

    try {
      await handlePatch(ticket.id, updatedTicket);
    } catch (error) {
      console.log(error);
    }
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
        <button>Редактировать</button>
        <ul>
          <h4>Подзадачи</h4>
          {ticket.subtask ? (
            <>
              {ticket.subtask.map((subtask) => (
                <li key={subtask.id}>
                  <input
                    type="checkbox"
                    name="is_completed"
                    checked={subtask.is_completed}
                  />
                  {subtask.description}
                </li>
              ))}
            </>
          ) : (
            <>
              <li>Создать подзадачу</li>
            </>
          )}
        </ul>
      </div>
      <input
        onChange={(e) =>
          setSubtask({
            ...subtask,
            description: e.target.value,
            ticket: ticket.id,
          })
        }
        type="text"
        name="description"
        placeholder="Добавить подзадачу"
      />
      <div className={styles.bottomButtons}>
        <button onClick={() => addSubtask(subtask)}>Добавить подзадачу</button>
        {ticket.user ? (
          <select
            name="status"
            onChange={handleStatusChange}
            value={editedTicket.status}
          >
            <option value="To Do">К работе</option>
            <option value="In Progress">В работе</option>
            <option value="Done">Сделано</option>
            <option value="Archived">Архив</option>
          </select>
        ) : (
          <button onClick={() => takeTicket()}>Забрать себе</button>
        )}

        <button>Удалить</button>
      </div>
    </div>
  );
};

export default ModalTicket;
