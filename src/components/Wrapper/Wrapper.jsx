import { useState, useEffect } from "react";
import ContactsList from "../ContactsList/ContactsList";
import AddForm from "../AddForm/AddForm";
import FindInput from "../FindInput/FindInput";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actions";

// class Wrapper extends Component {
//   state = {
//     contacts: [],
//     foundContacts: [],
//     filter: "",
//   };
// componentDidMount() {
//   try {
//     if (JSON.parse(localStorage.getItem("contacts"))) {
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem("contacts")),
//       });
//     } else {
//       localStorage.setItem(
//         "contacts",
//         JSON.stringify([
//           { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//           { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//           { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//           { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//         ])
//       );
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem("contacts")),
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
//   deleteFn = (e) => {
//     const id = e.target.closest("li").id;
//     const deletedArr = this.state.contacts.filter(
//       (contacts) => contacts.id !== id
//     );
//     this.setState({ contacts: deletedArr });
//     localStorage.setItem("contacts", JSON.stringify(deletedArr));
//   };
//   saveFn = (e) => {
//     e.preventDefault();
//     const newContact = {
//       id: nanoid(),
//       name: e.target.name.value.trim(),
//       number: e.target.tel.value.trim(),
//     };
//     if (newContact.number.length < 4 || newContact.name.length < 3) {
//       return console.log("validation failed");
//     }
//     this.setState({ contacts: [...this.state.contacts, newContact] });
//     localStorage.setItem(
//       "contacts",
//       JSON.stringify([...this.state.contacts, newContact])
//     );
//     e.target.reset();
//   };
//   updateValueState = (e) => {
//     const value = e.target.value.toLowerCase();
//     const foundArr = this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(value)
//     );
//     this.setState({ filter: value, foundContacts: foundArr });
//   };

//   render() {
//     return (
//       <>
//         <AddForm saveFn={this.saveFn} />
//         <FindInput findContactFn={this.updateValueState} />
//         <ContactsList
//           contacts={
//             this.state.filter ? this.state.foundContacts : this.state.contacts
//           }
//           deleteFn={this.deleteFn}
//         />
//       </>
//     );
//   }
// }

const Wrapper = () => {
  // const [contacts, setContacts] = useState([]);
  // const [foundContacts, setFoundContacts] = useState([]);
  // const [filter, setFilter] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   try {
  //     if (JSON.parse(localStorage.getItem("contacts"))) {
  //       // this.setState({
  //       //   contacts: JSON.parse(localStorage.getItem("contacts")),
  //       // });
  //       // setContacts(JSON.parse(localStorage.getItem("contacts")));
  //       dispatch(addContact(JSON.parse(localStorage.getItem("contacts"))));
  //     } else {
  //       localStorage.setItem(
  //         "contacts",
  //         JSON.stringify([
  //           { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //           { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //           { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //           { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //         ])
  //       );
  //       // this.setState({
  //       //   contacts: JSON.parse(localStorage.getItem("contacts")),
  //       // });
  //       // setContacts(JSON.parse(localStorage.getItem("contacts")));
  //       dispatch(addContact(JSON.parse(localStorage.getItem("contacts"))));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  // const saveFn = (e) => {
  //   e.preventDefault();
  //   const newContact = {
  //     id: nanoid(),
  //     name: e.target.name.value.trim(),
  //     number: e.target.tel.value.trim(),
  //   };
  //   if (newContact.number.length < 4 || newContact.name.length < 3) {
  //     return console.log("validation failed");
  //   }
  //   setContacts([...contacts, newContact]);
  //   localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
  //   e.target.reset();
  // };
  const deleteFn = (e) => {
    // const id = e.target.closest("li").id;
    // const deletedArr = contacts.filter((contacts) => contacts.id !== id);
    // // this.setState({ contacts: deletedArr });
    // setContacts(deletedArr);
    // localStorage.setItem("contacts", JSON.stringify(deletedArr));
  };
  const updateValueState = (e) => {
    // const value = e.target.value.toLowerCase();
    // const foundArr = contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(value)
    // );
    // // this.setState({ filter: value, foundContacts: foundArr });
    // setFilter(value);
    // setFoundContacts(foundArr);
  };
  return (
    <>
      <AddForm />
      <FindInput findContactFn={updateValueState} />
      <ContactsList deleteFn={deleteFn} />
    </>
  );
};

export default Wrapper;
