export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: contact,
  };
};

export const setFilter = (value) => {
  return {
    type: "filter/setFilter",
    payload: value,
  };
};

export const setFoundContacts = (contacts) => {
  return {
    type: "foundContacts/setFoundContacts",
    payload: contacts,
  };
};
