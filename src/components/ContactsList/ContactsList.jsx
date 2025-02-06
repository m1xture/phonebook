// import { Component } from "react";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsSlice";
// class ContactsList extends Component {
//   render() {
//     console.log(this.props.contacts);
//     return (

//     );
//   }
// }

const ContactsList = ({ deleteFn }) => {
  const { contacts, foundContacts } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      if (!JSON.parse(localStorage.getItem("contacts"))) {
        localStorage.setItem(
          "contacts",
          JSON.stringify([
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
          ])
        );
      }
      if (contacts.length === 0) {
        console.log(contacts);
        JSON.parse(localStorage.getItem("contacts")).forEach((contact) => {
          dispatch(addContact(contact));
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [contacts]);
  useEffect(() => {
    console.log(foundContacts);
  }, []);
  return (
    <ul className="flex justify-center gap-10 items-center">
      {foundContacts.length === 0
        ? contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              deleteFn={deleteFn}
              id={nanoid()}
            />
          ))
        : foundContacts.map((contact) => (
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
