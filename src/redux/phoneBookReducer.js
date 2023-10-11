import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: null,
};

export const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phoneBook/addContact': {
      const { name, number } = action.payload;
      const contactExists = state.contacts.some(
        contact => contact.name === name
      );
      if (name && number) {
        if (!contactExists) {
          // setContacts(prev => [...prev, { id: nanoid(), name, number }]);
          toast.success(`${name} was added to contacts`);
          return { ...state, contacts: [...state.contacts, { id: nanoid(), name, number }] };
        } else {
          toast.error(`${name} is already exist in contacts`);
        }
      }
      break;
    }
    case 'phoneBook/deleteContact': {
      return { ...state.filter(contact => contact.id !== action.payload) };
    }
    case 'phoneBook/changeFilter': {
      break;
    }

    default:
      return state;
  }
};
