import { useCallback } from "react";
import css from "./FindInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setFoundContacts } from "../../redux/actions";

const FindInput = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const findContactFn = (e) => {
    const value = e.target.value.toLowerCase();
    const foundArr = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
    // setFilter(value);
    // setFoundContacts(foundArr);
    console.log(foundArr);
    dispatch(setFilter(value));
    dispatch(setFoundContacts(foundArr));
  };
  return (
    <label className={css.label}>
      Find contacts by the name
      <input type="text" onChange={findContactFn} />
    </label>
  );
};

export default FindInput;
