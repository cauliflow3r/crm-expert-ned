import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const editAnnouncementSlice = createSlice({
    name: 'editAnnouncement',
    initialState,
    reducers: {
        setEditAnnouncement: (state, action) => {
            return action.payload;
        }
    }
})

export const { setEditAnnouncement } = editAnnouncementSlice.actions
export default editAnnouncementSlice.reducer