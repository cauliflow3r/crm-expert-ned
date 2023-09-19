import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";

export const getOneClient = async (id, dispatch) => {
  await updateAccessToken();
  try {
    const response = await axiosInstance.get(`crm/${id}/`);
    const data = response.data;
    dispatch(setGetOneClient(data))
  } catch (e) {
    console.log(e)
  }
}