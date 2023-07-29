import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";

const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { login, email, password } = user;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const displayName = login;
      updateUserProfile({ displayName });

      return {
        id: response.user.uid,
        login,
        email,
        password,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const { email, password } = user;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("response", response);

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
