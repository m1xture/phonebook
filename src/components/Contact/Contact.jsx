// import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Contact.module.css";
import { setFullContacts } from "../../redux/contacts/contactsSlice";

// class Contact extends Component {
//   render() {
//     const { id, name, number } = this.props.contact;
//     return (

//     );
//   }
// }

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const deleteFn = (e) => {
    const id = e.target.closest("li").id;
    const deletedArr = contacts.filter((contacts) => contacts.id !== id);
    localStorage.setItem("contacts", JSON.stringify(deletedArr));
    dispatch(setFullContacts(deletedArr));
  };
  return (
    <li id={id} className="bg-slate-700 rounded-md p-4">
      <h2 className="text-white font-bold ">{name}</h2>
      <p className="text-white font-medium mt-1">{number}</p>
      <button
        type="button"
        onClick={deleteFn}
        className="bg-slate-500 p-1 rounded-sm block mt-3 ml-auto text-white hover:bg-transparent hover:outline-slate-500 hover:outline-2 hover:outline duration-300 delay-75"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
