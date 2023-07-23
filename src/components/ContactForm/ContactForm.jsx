import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContactAsync } from 'redux/contactsSlice';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleChange = ev => {
    const { name, value } = ev.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      name,
      phone,
    };
    dispatch(addNewContactAsync(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
