import {createSlice} from '@reduxjs/toolkit'

const initialState = 0;

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      return action.payload;
    }
  }
})

export const { setCounter } = counterSlice.actions
export default counterSlice.reducer