import {createSlice} from '@reduxjs/toolkit'

const initialState = false;

export const darkThemeSlice = createSlice({
    name: 'darkThemeSlice',
    initialState,
    reducers: {
        setDarkTheme: (state, action) => {
            return action.payload;
        }
    }
})

export const { setDarkTheme } = darkThemeSlice.actions
export default darkThemeSlice.reducer