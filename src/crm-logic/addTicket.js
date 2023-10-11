import {axiosInstance} from "../utils/api";


export const addTicket = async (ticket) => {
  try {
    const response = await axiosInstance.post('crm_v2/tickets/', ticket)
    if (response.status === 201) {
      alert('Задача готова!')
    }
  } catch (e) {
    console.log(e)
  } finally {

  }
}