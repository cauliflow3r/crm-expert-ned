import {createSlice} from '@reduxjs/toolkit'

const initialState = null;

export const commentDatesSlice  = createSlice({
    name: 'commentDates',
    initialState,
    reducers: {
        setLastCommentDate: (state, action) => {
            return action.payload;
        }
    }
})

export const { setLastCommentDate } = commentDatesSlice.actions
export default commentDatesSlice.reducer