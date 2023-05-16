import { toast } from "react-toastify";
import { call, put, takeLatest } from 'redux-saga/effects';
import userManagementApi from '../../api/userManagementApi';
import { registerStart, registerSuccess, registerFailed, registerLoading } from './registerSlice';

function* registerUser(action) {
    try {
        yield put(registerLoading())
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
        yield put(registerFailed(errorMessage))
    }
}

export default function* registerSaga() {
    yield takeLatest(registerStart.type, registerUser)
} 