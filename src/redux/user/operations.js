import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const signup = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post("/users/signup", data);
      if (resp.data?.token) {
        const inFifteenMinutes = new Date(
          new Date().getTime() + 15 * 60 * 1000
        );
        Cookies.set("token", resp.data.token, { expires: inFifteenMinutes });
      }
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signin = createAsyncThunk(
  "user/signin",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post("/users/login", data);
      if (resp.data?.token) {
        const inFifteenMinutes = new Date(
          new Date().getTime() + 15 * 60 * 1000
        );
        Cookies.set("token", resp.data.token, { expires: inFifteenMinutes });
      }
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
