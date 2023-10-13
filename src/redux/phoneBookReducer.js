import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      state.contacts = [...state.contacts, { id, name, number }];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  phoneBookSlice.actions;

export const phoneBookReducer = phoneBookSlice.reducer;

// export const phoneBookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'phoneBook/addContact': {
//       const { name, number } = action.payload;
// const contactExists = state.contacts.some(
//   contact => contact.name === name
// );
//       if (name && number) {
//         if (!contactExists) {
//           toast.success(`${name} was added to contacts`);
//           return {
//             ...state,
//             contacts: [...state.contacts, { id: nanoid(), name, number }],
//           };
//         } else {
//           toast.error(`${name} is already exist in contacts`);
//         }
//       }
//       break;
//     }
//     case 'phoneBook/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'phoneBook/changeFilter': {
//       return { ...state, filter: action.payload };
//     }

//     default:
//       return state;
//   }
// };

// /*
// │ =========================
// │      actions creator
// │ =========================
// */
// export const addContact = payload =>{
//   return {
//     type: 'phoneBook/addContact',
//     payload,
//   }
// }
// export const deleteContact = payload =>{
//   return {
//     type: 'phoneBook/deleteContact',
//     payload,
//   }
// }
// export const changeFilter = payload =>{
//   return {
//     type: 'phoneBook/changeFilter',
//     payload,
//   }
// }
