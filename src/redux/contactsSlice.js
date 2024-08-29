import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// -------------- Створення санки ---------------- /
export const apiGetAllContatcsThunk = createAsyncThunk(
  'contacts/getContacts',
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
export const apiDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66d005b1181d059277dcefe5.mockapi.io/contacts/${contactID}`
      );
      // console.log('deleted contsct', data); 
      return data; // data потрапить в action.payload

    } catch (err) {
      return thunkApi.rejectWithValue(err.message); // err потрапить в action.payload
    }
  }
);
// --------------------------------------------- /


// ----------- Санка для додавання контакту ---- /
export const apiAddContact = createAsyncThunk(
  'contacts/AddContact',
  async (contactData, thunkApi) => {
    try {
      const { data } = await axios.post(
        `https://66d005b1181d059277dcefe5.mockapi.io/contacts`,
        contactData
      );
      // console.log(data); 
      return data; 
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
// --------------------------------------------- /

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items = [action.payload, ...state.items];
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },

  // Підписка нa три типи actions які повертає санка
  extraReducers: builder => {
    return builder
      .addCase(apiGetAllContatcsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetAllContatcsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(apiGetAllContatcsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiDeleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiAddContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload)
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// --------------- Reducer
export const contactsReducer = contactsSlice.reducer;

// --------------  Action creators
// export const { addContact, deleteContact } = contactsSlice.actions;
export const { addContact } = contactsSlice.actions;

// ----
export const selectContacts = state => {
  return state.contacts.items;
};

export const selectLoader = state => {
  return state.contacts.isLoading;
};

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
