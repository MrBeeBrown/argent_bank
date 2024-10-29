import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserAPI = createAsyncThunk(
  "user/updateUserAPI",
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    const userToken = getState().user.token;

    try {
      const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  id: "",
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  status: 'idle',
  error: null,
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

  extraReducers: (builder) => {
    builder
      .addCase(updateUserAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.firstName = action.meta.arg.firstName;
        state.lastName = action.meta.arg.lastName;
      })
      .addCase(updateUserAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
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