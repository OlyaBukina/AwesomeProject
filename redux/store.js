import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: { auth: persistReducer(persistConfig, authReducer) },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
