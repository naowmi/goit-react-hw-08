import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://661108bc0640280f219df705.mockapi.io"

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
   try {
    const response = await axios.get('/contacts');
    return response.data
   } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
   }
    
});

export const addContact = createAsyncThunk('contacts/addContact', async (id, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', id);
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)  
    }
    
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message); 
    }
    

})