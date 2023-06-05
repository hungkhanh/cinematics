import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    user: null,
    errorMsg: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        stopLoading(state) {
            state.loading = false;
        },
        setError(state, action) {
            state.loading = false;
            state.errorMsg = action.payload
        },
        register(state, action) {
            state.loading = true;
        },
        login(state, action) {
            state.loading = true;
        },
        setUser(state, action) {
            state.loading = false;
            state.user = action.payload
        },
        logout(state) {
            state.user = null
            state.loading = true;
        },

    }
})

//actions
export const { stopLoading, setError, register, login, logout, setUser } = authSlice.actions

//reducer
const authReducer = authSlice.reducer
export default authReducer