import { all } from "redux-saga/effects";
import registerSaga from "../features/auth/registerSaga";
import loginSaga from "../features/auth/loginSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(), loginSaga()
    ]);
}
