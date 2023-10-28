import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";

export const deleteFlat = async (id, dispatch) => {
    await updateAccessToken();
    try {
        const response = await axiosInstance.delete(`main/flats/${id}`)
        if (response.status === 204) {
            alert('Клиент удален!')
        } else {
            alert('Ошибка удаления клиента!')
        }
    } catch (e) {
        console.log(e)
        alert('Сервер не отвечает!')
    }
}