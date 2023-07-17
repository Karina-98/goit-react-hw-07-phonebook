import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b5771bf3dbab5a95c75bd4.mockapi.io';

export const getAllContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
        
      const response = axios.get('/contacts');
      console.log(await response)
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContacts = createAsyncThunk(
  'contacts/createContacts',
  async (contacts, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', contacts);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
