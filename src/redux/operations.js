import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://645a70cf95624ceb21020ed0.mockapi.io';

export const fetchContactsItems = createAsyncThunk(
  'contactsItems/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contactItem/addContact',
  async (newContactItem, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContactItem);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contactItem/deleteContact',
  async (contactItemId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactItemId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);