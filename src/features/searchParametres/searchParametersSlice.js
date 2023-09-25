import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  byRooms: '',
  byTypeOfHousing: '',
  bySearchField: '',
  sortByPrice: 'ascending'
}

export const searchParametersSlice = createSlice({
  name: 'searchParameters',
  initialState,
  reducers: {

    setByRooms: (state,action) => {
      state.byRooms = action.payload
    },

    setByTypeOfHousing: (state, action) => {
      state.byTypeOfHousing = action.payload
    },

    setBySearchField: (state, action) => {
      state.bySearchField = action.payload
    },

    setSortByPrice: (state, action) => {
      state.sortByPrice = action.payload
    }
  }
})

export const { setByRooms, setByTypeOfHousing, setBySearchField, setSortByPrice } = searchParametersSlice.actions
export default searchParametersSlice.reducer