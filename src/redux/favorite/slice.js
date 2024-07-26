import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addCar: (state, action) => {
      const newCar = {...action.payload, idFav: nanoid()};
      state.items = [...state.items, newCar];
    },
    removeCar: (state, action) => {
      state.items = state.items.filter((item) => item.idFav !== action.payload);
    },
  },
});

export const favoriteReducer = slice.reducer;
export const {addCar, removeCar} = slice.actions;
