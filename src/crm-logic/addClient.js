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
    }
  } catch (e) {
    if (e.response.status === 400) {
      alert('Проверьте все поля на валидацию')
    }
  } finally {
    dispatch(setButtonLock(false))
  }
}