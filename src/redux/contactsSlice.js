// import items from '../contacts.json';
import { createSlice } from '@reduxjs/toolkit';

// const INITIAL_STATE = {
//   items, // [{ "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" }, ...] 
// };

const INITIAL_STATE = {
  items: [],
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
});

// ---------- Reducer
export const contactsReducer = contactsSlice.reducer;

// --------------  Action creators
export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => {
  return state.contacts.items;
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
