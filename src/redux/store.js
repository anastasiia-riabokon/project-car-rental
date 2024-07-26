import {configureStore} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import {carReducer} from "./car/slice";
import {filterReducer} from "./filter/slice";
import {favoriteReducer} from "./favorite/slice";

const persistConfig = {
  key: "favorite",
  version: 1,
  storage,
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    car: carReducer,
    filter: filterReducer,
    favorite: persistedFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
