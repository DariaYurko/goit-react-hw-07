import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// -------------- Створення санки ---------------- /
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'https://66d005b1181d059277dcefe5.mockapi.io/contacts'
      );
      // console.log('data', data);
      return data; // data потрапить в action.payload
    } catch (err) {
      return thunkApi.rejectWithValue(err.message); // err потрапить в action.payload
    }
  }
);
// --------------------------------------------- /

// ----------- Санка для видалення контакту ---- /
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66d005b1181d059277dcefe5.mockapi.io/contacts/${contactID}`
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
// --------------------------------------------- /

// ----------- Санка для додавання контакту ---- /
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await axios.post(
        `https://66d005b1181d059277dcefe5.mockapi.io/contacts`,
        contactData
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
// --------------------------------------------- /
