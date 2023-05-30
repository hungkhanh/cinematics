import { toast } from "react-toastify";
import { call, put, takeLatest } from 'redux-saga/effects';
import userManagementApi from '../../api/userManagementApi';
import { loginStart, loginLoading, loginSuccess, loginFailed } from './loginSlice';

function* loginUser(action) {
    try {
        yield put(loginLoading())
        const response = yield call(userManagementApi.signIn, action.payload)

        if (response) {
            toast("Login successfully!", { autoClose: 500, position: "top-right" });
            yield put(loginSuccess(response?.content))
            // localStorage.setItem('token', response?.content?.accessToken)
        }


    } catch (error) {
        const errorMessage = error?.response?.data?.content
        toast(errorMessage, { autoClose: 1000 });
        yield put(loginFailed(errorMessage))
    }
}

export default function* loginSaga() {
    yield takeLatest(loginStart.type, loginUser)
} 