import {createSlice} from "@reduxjs/toolkit";
import {fetchCarsThunk} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: null,
  isMore: true,
};

const slice = createSlice({
  name: "car",
  initialState,
  reducers: {
    clearItems: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.cars];
        state.isMore = action.payload.isMore;
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
        (state, action) => {
          state.isLoading = false;
          state.errorMessage = action.payload;
        }
      );
  },
});

export const carReducer = slice.reducer;
export const {clearItems} = slice.actions;
