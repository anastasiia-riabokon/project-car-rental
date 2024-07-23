import {createSlice} from "@reduxjs/toolkit";
import {fetchCarsThunk} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: null,
};

const slice = createSlice({
  name: "car",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.errorMessage = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
          state.errorMessage = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state) => {
          state.isLoading = false;
          state.errorMessage = action.payload;
        }
      );
  },
});

export const carReducer = slice.reducer;
