import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// -------------- Створення санки ---------------- /
export const apiGetAllContatcs = createAsyncThunk(
  "contacts/getContacts",
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
)
// --------------------------------------------- /

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },

  // Підписка нa три типи actions які повертає санка
  extraReducers: (builder) => {
    return builder
      .addCase(apiGetAllContatcs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetAllContatcs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload
      }).addCase(apiGetAllContatcs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      });
  },
});

// --------------- Reducer
export const contactsReducer = contactsSlice.reducer;

// --------------  Action creators
export const { addContact, deleteContact } = contactsSlice.actions;


// ----
export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectLoader = (state) => {
  return state.contacts.isLoading;
}

// ----------------------------------------------------------------------------------/

// // ---------- Reducer
// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contacts/add': {
//       return {
//          ...state,
//          contacts: [action.payload, ...state.contacts],
//       };
//     }
//     case 'contact/delete': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// // --------------  Action creators
// /**
//  * Add contact
//  *
//  */
// export const addContact = contact => {
//   return {
//     type: 'contacts/add',
//     payload: contact,
//   };
// };

// /**
//  * Delete contact
//  *
//  */
// export const deleteContact = contactId => {
//   return {
//     type: 'contact/delete',
//     payload: contactId,
//   };
// };
