import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  active: false,
  type: 'success',
  title: '',
  value: ''
}

export const alertMUISlice = createSlice({
  name: 'alertMUI',
  initialState,
  reducers: {
      setActive: (state, action) => {
        state.active = action.payload;
      },
      setType: (state, action) => {
        state.type = action.payload;
    },
    setTitle: (state, action) => {
        state.title = action.payload
    },
      setValue: (state, action) => {
        state.value = action.payload;
    }
  }
})

export const { setActive, setType, setTitle, setValue} = alertMUISlice.actions
export default alertMUISlice.reducer