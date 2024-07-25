import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://669e50139a1bda3680063168.mockapi.io";

export const fetchCarsThunk = createAsyncThunk("cars/fetchAll", async (option, thunkAPI) => {
  try {
    const {data} = await axios.get("/car", {
      params: {
        limit: 12,
        ...option,
      },
    });
    return {
      cars: data,
      isMore: data.length === 12,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
