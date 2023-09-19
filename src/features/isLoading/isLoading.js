import {createSlice} from '@reduxjs/toolkit'

const initialState = true;

export const isLoadingSlice = createSlice({
  name: 'isLoadingSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload;
    }
  }
})

export const { setIsLoading } = isLoadingSlice.actions
export default isLoadingSlice.reducer