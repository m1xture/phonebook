import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    setFullContacts(state, action) {
      //   state = action.paylod;
      return { contacts: action.payload };
    },
  },
});

export const { addContact, setFullContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
