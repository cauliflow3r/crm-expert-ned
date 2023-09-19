import {createSlice} from '@reduxjs/toolkit'

const initialState = {}

export const getOneClientSlice = createSlice({
  name: 'getOneClient',
  initialState,
  reducers: {
    setGetOneClient: (state, action) => {
      state.getOneClient = action.payload;
    }
  }
})

export const { setGetOneClient } = getOneClientSlice.actions
export default getOneClientSlice.reducer