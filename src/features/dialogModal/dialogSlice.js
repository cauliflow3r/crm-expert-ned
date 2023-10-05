import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialog: (state, action) => {
      return action.payload;
    }
  }
})

export const { setDialog } = dialogSlice.actions
export default dialogSlice.reducer