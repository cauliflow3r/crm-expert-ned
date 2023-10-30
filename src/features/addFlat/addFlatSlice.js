import {createSlice} from '@reduxjs/toolkit'

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
    realtor: 0,
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
            state.rooms = action.payload
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
    setComments,
    setRealtor} = addFlatSlice.actions

export default addFlatSlice.reducer