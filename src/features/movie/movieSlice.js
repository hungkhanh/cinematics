import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movieLoading: false,
    movieList: [],
    filter: {
        currentPage: 1,
        count: 10,
    },
    pagination: {
        currentPage: 1,
        count: 10,
        totalCount: 15
    }
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        fetchMovieList(state, action) {
            state.movieLoading = true
        }, fetchMovieListSuccess(state, action) {
            state.movieLoading = false;
            state.movieList = action.payload
            state.pagination = action.payload
        }, fetchMovieListFailed(state, action) {
            state.movieLoading = false
        }, setMovieFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export const { fetchMovieList, fetchMovieListFailed, fetchMovieListSuccess, setMovieFilter } = movieSlice.actions

const movieReudcer = movieSlice.reducer
export default movieReudcer
