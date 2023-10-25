import {createSlice} from '@reduxjs/toolkit'

const initialState = 0;

export const applicationsCounterSlice = createSlice({
    name: 'applicationsCounter',
    initialState,
    reducers: {
        setApplicationsCounter: (state, action) => {
            return action.payload;
        }
    }
})

export const { setApplicationsCounter } = applicationsCounterSlice.actions
export default applicationsCounterSlice.reducer