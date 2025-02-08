import { createReducer } from "@reduxjs/toolkit";
import { setFoundContacts } from "./foundContactsSlice";

export const foundContactsReducer = createReducer([], (builder) => {
  builder.addCase(setFoundContacts, (state, action) => {
    return action.payload;
  });
});
