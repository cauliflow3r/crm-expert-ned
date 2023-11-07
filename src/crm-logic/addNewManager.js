import {axiosInstance} from "../utils/api";

export const addNewManager = async (createUser) => {
    try {
        const response = await axiosInstance.post('user/create_user/', createUser)
        if (response.status === 201) {
            alert('Менеджер добавлен!')
        }
    } catch (e) {
        alert('Произошла ошибка!')
    } finally {

    }
}