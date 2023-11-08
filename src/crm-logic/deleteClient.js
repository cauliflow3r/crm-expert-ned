import {updateAccessToken} from "../services/token";
import { axiosInstance } from "../utils/api";
import {setActive, setTitle, setType, setValue} from "../features/alertMUI/alertMUISlice";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";

export const deleteClient = async (id, dispatch) => {
  await updateAccessToken();
  try {
    const response = await axiosInstance.delete(`crm/${id}/`);
    if (response.status === 204) {
      dispatch(setType('success'))
      dispatch(setTitle('Успешно выполнено!'))
      dispatch(setValue('Клиент успешно удалён!'))
      dispatch(setActive(true))
      dispatch(setGetOneClient(null))
    }
  } catch (e) {
    dispatch(setType('error'))
    dispatch(setTitle('Произошла ошибка!'))
    dispatch(setValue('Ошибка удаления клиента!'))
    dispatch(setActive(true))
  }
}