import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  byRooms: '',
  byTypeOfHousing: '',
  bySearchField: ''
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
    }
  }
})

export const { setByRooms, setByTypeOfHousing, setBySearchField } = searchParametersSlice.actions
export default searchParametersSlice.reducer