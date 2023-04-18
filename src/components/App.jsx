import { Component } from "react";
import {Form} from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Wrapper, Title, TitleFilter } from './App.styled';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  componentDidMount() {
    const localContacts = localStorage.getItem(CONTACTS_KEY);
    const parsedLocalContacts = JSON.parse(localContacts);

    if (parsedLocalContacts) {
      this.setState({ contacts: parsedLocalContacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    };
  };
  
  createContact = (data) => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts,data] };
    });
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const filtredContacts = this.getFiltredContacts();
    const { contacts, filter } = this.state;

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onClickSubmit={this.createContact}  contacts={contacts} />
        <TitleFilter>Contacts</TitleFilter>
        <Filter valueFilter={filter} onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact} />
      </Wrapper>
    )
  }
}