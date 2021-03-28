import React from 'react';
import PropTypes from 'prop-types';

import ContactsItem from './ContactItem';

import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteOnClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteOnClick={deleteOnClick}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};

export default ContactsList;
