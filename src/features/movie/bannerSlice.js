import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bannerLoading: false,
    bannerList: []
}

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        fetchBanner(state, action) {
            state.bannerLoading = true
        },
        fetchBannerSuccess(state, action) {
            state.bannerLoading = false,
                state.bannerList = action.payload
        },
        fetchBannerFailed(state, action) {
            state.bannerLoading = false
        }
    }
})

export const { fetchBanner, fetchBannerSuccess, fetchBannerFailed } = bannerSlice.actions

const bannerReducer = bannerSlice.reducer;
export default bannerReducer