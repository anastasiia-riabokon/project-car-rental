import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  rentalPrice: "",
  make: "",
  mileage: {min: 0, max: 100000},
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeRentalPriceFilter: (state, action) => {
      state.rentalPrice = action.payload;
    },
    changeMakeFilter: (state, action) => {
      state.make = action.payload;
    },
    changeMileageFilter: (state, action) => {
      state.mileage = action.payload;
    },
    resetFilter: () => {
      return initialState;
    },
  },
});

export const filterReducer = slice.reducer;
export const {changeRentalPriceFilter, changeMakeFilter, changeMileageFilter} = slice.actions;
