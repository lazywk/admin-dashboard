import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    signedIn: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload
            state.signedIn = true
        },
        logoutSuccess: (state, action) => {
            state.token = ''
            state.signedIn = false
        }
    }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions

export default authSlice.reducer