import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from "./operations";

const pending = (state, action) => {
  state.isLoading = true;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.contacts.push(action.payload);
  //   },
  //   setFullContacts(state, action) {
  //     //   state = action.paylod;
  //     return { contacts: action.payload };
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

// export const { addContact, setFullContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
