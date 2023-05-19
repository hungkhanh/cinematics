import { all } from "redux-saga/effects";
import registerSaga from "../features/auth/registerSaga";
import loginSaga from "../features/auth/loginSaga";
import bannerSaga from "../features/movie/bannerSaga";
import movieSaga from "../features/movie/movieSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(), loginSaga(), bannerSaga(), movieSaga()
    ]);
}
