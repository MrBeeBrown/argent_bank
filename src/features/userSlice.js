import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  token: "",
  email: "",
  firstName: "",
  lastName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    savedToken: (state, action) => {
      const token = action.payload;
      state.token = (token);
      return;
    },
    savedId: (state, action) => {
      const id = action.payload;
      state.id = (id);
      return;
    },
    savedEmail: (state, action) => {
      const email = action.payload;
      state.email = (email);
      return;
    },
    savedFirstName: (state, action) => {
      const firstName = action.payload;
      state.firstName = (firstName);
      return;
    },
    savedLastName: (state, action) => {
      const lastName = action.payload;
      state.lastName = (lastName);
      return;
    },
    deletedUser: (state) => {
      state.token = "";
      state.id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      return;
    },
  },
});

export const {
  savedToken,
  savedId,
  savedEmail,
  savedFirstName,
  savedLastName,
  deletedUser,
} = userSlice.actions;

export default userSlice.reducer;