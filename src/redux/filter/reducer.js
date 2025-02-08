import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./actions";

export const filterReducer = createReducer("", (builder) => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});
