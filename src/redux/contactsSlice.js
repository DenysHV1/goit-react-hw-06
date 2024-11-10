import { createSlice } from "@reduxjs/toolkit";
import data from "../components/data/data.json"

const initialState = {
       items: data
}


export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);      
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload)
    }
  }
});

export const selectContacts = state => state.contacts.items;
export const contactReducer = contactSlice.reducer;
export const {addContact, deleteContact} = contactSlice.actions;