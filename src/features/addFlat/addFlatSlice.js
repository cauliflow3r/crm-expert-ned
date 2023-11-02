import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const uploadImagesAsync = createAsyncThunk('addFlat/uploadImages', async (files) => {
    const fileArray = Array.from(files);
    return fileArray;
});

const initialState = {
    title: '',
    condition: '',
    series: '',
    floor: '',
    number_of_floors: '',
    rooms: '',
    price: '',
    document: '',
    total_area: '',
    district: '',
    description: '',
    comments: 'Нет комментария',
    realtor: '',
    images: []
}

export const addFlatSlice = createSlice({
    name: 'addFlat',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setCondition: (state, action) => {
            state.condition = action.payload
        },
        setSeries: (state, action) => {
            state.series = action.payload
        },
        setFloor: (state, action) => {
            state.floor = action.payload
        },
        setNumberOfFloors: (state, action) => {
            state.number_of_floors = action.payload
        },
        setRooms: (state, action) => {
            state.rooms = Number(action.payload)
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setDocument: (state, action) => {
            state.document = action.payload
        },
        setTotalArea: (state, action) => {
            state.total_area = action.payload
        },
        setDistrict: (state, action) => {
            state.district = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setComments: (state, action) => {
            state.comments = action.payload
        },
        setRealtor: (state, action) => {
            state.realtor = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImagesAsync.fulfilled, (state, action) => {
            state.images = action.payload;
        })
    }
})

export const {
    setTitle,
    setCondition,
    setSeries,
    setFloor,
    setNumberOfFloors,
    setRooms,
    setPrice,
    setDocument,
    setTotalArea,
    setDistrict,
    setDescription,
    setRealtor,
    setImages
} = addFlatSlice.actions

export default addFlatSlice.reducer