// import { Component } from "react";
import { useCallback } from "react";
import css from "./AddForm.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "../../redux/contacts/contactsSlice";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import useAuthWithNavigate from "../../hooks/useAuthWithNavigate";
// class AddForm extends Component {
//   render() {
//     return (
//       <form onSubmit={this.props.saveFn} className={css.form}>
//         <input
//           placeholder="Enter contact name here"
//           type="text"
//           name="name"
//           required
//           className={css.input}
//         />
//         <input
//           placeholder="Enter contact number here"
//           type="tel"
//           name="tel"
//           required
//           className={css.input}
//         />
//         <button type="submit" className={css.saveBtn}>
//           Save contact
//         </button>
//       </form>
//     );
//   }
// }

const AddForm = () => {
  const dispatch = useDispatch();
  const token = useAuthWithNavigate();
  console.log(token);
  // const contacts = useSelector(selectContacts);
  const saveFn = (e) => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value.trim(),
      number: e.target.tel.value.trim(),
    };
    if (newContact.number.length < 4 || newContact.name.length < 3) {
      console.log("validation failed");
      return;
    }
    dispatch(addContact({ data: newContact, token }));
    // localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
    e.target.reset();
  };
  return (
    <form
      onSubmit={saveFn}
      className="flex flex-col items-center justify-center gap-5"
    >
      <input
        placeholder="Name"
        type="text"
        name="name"
        required
        minLength="4"
        className="w-[11.5vw] rounded-md p-2 placeholder:text-sm bg-slate-700 text-slate-300 focus:outline-none"
      />
      <input
        placeholder="Phone number"
        type="tel"
        name="tel"
        required
        className="w-[11.5vw] rounded-md p-2 placeholder:text-sm bg-slate-700 text-slate-300 focus:outline-none"
      />
      <button
        type="submit"
        className="w-28 bg-slate-700 p-1 rounded-lg text-slate-50 duration-300 delay-75 hover:bg-slate-500"
      >
        Save contact
      </button>
    </form>
  );
};

export default AddForm;
