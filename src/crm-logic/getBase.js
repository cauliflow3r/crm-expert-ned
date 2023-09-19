import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setData} from "../features/data/dataSlice";
import {setIsLoading} from "../features/isLoading/isLoading";

export const getBase = async (dispatch) => {
  await updateAccessToken();
  try {
    const response = await axiosInstance.get('crm/?limit=5000');
    const data = response.data;
    dispatch(setData(data.results))
  } catch (error) {
    console.log(error, 'error');
  } finally {
    dispatch(setIsLoading(false))
  }
};