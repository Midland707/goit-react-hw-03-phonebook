import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeHandel = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  makeContact() {
    const { name, number } = this.state;
    return {
      id: nanoid(),
      name: name,
      number: number,
    };
  }

  handleSubmit = eventSubmit => {
    eventSubmit.preventDefault();
    const { name } = this.state;
    const alertState = this.props.contacts.findIndex(
      contact => contact.name === name
    );
    if (alertState === -1) {
      this.props.onSubmitForm(this.makeContact());
      eventSubmit.target.reset();
    } else alert(`${name} is already in contacts`);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formNameTitle}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeHandel}
          />
        </label>
        <label className={css.formNameTitle}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeHandel}
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
