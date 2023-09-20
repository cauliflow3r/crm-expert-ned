import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const baseModalSlice = createSlice({
  name: 'BaseModal',
  initialState,
  reducers: {
    setBaseModal: (state, action) => {
      return action.payload;
    }
  }
})

export const { setBaseModal } = baseModalSlice.actions
export default baseModalSlice.reducer