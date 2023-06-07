import { all } from "redux-saga/effects";
import { watchAuth } from "../features/auth/authSaga";
import bannerSaga from "../features/movie/bannerSaga";
import movieSaga from "../features/movie/movieSaga";

export default function* rootSaga() {
    yield all([
        watchAuth(), bannerSaga(), movieSaga()
    ]);
}
