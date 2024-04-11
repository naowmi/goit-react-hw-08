import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
const pending = (state) => {
    state.error = false;
    state.loading = true;
 }
const rejected = (state) => {
    state.loading = false;
    state.error = true;
 }
const contactSlice = createSlice({
name: "contacts",
  initialState: {
      items: [],
      loading: false,
      error: null
    },
    extraReducers: builder => builder
        //* Fetch contact
        .addCase(fetchContacts.pending, pending)
        .addCase(fetchContacts.fulfilled, (state, action) => { 
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, rejected)
        //* Add contact
        .addCase(addContact.pending, pending)
        .addCase(addContact.fulfilled, (state, action) => { 
            state.loading = false
            state.items.push(action.payload)
        })
        .addCase(addContact.rejected, rejected)
        //* Delete contact
        .addCase(deleteContact.pending, pending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(item => item.id !== action.payload.id)
         })
        .addCase(deleteContact.rejected, rejected)
})


export const contactsReducer = contactSlice.reducer

