import {createSlice} from '@reduxjs/toolkit'

const initialState = true;

export const isLoadingSiteAdminSlice = createSlice({
    name: 'isLoadingSiteAdmin',
    initialState,
    reducers: {
        setIsLoadingSiteAdmin: (state, action) => {
            return action.payload;
        }
    }
})

export const { setIsLoadingSiteAdmin } = isLoadingSiteAdminSlice.actions
export default isLoadingSiteAdminSlice.reducer