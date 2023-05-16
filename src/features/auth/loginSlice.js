import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginLoading: false,
    loginResponseData: undefined,
    loginErrorMessage: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStart(state, action) { },
        loginLoading(state, action) {
            state.loginLoading = true;
        },
        loginSuccess(state, action) {
            state.loginLoading = false;
            state.loginResponseData = action.payload
        },
        loginFailed(state, action) {
            state.loginLoading = false;
            state.loginErrorMessage = action.payload
        }
    }
})

//actions
export const { loginStart, loginLoading, loginSuccess, loginFailed } = loginSlice.actions

//reducer
const loginReducer = loginSlice.reducer;
export default loginReducer
