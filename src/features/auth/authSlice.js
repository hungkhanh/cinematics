import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null
    }, reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

//actions
export const { setToken } = authSlice.actions

const authReducer = authSlice.reducer

export default authReducer