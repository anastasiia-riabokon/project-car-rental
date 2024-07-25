import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./car/slice";
import {filterReducer} from "./filter/slice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    filter: filterReducer,
  },
});
