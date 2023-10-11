import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setClient_id, setDescription, setTitle, setUser} from "../features/addNewTicket/addNewTicketSlice";
import {setActive} from "../features/addNewTicket/isLoadingSlice";
import {addTicket} from "../crm-logic/addTicket";


const DataBaseAddTicket = () => {

  const ticketModal = useSelector((state) => state.ticketLoading )
  const ticket = useSelector(state => state.addNewTicket)
  const dispatch = useDispatch()
  const clientId = useSelector(state => state.getOneClient.getOneClient.id)
  const userId = localStorage.getItem('id')

  useEffect(() => {
     dispatch(setUser(userId))
     dispatch(setClient_id(clientId))
  }, [])

  const handleAddTicket = async () => {
    await addTicket(ticket)
  }

  return (
    <div onClick={() =>  dispatch(setActive(false))} className={ticketModal ? 'base-modal active' : 'base-modal'}>
      <div onClick={(e) => e.stopPropagation()} className={ticketModal ? 'modal__content active' : 'modal__content'}>
        <h2>В разработке</h2>
        <input
          type="text"
          placeholder='Заголовок задачи'
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder='Текст задачи'
          onChange={(e) => dispatch(setDescription(e.target.value))}
        />
        <input type="button" value='Создать' onClick={handleAddTicket}/>
      </div>
    </div>
  );
};

export default DataBaseAddTicket;