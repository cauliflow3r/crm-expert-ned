import {axiosInstance} from "../utils/api";
import {setGetOneFlat} from "../features/getOneFlat/getOneFlatSlice";

export const getOneFlat = async (id, dispatch) => {
    try {
        const response = await axiosInstance.get(`/main/flats/${id}`)
        const data = response.data;
        dispatch(setGetOneFlat(data))
    } catch (e) {
        console.log(e)
    } finally {

    }
}