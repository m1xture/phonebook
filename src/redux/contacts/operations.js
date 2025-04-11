import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import useAuthWithNavigate from "../../hooks/useAuthWithNavigate";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (token, thunkAPI) => {
    try {
      const resp = await axios.get("contacts/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post("contacts/", data.data, {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.delete(`contacts/${data.id}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
