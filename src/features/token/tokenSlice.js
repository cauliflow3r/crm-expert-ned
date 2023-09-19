import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  accessToken: '',
  refreshToken: '',
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state,action) => {
      state.accessToken = action.payload
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload
    }
  }
})

export const { setAccessToken, setRefreshToken } = tokenSlice.actions
export default tokenSlice.reducer