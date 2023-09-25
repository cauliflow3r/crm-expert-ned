import {axiosInstance} from "../utils/api";
import {setIsComments} from "../features/isComments/isCommentsSlice";
import {getOneClient} from "./getOneClient";
import {updateAccessToken} from "../services/token";
import {setButtonLock} from "../features/buttonLock/buttonLockSlice";

export const addComment = async (dispatch, comment, detailedInfo) => {
  dispatch(setButtonLock(true))
  await updateAccessToken()
  try {
    const response = await axiosInstance.post('crm/comments/', comment)
    if (response.status === 201) {
      dispatch(setIsComments({
        body: '',
        crm: ''
      }))
      await getOneClient(detailedInfo, dispatch)
    }
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(setButtonLock(false))
  }
}