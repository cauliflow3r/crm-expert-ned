import {axiosInstance} from "../utils/api";
import {setIsComments} from "../features/isComments/isCommentsSlice";
import {getOneClient} from "./getOneClient";
import {updateAccessToken} from "../services/token";
import {setButtonLock} from "../features/buttonLock/buttonLockSlice";
import {setActive, setTitle, setType, setValue} from "../features/alertMUI/alertMUISlice";

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
      dispatch(setType('success'))
      dispatch(setTitle('Успешно выполнено!'))
      dispatch(setValue('Комментарий опубликован!'))
      dispatch(setActive(true))
      await getOneClient(detailedInfo, dispatch)
    }
  } catch (e) {
    if (e.response.status === 400) {
      dispatch(setType('error'))
      dispatch(setTitle('Ошибка: 400'))
      dispatch(setValue('Комментарий не должен быть пустым!'))
      dispatch(setActive(true))
    } else {
      dispatch(setType('error'))
      dispatch(setTitle('Ошибка комментирования!'))
      dispatch(setValue('Произошла непредвиденная ошибка!'))
      dispatch(setActive(true))
    }
  } finally {
    dispatch(setButtonLock(false))
  }
}