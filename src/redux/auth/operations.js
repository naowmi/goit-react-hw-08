import axios  from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.herokuapp.com"
const setAuth = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
const clearAuth = () => {
    axios.defaults.headers.common["Authorization"] = "";
}

export const register = createAsyncThunk('auth/register', async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userInfo);
        setAuth(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk('auth/login', async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userInfo);
        setAuth(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuth();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
     const reduxState = thunkAPI.getState();
        const savedToken = reduxState.auth.token;
         setAuth(savedToken);
        const response = await axios.get('/users/current');
        return response.data;
  } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
  }
}, {
        condition: (_, { getState }) => {
            const reduxState = getState();
            const savedToken = reduxState.auth.token;
            return savedToken !== null;
        }
    })