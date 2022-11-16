import { configureStore } from '@reduxjs/toolkit';
import { getContacts, selectContact } from './ContactsReducer';

export const store = configureStore({
    reducer: {
        allContacts: getContacts,
        selectedContact: selectContact
    }
});

export default store;