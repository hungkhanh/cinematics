import { all } from "redux-saga/effects";
import { watchAuth } from "../features/auth/authSaga";
import searchSaga from "../features/search/searchSaga";

export default function* rootSaga() {
    yield all([
        watchAuth(), searchSaga()
    ]);
}
