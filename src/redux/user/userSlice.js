import { signin, signup } from "./operations";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoading: false,
  error: false,
  user: {
    token: Cookies.get("token") ? Cookies.get("token") : null,
    email: null,
    name: null,
  },
};

const pending = (state, action) => {
  state.isLoading = true;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    clearUser(state) {
      state.user = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, pending)
      .addCase(signin.rejected, rejected)
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.user = { token: action.payload.token, ...action.payload.user };
      })
      .addCase(signup.pending, pending)
      .addCase(signup.rejected, rejected)
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.user = { token: action.payload.token, ...action.payload.user };
      });
  },
});

export const selectUser = (state) => state.user.user;
export const userReducer = userSlice.reducer;
export const { clearUser } = userSlice.actions;
