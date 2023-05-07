import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './ContactsForm/index';
import ContactList from './ContactsList/index';
import ContactFilter from './ContactsFilter/index';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  hanlerSubmitForm = props => {
    const { name, number } = props;
    const arrayValue = this.state.contacts.map(el => el.name.toLowerCase());

    if (arrayValue.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: prevState.contacts.concat({
        id: nanoid(),
        name,
        number,
      }),
    }));
  };

  handlerFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredOutArray = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactsForm onSubmit={this.hanlerSubmitForm} />
        <h2>Contacts</h2>
        <ContactFilter onChange={this.handlerFilterInput} />
        <ContactList contacts={filteredOutArray} />
      </div>
    );
  }
}
