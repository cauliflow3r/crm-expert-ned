import {createSlice} from '@reduxjs/toolkit'

const initialState = true;

export const isLoadingSiteAdminDetailedInfoSlice = createSlice({
    name: 'isLoadingSiteAdminDetailedInfo',
    initialState,
    reducers: {
        setIsLoadingSiteAdminDetailedInfo: (state, action) => {
            return action.payload;
        }
    }
})

export const { setIsLoadingSiteAdminDetailedInfo } = isLoadingSiteAdminDetailedInfoSlice.actions
export default isLoadingSiteAdminDetailedInfoSlice.reducer