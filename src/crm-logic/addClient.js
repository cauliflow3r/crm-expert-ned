import {axiosInstance} from "../utils/api";
import {setBaseModal} from "../features/baseModal/baseModalSlice";
import {updateAccessToken} from "../services/token";
import {setButtonLock} from "../features/buttonLock/buttonLockSlice";
import {
  setEdit,
  setIsSelect,
  setPotential,
  setPurchase,
  setSale
} from "../features/selectModalType/isSelectModalTypeSlice";
import {setActive, setTitle, setType, setValue} from "../features/alertMUI/alertMUISlice";

export const addClient = async (modalData, dispatch) => {
  dispatch(setButtonLock(true))
  await updateAccessToken()
  try {
    const response = await axiosInstance.post('/crm/', modalData)
    if (response.status === 201) {
      dispatch(setBaseModal(false))
      dispatch(setIsSelect(false))
      dispatch(setSale(false))
      dispatch(setPurchase(false))
      dispatch(setPotential(false))
      dispatch(setEdit(false))
      dispatch(setType('success'))
      dispatch(setTitle('Успешно выполнено!'))
      dispatch(setValue('Клиент успешно добавлен!'))
      dispatch(setActive(true))
    }
  } catch (e) {
    if (e.response.status === 400) {
      dispatch(setType('error'))
      dispatch(setTitle('Ошибка добавления клиента!'))
      dispatch(setValue('Заполните все поля!'))
      dispatch(setActive(true))
    }
  } finally {
    dispatch(setButtonLock(false))
  }
}