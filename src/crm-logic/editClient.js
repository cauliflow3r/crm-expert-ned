import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {getBase} from "./getBase";

export const editClient = async () => {
  await updateAccessToken()
  try {
    const response = await axiosInstance.put(`/crm/${id}`)
    if (response.status === 201) {
      await getBase()
    }
  } catch (e) {
    console.log(e)
  }
}