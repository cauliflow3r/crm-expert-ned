import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const isLoadingDetailedInfoSlice = createSlice({
  name: 'isLoadingDetailedInfo',
  initialState,
  reducers: {
    setIsLoadingDetailedInfo: (state, action) => {
      return action.payload;
    }
  }
})

export const { setIsLoadingDetailedInfo } = isLoadingDetailedInfoSlice.actions
export default isLoadingDetailedInfoSlice.reducer