import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      login: null,
      email: null,
      password: null,
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log("register", action);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log("login", action);
      });
  },
});

export const authReducer = authSlice.reducer;
