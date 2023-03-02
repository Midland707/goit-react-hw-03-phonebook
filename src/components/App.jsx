import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = data => {
    const contactsArray = this.state.contacts.slice(); // Create a copy
    contactsArray.push(data); // Push the object
    this.setState({
      contacts: contactsArray,
    });
  };

  onFilterByName = eventFilter => {
    const filterValue = eventFilter.target.value.toLowerCase().trim();
    this.setState({ filter: filterValue });
  };

  onClickDelete = eventDelete => {
    const array = [...this.state.contacts];
    const index = this.state.contacts.findIndex(
      option => option.id === eventDelete.target.id
    );
    if (index > -1) array.splice(index, 1);
    this.setState({ contacts: array });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          onSubmitForm={this.onSubmitForm}
          contacts={this.state.contacts}
        />
        <h2 className={css.title}>Contacts</h2>
        <Filter onFilterByName={this.onFilterByName} />
        <ContactList
          contacts={filterContacts}
          filter={this.state.filter}
          onClickDelete={this.onClickDelete}
        />
      </div>
    );
  }
}
