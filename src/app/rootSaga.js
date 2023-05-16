import { all } from "redux-saga/effects";
import registerSaga from "../features/auth/registerSaga";

export default function* rootSaga() {
    yield all([
        registerSaga()
    ]);
}
