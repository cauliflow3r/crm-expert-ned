import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setActive, setTitle, setType, setValue} from "../features/alertMUI/alertMUISlice";
import {setBaseModal} from "../features/baseModal/baseModalSlice";

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
            dispatch(setType('success'))
            dispatch(setTitle('Успешно выполнено!'))
            dispatch(setValue('Объявление размещено!'))
            dispatch(setActive(true))
        }
    } catch (e) {
        if (e.response.status === 400) {
            dispatch(setType('error'))
            dispatch(setTitle('Ошибка добавления клиента!'))
            dispatch(setValue('Заполните все поля!'))
            dispatch(setActive(true))
        } else {
            dispatch(setType('error'))
            dispatch(setTitle('Ошибка!'))
            dispatch(setValue('Сервер недоступен'))
            dispatch(setActive(true))
        }

    }
}