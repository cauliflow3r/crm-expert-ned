import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  byRooms: '',
  byTypeOfHousing: '',
  bySearchField: '',
  sortByPrice: 'ascending',
  minPrice: 0,
  maxPrice: 0
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
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload
    }
  }
})

export const { setByRooms, setByTypeOfHousing, setBySearchField, setSortByPrice, setMinPrice, setMaxPrice } = searchParametersSlice.actions
export default searchParametersSlice.reducer