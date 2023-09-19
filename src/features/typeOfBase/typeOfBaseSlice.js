import {createSlice} from '@reduxjs/toolkit'

const initialState = 'Продажа'

export const typeOfBaseSlice = createSlice({
  name: 'typeOfBase',
  initialState,
  reducers: {
    setTypeOfBase: (state, action) => {
      return action.payload;
    }
  }
})

export const { setTypeOfBase } = typeOfBaseSlice.actions
export default typeOfBaseSlice.reducer