import { Component } from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

class ContactsList extends Component {
  render() {
    return (
      <ul className={css.contacts}>
        {this.props.contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteFn={this.props.deleteFn}
          />
        ))}
      </ul>
    );
  }
}

export default ContactsList;
