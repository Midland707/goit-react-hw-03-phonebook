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

  onSubmitForm = (data, resetForm) => {
    const { name } = data;
    const alertState = this.state.contacts.findIndex(
      contact => contact.name === name
    );
    if (alertState === -1) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
      resetForm.reset();
    } else alert(`${name} is already in contacts`);
  };

  onFilterByName = eventFilter => {
    const filterValue = eventFilter.target.value.toLowerCase().trim();
    this.setState({ filter: filterValue });
  };

  onClickDelete = idDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idDelete),
    }));
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} />
        <h2 className={css.title}>Contacts</h2>
        <Filter onFilterByName={this.onFilterByName} />
        <ContactList
          contacts={filterContacts}
          // contacts={this.state.contacts}
          onClickDelete={this.onClickDelete}
        />
      </div>
    );
  }
}
