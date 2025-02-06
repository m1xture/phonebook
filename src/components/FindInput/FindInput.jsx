import { useCallback } from "react";
import css from "./FindInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filterSlice";
import { setFoundContacts } from "../../redux/foundContacts/foundContactsSlice";

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
    <label className="text-slate-300 flex flex-col justify-center items-center mt-10 mb-16 text-lg">
      Find contacts by the name
      <input
        type="text"
        onChange={findContactFn}
        placeholder="Contact name"
        className="mt-5 bg-slate-700 rounded-md p-1 placeholder:text-md focus:outline-none"
      />
    </label>
  );
};

export default FindInput;
