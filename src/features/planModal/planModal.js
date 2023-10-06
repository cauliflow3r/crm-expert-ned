import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const planModalSlice = createSlice({
  name: 'PlanModal',
  initialState,
  reducers: {
    setPlanModal: (state, action) => {
      return action.payload;
    }
  }
})

export const { setPlanModal } = planModalSlice.actions
export default planModalSlice.reducer