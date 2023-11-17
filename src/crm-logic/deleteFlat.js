import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setGetOneClient} from "../features/getOneClient/getOneClientSlice";
import {showError, showSuccess} from "../utils/alert";

export const deleteFlat = async (id, dispatch) => {
    await updateAccessToken();
    try {
        const response = await axiosInstance.delete(`main/flats/${id}/`)
        if (response.status === 204) {
            showSuccess('Успешно выполнено!', 'Объявление удалено!')
            dispatch(setGetOneClient(null))
        }
    } catch (e) {
        showError('Ошибка добавления!', 'Обратитесь к администратору!')
    }
}