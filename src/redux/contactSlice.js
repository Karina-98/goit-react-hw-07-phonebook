import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsBook = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsBook,
  },
extraReducers:(builder)=>
builder.addCase()
});

export const { removeContact, addContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
