import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {setEdit} from "../features/selectModalType/isSelectModalTypeSlice";
import {getBase} from "./getBase";
import {getOneClient} from "./getOneClient";

export const editClient = async (clientInfo, dispatch, searchParameters) => {
  const id = clientInfo.id
  await updateAccessToken()
  try {
    const response = await axiosInstance.put(`/crm/${id}/`, clientInfo)
    if (response.status === 200) {
      dispatch(setBaseModal(false))
      dispatch(setEdit(false))
    }
    await getOneClient(id, dispatch)
    await getBase(dispatch, searchParameters)
  } catch (e) {

  }
}

