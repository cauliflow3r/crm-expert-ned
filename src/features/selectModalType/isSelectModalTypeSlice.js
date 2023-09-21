import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isSelect: false,
  sale: false,
  purchase: false,
  potential: false,
  edit: false
}

export const isSelectModalTypeSlice = createSlice({
  name: 'isSelectModalType',
  initialState,
  reducers: {

    setIsSelect: (state,action) => {
      state.isSelect = action.payload
    },

    setSale: (state, action) => {
      state.sale = action.payload
    },

    setPurchase: (state, action) => {
      state.purchase = action.payload
    },

    setPotential: (state, action) => {
      state.potential = action.payload
    },

    setEdit: (state, action) => {
      state.edit = action.payload
    }
  }
})

export const { setIsSelect, setSale, setPurchase, setPotential, setEdit } = isSelectModalTypeSlice.actions
export default isSelectModalTypeSlice.reducer