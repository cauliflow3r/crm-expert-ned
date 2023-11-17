import {axiosInstance} from "../utils/api";
import {setAllFlats} from "../features/allFlats/allFlatsSlice";
import {setIsLoadingSiteAdmin} from "../features/isLoadingSiteAdmin/isLoadingSiteAdminSlice";

export const getFlats = async (dispatch, page) => {
    dispatch(setIsLoadingSiteAdmin(true))
    try {
        const response = await axiosInstance.get(`main/flats/?page=${page}`)
        const data = response.data.results;
        dispatch(setAllFlats(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setIsLoadingSiteAdmin(false))
    }
}