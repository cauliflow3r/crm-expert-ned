import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const ticketLoadingSlice = createSlice({
  name: 'ticketLoading',
  initialState,
  reducers: {
    setActive: (state, action) => {
      return action.payload;
    }}
})

export const { setActive } = ticketLoadingSlice.actions
export default ticketLoadingSlice.reducer