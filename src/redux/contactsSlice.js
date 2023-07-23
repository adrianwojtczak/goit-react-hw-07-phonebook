import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addNewContact, deleteContactById, getContacts } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await getContacts();
    return contacts;
  }
);

export const addNewContactAsync = createAsyncThunk(
  'contacts/addNewContactAsync',
  async data => {
    const contact = await addNewContact(data);
    return contact;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContactAsync',
  async id => {
    await deleteContactById(id);
    return id;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNewContactAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
