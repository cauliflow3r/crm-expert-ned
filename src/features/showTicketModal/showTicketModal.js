import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const showTicketModalSlice = createSlice({
  name: 'showTicketModal',
  initialState,
  reducers: {
    showTicket: (state, action) => {
      return action.payload;
    }}
})

export const { showTicket } = showTicketModalSlice.actions
export default showTicketModalSlice.reducer