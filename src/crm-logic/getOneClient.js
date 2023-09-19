import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {setIsLoadingDetailedInfo} from "../features/isLoadingDetailedInfo/isLoadingDetailedInfoSlice";

export const getOneClient = async (id, dispatch) => {
  await updateAccessToken();
  dispatch(setIsLoadingDetailedInfo(true))
  try {
    const response = await axiosInstance.get(`crm/${id}/`);
    const data = response.data;
    dispatch(setGetOneClient(data))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(setIsLoadingDetailedInfo(false))
  }
}