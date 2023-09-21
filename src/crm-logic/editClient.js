import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {getOneClient} from "./getOneClient";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {setEdit} from "../features/selectModalType/isSelectModalTypeSlice";

export const editClient = async (clientInfo, dispatch) => {
  const id = clientInfo.id
  await updateAccessToken()
  try {
    const response = await axiosInstance.put(`/crm/${id}/`, clientInfo)
    if (response.status === 200) {
      dispatch(setBaseModal(false))
      dispatch(setEdit(false))
      await getOneClient()
    }
  } catch (e) {

  }
}

