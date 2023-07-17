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
  state.isLoading = true;
};

export const handelFulfilledGet = (state, actions) => {
  state.isLoading = false;
  
  state.items = actions.payload;
  console.log(state)
  state.error = null;
};

export const handelFulfilledCreate = (state, actions) => {
  state.isLoading = false;
  state.items.push(actions.payload); ;
  state.error = null;
  Notiflix.Notify.success(
      `${actions.payload.name} has been successfully added to  your phonebook`
    );
};

export const handelFulfilledDel = (state, actions) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== actions.payload);
  state.error = null;
};

export const handelRejected = (state, actions) => {
  state.isLoading = false;
  state.error = actions.error;
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
