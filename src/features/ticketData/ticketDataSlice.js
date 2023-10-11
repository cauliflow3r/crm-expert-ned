import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  created: '',
  description: '',
  status: 'New'
}

export const ticketDataSlice = createSlice({
  name: 'ticketData',
  initialState,
  reducers: {
    setChangeTitleTicket: (state, action) => {
      state.title = action.payload;
    },
    setCreatedTicket: (state, action) => {
      state.created = action.payload;
    },
    setDescriptionTicket: (state, action) => {
      state.description = action.payload
    },
    setStatusTicket: (state, action) => {
      state.status = action.payload;
    }
  }
})

export const { setChangeTitleTicket, setCreatedTicket, setDescriptionTicket, setStatusTicket} = ticketDataSlice.actions
export default ticketDataSlice.reducer