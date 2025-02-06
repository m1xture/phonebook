import { createSlice } from "@reduxjs/toolkit";

const foundContactsSlice = createSlice({
  name: "foundContacts",
  initialState: [],
  reducers: {
    setFoundContacts(state, action) {
      //   state = action.payload;
      return action.payload;
    },
  },
});

export const { setFoundContacts } = foundContactsSlice.actions;
export const foundContactsReducer = foundContactsSlice.reducer;
