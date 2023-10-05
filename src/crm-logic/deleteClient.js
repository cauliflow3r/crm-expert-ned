import {updateAccessToken} from "../services/token";
import { axiosInstance } from "../utils/api";
import {setActive, setTitle, setType, setValue} from "../features/alertMUI/alertMUISlice";

export const deleteClient = async (id, dispatch) => {
  await updateAccessToken();
  try {
    const response = await axiosInstance.delete(`crm/${id}/`);
    console.log(response)
    dispatch(setType('success'))
    dispatch(setTitle('Успешно выполнено!'))
    dispatch(setValue('Клиент успешно удалён!'))
    dispatch(setActive(true))
  } catch (e) {
    console.log(e)
    dispatch(setType('error'))
    dispatch(setTitle('Произошла ошибка!'))
    dispatch(setValue('Ошибка удаления клиента!'))
    dispatch(setActive(true))
  }
}