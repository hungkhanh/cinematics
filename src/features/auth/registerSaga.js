import { call, put, takeLatest } from 'redux-saga/effects'
import { registerFailed, registerStart, registerSuccess } from './registerSlice'
import userManagementApi from '../../api/userManagementApi'
import { setToken } from './authSlice'
import { toast } from "react-toastify";

function* registerUser(action) {
    try {
        // yield put(registerStart())
        const response = yield call(userManagementApi.signUp, action.payload)
        if (response) {
            toast("Register account successfully!", { autoClose: 800 });
            yield put(registerSuccess(response?.content))
        }

        // yield put(setToken(response.token))
        // localStorage.setItem('token', response.token)

    } catch (error) {
        const errorMessage = error?.response?.data?.content
        toast(errorMessage, { autoClose: 1000 });

        // yield put(registerFailed(errorMessage))
    }
}

export default function* registerSaga() {
    yield takeLatest(registerStart.type, registerUser)
} 