import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setData} from "../features/data/dataSlice";
import {setIsLoading} from "../features/isLoading/isLoading";

export const getBase = async (dispatch, searchParameters) => {
  dispatch(setIsLoading(true))
  await updateAccessToken();
  try {
    const response = await axiosInstance.get('crm/?limit=5000');
    const data = response.data.results;

    let filteredData = data

    if (searchParameters.byRooms !== '')   {
      filteredData = filteredData.filter(item => {
        return item.rooms == searchParameters.byRooms;
      })
    }

    if (searchParameters.byTypeOfHousing !== '') {
      filteredData = filteredData.filter(item => {
        return item.type_of_housing === searchParameters.byTypeOfHousing;
      })
    }

    if (searchParameters.bySearchField) {
      filteredData = filteredData.filter(item => {
        const keysToSearch = ['name', 'phone', 'adress', 'comments', 'price'];
        for (const key of keysToSearch) {
          if (item[key] && item[key].toString().toLowerCase().includes(searchParameters.bySearchField.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }

    dispatch(setData(filteredData))
  } catch (error) {
    console.log(error, 'error');
  } finally {
    dispatch(setIsLoading(false))
  }
};