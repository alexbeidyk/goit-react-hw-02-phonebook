import React, { Component } from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import SearchForm from "./components/SearchForm/SearchForm";
// eslint-disable-next-line
import baseStyles from "./base-styles/main-base-styles.scss";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  getAndAddContact = (newContact) => {
    if (this.isContactExist(newContact)) {
      this.setState(({ contacts }) => {
        return { contacts: [newContact, ...contacts] };
      });
    }
  };

  deleteContact = (e) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== e.target.id),
      };
    });
  };

  isContactExist = (newContact) => {
    const { contacts } = this.state;
    let contactExist = true;

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        contactExist = false;
      }
    });

    return contactExist;
  };

  setFilterState = (e) => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeQuery = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeQuery)
    );
  };

  render() {
    const { filter } = this.state;
    const afterSearchContacts = this.filterContacts();

    return (
      <>
        <Container>
          <Form onSubmit={this.getAndAddContact} />
          <ContactList
            contacts={afterSearchContacts}
            onClick={this.deleteContact}
          >
            <SearchForm filter={filter} onChange={this.setFilterState} />
          </ContactList>
        </Container>
      </>
    );
  }
}

export default App;
