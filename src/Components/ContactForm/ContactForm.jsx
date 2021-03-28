import React, { Component } from 'react';

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
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
