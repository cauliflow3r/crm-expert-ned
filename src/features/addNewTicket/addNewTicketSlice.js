import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  address: '',
  price: '',
  link: '',
  description: '',
  comment: '',
  archived: true,
  status: 'New',
  color: 'red',
  user: 0,
  client_id: 0

}

export const addNewTicketSlice = createSlice({
  name: 'addNewTicket',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setClient_id: (state, action) => {
      state.client_id = action.payload
    }
  }
})

export const { setActive, setTitle, setDescription, setUser, setClient_id } = addNewTicketSlice.actions
export default addNewTicketSlice.reducer