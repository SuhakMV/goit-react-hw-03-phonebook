import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      /*{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },*/
    ],
    filter: '',
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  newContact = ({ name, number }) => {
    const isNameSaved = name.toLowerCase();
    let savedName = false;

    this.state.contacts.forEach(element => {
      if (element.name.toLowerCase() === isNameSaved) {
        alert(`${name} is already in contacts`);
        savedName = true;
      }
    });
    if (savedName) {
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  searchContacts = () => {
    const { filter, contacts } = this.state;
    const savedNameFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(savedNameFilter)
    );
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const searchContacts = this.searchContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.newContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={searchContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
