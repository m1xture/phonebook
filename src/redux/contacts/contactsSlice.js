import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "conctacts",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    setFullContacts(state, action) {
      //   state = action.paylod;
      return action.payload;
    },
  },
});

export const { addContact, setFullContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
