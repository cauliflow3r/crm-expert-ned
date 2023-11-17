import {updateAccessToken} from "../services/token";
import { axiosInstance } from "../utils/api";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {showError, showSuccess} from "../utils/alert";

export const deleteClient = async (id, dispatch) => {
  await updateAccessToken();
  try {
    const response = await axiosInstance.delete(`crm/${id}/`);
    if (response.status === 204) {
      showSuccess('Успешно выполнено!', 'Клиент удален!')
      dispatch(setGetOneClient(null))
    }
  } catch (e) {
    showError('Ошибка выполнения', 'Ошибка удаления клиента!')
  }
}