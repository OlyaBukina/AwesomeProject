import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: null,
      login: null,
      email: null,
      password: null,
    },
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, userLoggingFulfilled)
      .addCase(register.fulfilled, userLoggingFulfilled)
      .addCase(logOut.fulfilled, userLogOutFulfilled);
  },
});

function userLoggingFulfilled(state, action) {
  state.user = action.payload;
  state.isLoggedIn = true;
}

function userLogOutFulfilled(state, action) {
  state.user = action.payload;
  state.isLoggedIn = false;
}

export const authReducer = authSlice.reducer;
