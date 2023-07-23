import React from 'react';

import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <span className={styles.name}>
      {contact.name}: {contact.number}
    </span>
    <button
      type="button"
      onClick={() => onDeleteContact(contact.id)}
      className={styles.button}
    >
      Delete
    </button>
  </li>
);

export default ContactItem;
