import React, { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerInput = e => {
    const targetKey = e.target.name;
    this.setState({ [targetKey]: e.target.value });
  };

  hanlerSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.reset();
  };

  render() {
    return (
      <form action="" onSubmit={this.hanlerSubmitForm}>
        <h1>Phonebook</h1>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handlerInput}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handlerInput}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
