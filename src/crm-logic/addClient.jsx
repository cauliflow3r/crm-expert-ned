import {axiosInstance} from "../utils/api";

export const addClient = async () => {
  try {
    const response = await axiosInstance.post('/crm/')
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}