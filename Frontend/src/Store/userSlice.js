import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  verify,
} from "../Services/UserApis";

const initialState = {
  isLoading: false,
  isLoginIn: false,
  userDetails: "",
  userId: "",
  error: null,
};

export const registerSync = createAsyncThunk(
  "/user/register",
  async (payload) => {
    try {
      const response = await register(payload);
      return response
    } catch (error) {
      return (error);
    }
  }
);

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(registerSync.pending, (state) => {
        state.isLoading = true;
      })

      // Fulfilled
      .addCase(registerSync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoginIn = true;
        state.userDetails = action.payload;
      })

      // Rejected
      .addCase(registerSync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;