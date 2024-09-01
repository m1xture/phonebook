import { Component } from "react";
import ContactsList from "../ContactsList/ContactsList";
import AddForm from "../AddForm/AddForm";
import FindInput from "../FindInput/FindInput";
import { nanoid } from "nanoid";

class Wrapper extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    foundContacts: [],
    filter: "",
  };
  deleteFn = (e) => {
    const id = e.target.closest("li").id;
    const deletedArr = this.state.contacts.filter(
      (contacts) => contacts.id !== id
    );
    this.setState({ contacts: deletedArr });
  };
  saveFn = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: e.target.name.value.trim(),
      number: e.target.tel.value.trim(),
    };
    if (newContact.number.length < 4 || newContact.name.length < 3) {
      return console.log("validation failed");
    }
    this.setState({ contacts: [...this.state.contacts, newContact] });
    e.target.reset();
  };
  updateValueState = (e) => {
    const value = e.target.value.toLowerCase();
    const foundArr = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
    this.setState({ filter: value, foundContacts: foundArr });
  };

  render() {
    return (
      <>
        <AddForm saveFn={this.saveFn} />
        <FindInput findContactFn={this.updateValueState} />
        <ContactsList
          contacts={
            this.state.filter ? this.state.foundContacts : this.state.contacts
          }
          deleteFn={this.deleteFn}
        />
      </>
    );
  }
}

export default Wrapper;
