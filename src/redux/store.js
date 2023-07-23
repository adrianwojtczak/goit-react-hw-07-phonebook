import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/contactsSlice';
import filterReducer from 'redux/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => {
  const { contacts } = store.getState();
  localStorage.setItem('contacts', JSON.stringify(contacts));
});

export default store;
