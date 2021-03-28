import { Component } from 'react';

import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addNewContact = ({ id, name, number }) => {
    if (this.passNewContact(name, number)) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { id, name, number }],
      }));
    }
  };

  deleteContact = e => {
    const deleteId = e.currentTarget.id;

    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== deleteId),
    }));
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

  handleChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getContactsToShow = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getContactsToShow();

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <ContactsList
          contacts={filteredContacts}
          deleteOnClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
