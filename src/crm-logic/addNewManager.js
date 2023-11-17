import {axiosInstance} from "../utils/api";
import {showError, showSuccess} from "../utils/alert";

export const addNewManager = async (createUser) => {
    try {
        const response = await axiosInstance.post('user/create_user/', createUser)
        if (response.status === 201) {
            showSuccess('Успешно выполнено!', 'Менеджер добавлен!')
        }
    } catch (e) {
        showError('Ошибка добавления!', 'Обратитесь к администратору!')
    } finally {

    }
}