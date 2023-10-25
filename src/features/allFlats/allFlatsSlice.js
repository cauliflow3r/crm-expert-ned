import {createSlice} from '@reduxjs/toolkit'

const initialState = {}

export const allFlatsSlice = createSlice({
    name: 'allFlats',
    initialState,
    reducers: {
        setAllFlats: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setAllFlats } = allFlatsSlice.actions
export default allFlatsSlice.reducer