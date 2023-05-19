import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovieList, fetchMovieListSuccess } from "./movieSlice";
import movieManagementApi from "../../api/movieManagementApi";
import { fetchBannerFailed } from "./bannerSlice";

function* getMovieList(action) {
    try {
        const response = yield call(movieManagementApi.getMovieList, action.payload)
        // console.log(response.content);
        yield put(fetchMovieListSuccess(response?.content))
    } catch (error) {
        console.log(error);
        yield put(fetchBannerFailed())

    }
}

export default function* movieSaga() {
    yield takeLatest(fetchMovieList.type, getMovieList)
}