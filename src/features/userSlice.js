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
    },
    savedId: (state, action) => {
      const id = action.payload;
      state.id = (id);
    },
    savedEmail: (state, action) => {
      const email = action.payload;
      state.email = (email);
    },
    savedFirstName: (state, action) => {
      const firstName = action.payload;
      state.firstName = (firstName);
    },
    savedLastName: (state, action) => {
      const lastName = action.payload;
      state.lastName = (lastName);
    },
    deletedUser: (state) => {
      state.token = "";
      state.id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
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