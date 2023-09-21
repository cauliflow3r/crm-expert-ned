import {axiosInstance} from "../utils/api";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {updateAccessToken} from "../services/token";
import {getBase} from "./getBase";

export const addClient = async (modalData, dispatch) => {
  await updateAccessToken()
  try {
    const response = await axiosInstance.post('/crm/', modalData)
    if (response.status === 201) {
      dispatch(setBaseModal(false))
      await getBase()
    }
  } catch (e) {
    console.log(e)
  }
}