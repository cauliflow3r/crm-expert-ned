import React, { createContext, useContext, useState } from "react";
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
      console.log(allTickets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log(allTickets);
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

  // const getMyTickets = () => {
  //   localStorage.getItem("username");
  //   allTickets;
  // };

  const values = { getTickets, allTickets, handlePatch };

  return (
    <ticketsContext.Provider value={values}>{children}</ticketsContext.Provider>
  );
};
