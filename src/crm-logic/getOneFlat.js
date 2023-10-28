import {axiosInstance} from "../utils/api";
import {setGetOneFlat} from "../features/getOneFlat/getOneFlatSlice";
import {
    setIsLoadingSiteAdminDetailedInfo
} from "../features/isLoadingSiteAdminDetailedInfo/isLoadingSiteAdminDetailedInfoSlice";

export const getOneFlat = async (id, dispatch) => {
    dispatch(setIsLoadingSiteAdminDetailedInfo(true))
    try {
        const response = await axiosInstance.get(`/main/flats/${id}`)
        const data = response.data;
        dispatch(setGetOneFlat(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setIsLoadingSiteAdminDetailedInfo(false))
    }
}