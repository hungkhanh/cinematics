import { call, put, takeLatest } from "redux-saga/effects"
import { auth } from "../../firebase";
import { setError, setUser, logout, stopLoading } from "./authSlice";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut, getIdToken
} from "firebase/auth";
import { toast } from "react-toastify";

function* loginSaga({ payload }) {
    try {
        const { email, password } = payload;
        const userCredential = yield call(
            signInWithEmailAndPassword,
            auth,
            email,
            password
        );

        const user = userCredential.user;
        if (user.emailVerified) {
            const token = yield call(() => getIdToken(user));
            const userInfo = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                phoneNumber: user.phoneNumber,
                photoUrl: user.photoURL
            };
            yield put(setUser(userInfo));
            localStorage.setItem("token", JSON.stringify(token));
        } else {
            toast("Please verify your email first!", { autoClose: 800 });
        }
    } catch (error) {
        toast(error.message, { autoClose: 800 });
        yield put(setError(error.message))
    }
    yield put(stopLoading())

}

function* registerSaga({ payload }) {
    try {
        const { email, password } = payload;
        yield call(() => createUserWithEmailAndPassword(auth, email, password));
        toast("Register account successfully, pls check your inbox to verify your email!", { autoClose: 1000 });
        sendEmailVerification(auth.currentUser)
        // signOut(auth)
    } catch (error) {
        toast(error.message, { autoClose: 1000 });
        yield put(setError(error.message))
    }
    yield put(stopLoading())
}

function* logoutSaga() {
    try {
        yield call(signOut(auth))
        yield put(logout())
        localStorage.removeItem('token')
    } catch (error) {
        yield put(setError(error.message))

    }
    yield put(stopLoading())
}

export function* watchAuth() {
    yield takeLatest('auth/login', loginSaga)
    yield takeLatest('auth/register', registerSaga)
    yield takeLatest('auth/logout', logoutSaga)
}