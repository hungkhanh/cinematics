import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    data: null,
    error: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        fetchMovies(state, payload) {
            state.loading = true
        },
        setData(state, action) {
            state.loading = false
            state.data = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    }
})


export const { fetchMovies, setData, setError } = searchSlice.actions

const searchReducer = searchSlice.reducer
export default searchReducer