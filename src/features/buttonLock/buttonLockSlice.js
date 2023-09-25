import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const buttonLockSlice = createSlice({
  name: 'buttonLock',
  initialState,
  reducers: {
    setButtonLock: (state, action) => {
      return action.payload;
    }
  }
})

export const { setButtonLock } = buttonLockSlice.actions
export default buttonLockSlice.reducer