import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { fetchContacts, deleteContactAsync } from 'redux/contactsSlice';
import ContactItem from '../ContactItem';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
