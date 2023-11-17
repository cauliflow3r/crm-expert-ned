import {axiosInstance} from "../utils/api";
import {setIsComments} from "../features/isComments/isCommentsSlice";
import {getOneClient} from "./getOneClient";
import {updateAccessToken} from "../services/token";
import {setButtonLock} from "../features/buttonLock/buttonLockSlice";
import {showError, showSuccess} from "../utils/alert";

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
      showSuccess('Успешно выполнено!', 'Комментарий добавлен!')
      await getOneClient(detailedInfo, dispatch)
    }
  } catch (e) {
    if (e.response.status === 400) {
      showError('Код ошибки: 400', 'Комментарий не может быть пустым!')
    } else {
      showError('Ошибка выполнения', 'Произошла ошибка, обратитесь к администратору!')
    }
  } finally {
    dispatch(setButtonLock(false))
  }
}