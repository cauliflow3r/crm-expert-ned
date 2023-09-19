import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  body: '',
  crm: ''
}

export const isCommentsSlice = createSlice({
  name: 'isComments',
  initialState,
  reducers: {
    setIsComments: (state, action) => {
      return action.payload;
    }
  }
})

export const { setIsComments } = isCommentsSlice.actions
export default isCommentsSlice.reducer