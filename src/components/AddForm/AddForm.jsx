// import { Component } from "react";
import { useCallback } from "react";
import css from "./AddForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actions";
import { nanoid } from "nanoid";
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
  const contacts = useSelector((state) => state.contacts);
  const saveFn = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: e.target.name.value.trim(),
      number: e.target.tel.value.trim(),
    };
    if (newContact.number.length < 4 || newContact.name.length < 3) {
      return console.log("validation failed");
    }
    dispatch(addContact(newContact));
    localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
    e.target.reset();
  };
  return (
    <form onSubmit={saveFn} className={css.form}>
      <input
        placeholder="Enter contact name here"
        type="text"
        name="name"
        required
        className={css.input}
      />
      <input
        placeholder="Enter contact number here"
        type="tel"
        name="tel"
        required
        className={css.input}
      />
      <button type="submit" className={css.saveBtn}>
        Save contact
      </button>
    </form>
  );
};

export default AddForm;
