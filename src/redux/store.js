import persistReducer from "redux-persist/es/persistReducer";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { foundContactsReducer } from "./foundContacts/foundContactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { createStore } from "redux";

// const initialState = {
//   contacts: [],
//   filter: "",
//   foundContacts: [],
// };
// // Поки що використовуємо редюсер який
// // тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/addContact":
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case "filter/setFilter":
//       return { ...state, filter: action.payload };
//     case "foundContacts/setFoundContacts":
//       return { ...state, foundContacts: action.payload };
//     case "contacts/setFullContacts":
//       return { ...state, contacts: action.payload };
//   }

//   return state;
// };
// export const store = createStore(rootReducer);
const persistConfig = {
  key: "root",
  storage,
};
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    foundContacts: foundContactsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
export const persistor = persistStore(store);
