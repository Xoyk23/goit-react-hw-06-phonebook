import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addContact } from '../../redux/contactsItems/contacts-actions';

import { v4 as uuidv4 } from 'uuid';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  heandleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  addNewContact = e => {
    e.preventDefault();

    this.props.onSubmit({ id: uuidv4(), ...this.state });

    this.setState({
      name: '',
      number: '',
    });
  };

  passNewContact = (newName, number) => {
    let pass = true;

    this.state.contacts.forEach(({ name }) => {
      if (name.toLowerCase() === newName.toLowerCase()) {
        alert(`${name} is already in your contacts list`);
        pass = false;
      }
    });

    if (newName === '' || number === '') {
      alert(`Please whrite all info`);
      pass = false;
    }

    return pass;
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.addNewContact}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.heandleInput}
            required
          />
        </label>
        <label className={styles.label}>
          Phone number<span className={styles.example}>(000-00-00)</span>:
          <input
            className={styles.input}
            name="number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={this.state.number}
            onChange={this.heandleInput}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ id, name, number }) =>
    dispatch(addContact({ id, name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
