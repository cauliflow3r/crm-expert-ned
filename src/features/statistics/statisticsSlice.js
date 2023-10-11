import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatisticsActive: (state, action) => {
      return action.payload;
    }}
})

export const { setStatisticsActive } = statisticsSlice.actions
export default statisticsSlice.reducer