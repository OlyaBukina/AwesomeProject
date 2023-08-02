import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    const { login, email, password } = user;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const currentUser = auth.currentUser;
      await updateProfile(currentUser, {
        displayName: login,
      });

      return {
        id: response.user.uid,
        login: response.user.displayName,
        email,
        password,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  const { email, password } = user;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    return {
      id: response.user.uid,
      login: response.user.displayName,
      email,
      password,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return {
      id: null,
      email: null,
      password: null,
      login: null,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
