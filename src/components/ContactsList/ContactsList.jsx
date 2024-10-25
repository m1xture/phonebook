// import { Component } from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";

// class ContactsList extends Component {
//   render() {
//     console.log(this.props.contacts);
//     return (

//     );
//   }
// }

const ContactsList = ({ contacts, deleteFn }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteFn={deleteFn}
          id={nanoid()}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
