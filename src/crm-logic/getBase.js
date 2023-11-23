import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";
import {setData} from "../features/data/dataSlice";
import {setIsLoading} from "../features/isLoading/isLoading";
import {setButtonLock} from "../features/buttonLock/buttonLockSlice";
import {setCounter} from "../features/counter/counterSlice";
import {setApplicationsCounter} from "../features/applicationsCounter/applicationsCounterSlice";

export const getBase = async (dispatch, searchParameters) => {
  dispatch(setButtonLock(true))
  dispatch(setIsLoading(true))
  await updateAccessToken();
  try {
    const response = await axiosInstance.get('crm/?limit=5000');
    const data = response.data.results;

    const count = data.filter((item) => {
      return item.type_of_base === 'Заявки'
    })
    dispatch(setCounter(count.length))

    const applicationsCount = data.filter((item) => {
      return item.type_of_base === 'Встречи'
    })
    dispatch(setApplicationsCounter(applicationsCount.length))

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

    if (searchParameters.id) {
      filteredData = filteredData.filter(item => {
        return item.id == searchParameters.id;
      })
    }

    if (searchParameters.sortByPrice === 'ascending') {
      filteredData = filteredData.slice().sort((a, b) => {  return a.price - b.price; })
    } else if (searchParameters.sortByPrice === 'descending') {
      filteredData = filteredData.slice().sort((a, b) => {  return b.price - a.price; })
    } else if (searchParameters.sortByPrice === 'toNew') {
      filteredData = filteredData.slice().sort((a,b) => {
        const dateA = new Date(a.created_ad);
        const dateB = new Date(b.created_ad);
        return  dateA - dateB;
      })
    } else return

    if (searchParameters.maxPrice) {
      filteredData = filteredData.filter(item => {
        const price = item.price;
        return price >= searchParameters.minPrice && price <= searchParameters.maxPrice;
      })
    }

    dispatch(setData(filteredData))
  } catch (error) {
    console.log(error, 'error');
  } finally {
    dispatch(setIsLoading(false))
    dispatch(setButtonLock(false))
  }
};