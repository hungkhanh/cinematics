import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies, setData } from "./searchSlice";
import tmdbApi from "../../api/tmdbApi";

function* handleSearch(action) {
    try {
        const response = yield call(tmdbApi.searchMovies, action.payload)
        yield put(setData(response))
    } catch (error) {
        console.log(error.message);
    }
}

export default function* searchSaga() {
    yield takeLatest(fetchMovies.type, handleSearch)
}