import { call, put, takeLatest } from "redux-saga/effects";
import { fetchBanner, fetchBannerFailed, fetchBannerSuccess } from "./bannerSlice";
import movieManagementApi from '../../api/movieManagementApi';


function* getBanner() {
    try {
        const response = yield call(movieManagementApi.getMovieBanner)
        yield put(fetchBannerSuccess(response?.content))
    } catch (error) {
        console.log(error);
        yield put(fetchBannerFailed())
    }
}

export default function* bannerSaga() {
    yield takeLatest(fetchBanner.type, getBanner)
}