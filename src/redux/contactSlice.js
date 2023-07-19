import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { createContacts, deleteContacts, getAllContacts } from 'service/getApi';
// import { handelFulfilledCreate, handelFulfilledDel, handelFulfilledGet, handelPending, handelRejected } from './funktionSliceContacts';



const contactsState = {
  items: [],
  isLoading: false,
  error: null,
};


export const handelPending = state => {
  state.contacts.isLoading = true;
};

export const handelFulfilledGet = (state, actions) => {
  
  state.contacts.items = actions.payload;
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

export const handelFulfilledCreate = (state, actions) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(actions.payload); ;
  state.contacts.error = null;
  Notiflix.Notify.success(
      `${actions.payload.name} has been successfully added to  your phonebook`
    );
};

export const handelFulfilledDel = (state, actions) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(item => item.id !== actions.payload.id);
  state.contacts.error = null;
};

export const handelRejected = (state, actions) => {
  state.contacts.isLoading = false;
  state.contacts.error = actions.error;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts:contactsState},
  extraReducers: builder =>
    builder
      .addCase(createContacts.fulfilled, handelFulfilledCreate)
      .addCase(getAllContacts.fulfilled, handelFulfilledGet)
      .addCase(deleteContacts.fulfilled, handelFulfilledDel)
      .addMatcher(
        isAnyOf(
          getAllContacts.pending,
          createContacts.pending,
          deleteContacts.pending
        ),
        handelPending
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.rejected,
          createContacts.rejected,
          deleteContacts.rejected
        ),
        handelRejected
      ) 
});

export const { removeContact, addContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
