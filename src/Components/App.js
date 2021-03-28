import React from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

const mapStateToProps = ({ contacts: { items } }) => ({
  contacts: items,
});

export default connect(mapStateToProps, null)(App);
