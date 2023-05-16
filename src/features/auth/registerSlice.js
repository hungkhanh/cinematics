import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    regLoading: false,
    regResponseData: undefined,
    regErrorMessage: ''
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerStart(state, action) {
        },
        registerLoading(state, action) {
            state.regLoading = true
        },
        registerSuccess(state, action) {
            state.isAuth = true;
            state.regLoading = false;
            state.regResponseData = action.payload
        },
        registerFailed(state, action) {
            state.regLoading = false;
            state.isAuth = false;
            state.regErrorMessage = action.payload
        }
    }
})

//actions
export const { registerStart, registerLoading, registerSuccess, registerFailed } = registerSlice.actions

//reducer
const registerReducer = registerSlice.reducer;
export default registerReducer
