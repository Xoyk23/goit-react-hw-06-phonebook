import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { deleteContact } from '../../redux/contactsItems/contacts-actions';

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

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: items.filter(
    ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase()),
  ),
});

const mapDispatchToProps = dispatch => ({
  deleteOnClick: e => dispatch(deleteContact(e.target.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
