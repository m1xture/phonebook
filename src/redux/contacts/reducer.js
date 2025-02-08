import { createReducer } from "@reduxjs/toolkit";
import { addContact } from "./actions";
import { setFullContacts } from "./contactsSlice";

export const contactsReducer = createReducer([], (builder) => {
  builder.addCase(addContact, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(setFullContacts, (state, action) => {
    return action.payload;
  });
});
