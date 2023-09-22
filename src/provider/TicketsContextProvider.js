import React, { createContext, useContext, useEffect, useState } from "react";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";

export const ticketsContext = createContext();
export const useTickets = () => useContext(ticketsContext);
export const API = "https://realty-ggcv.onrender.com";

export const TicketsContextProvider = ({ children }) => {
  const [allTickets, setAllTickets] = useState(null);
  const [myTickets, setMyTickets] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTickets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/crm_v2/tickets/`);
      setAllTickets(res.data.results);
      console.log(res.data.results);
      const userTickets = res.data.results.filter(
        (ticket) => ticket.user == localStorage.getItem("id")
      );
      setMyTickets(userTickets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handlePatch = async (id, data) => {
    try {
      const res = await axios.patch(`${API}/crm_v2/tickets/${id}/`, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const setTicketUser = async (ticketId) => {
    const toSend = await allTickets.filter((ticket) => ticket.id === ticketId);
    console.log(toSend);
    try {
      await axios.patch(`/crm_v2/tickets/${ticketId}/`, toSend[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // ! SUBTASK
  const addSubtask = async (subtask) => {
    try {
      await axios.post(`${API}/crm_v2/subtasks/`, subtask);
    } catch (error) {
      console.log(error);
    }
  };
  const updateSubtask = async (subtaskId, updatedSubtaskData) => {
    try {
      await axios.patch(
        `${API}/crm_v2/subtasks/${subtaskId}/`,
        updatedSubtaskData
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const getMyTickets = () => {
  //   localStorage.getItem("username");
  //   allTickets;
  // };

  const values = {
    getTickets,
    allTickets,
    handlePatch,
    myTickets,
    addSubtask,
    updateSubtask,
  };

  return (
    <ticketsContext.Provider value={values}>{children}</ticketsContext.Provider>
  );
};
