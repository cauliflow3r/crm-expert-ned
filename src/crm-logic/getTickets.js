import {axiosInstance} from "../utils/api";
import {setChangeTitleTicket, setCreatedTicket, setDescriptionTicket} from "../features/ticketData/ticketDataSlice";

export const getTickets = async (id, dispatch) => {

  try {
    const response = await axiosInstance.get(`crm_v2/tickets/${id}`)
    const data = response.data
    if (response.status === 200) {
      dispatch(setChangeTitleTicket(data.title))
      dispatch(setDescriptionTicket(data.description))
      dispatch(setCreatedTicket(data.created_at))
    }
  } catch (e) {
    console.log(e)
  } finally {

  }
}