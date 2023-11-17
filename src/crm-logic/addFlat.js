import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {showError, showSuccess} from "../utils/alert";

export const addFlat = async (addData, dispatch) => {
    await updateAccessToken()
    try {
        const response = await axiosInstance.post('main/flats/', addData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 201) {
            dispatch(setBaseModal(false))
            showSuccess('Успешно выполнено!', 'Объявление размещено!')
        }
    } catch (e) {
        if (e.response.status === 400) {
            showError('Ошибка добавления!', 'Заполните все поля!')
        } else {
            showError('Ошибка!', 'Сервер недоступен')
        }

    }
}