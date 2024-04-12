import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
const pending = (state) => {
    state.error = false,
    state.isLoggedIn = false,
    state.loading = true
}
const rejected = (state) => {
    state.loading = false,
    state.error = true
}
const authSlice = createSlice({
    name: "auth",
    initialState: {
   user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
    },
    extraReducers: builder => builder
        //* REGISTER USER
        .addCase(register.pending, pending)
        .addCase(register.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, rejected)
         //* LOG IN USER
        .addCase(logIn.pending, pending)
        .addCase(logIn.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, rejected)
         //* LOG OUT USER
        .addCase(logOut.pending, pending)
        .addCase(logOut.fulfilled, (state) => {
            state.error = false;
            state.loading = false;
            state.user = {
                name: null,
                email: null,
            }
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, rejected)
         //* REFRESH USER
        .addCase(refreshUser.pending, (state) => {
            state.error = false;
            state.loading = true;
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, rejected)
});

export const authReducer = authSlice.reducer