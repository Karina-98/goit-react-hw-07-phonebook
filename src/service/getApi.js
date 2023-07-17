import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://64b5771bf3dbab5a95c75bd4.mockapi.io'

export const getContacts = createAsyncThunk('contacts/fetchAll', ()=>{
try{
    const res = axios.get('/contacts')
// return res.data
return console.log(thunkAPI)
} catch(e){

}
})