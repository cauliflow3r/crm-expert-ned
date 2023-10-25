import {createSlice} from '@reduxjs/toolkit'

const initialState = {}

export const getOneFlatSlice = createSlice({
    name: 'getOneFlat',
    initialState,
    reducers: {
        setGetOneFlat: (state, action) => {
            state.getOneFlat = action.payload;
        }
    }
})

export const { setGetOneFlat } = getOneFlatSlice.actions
export default getOneFlatSlice.reducer