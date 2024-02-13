import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartCount: 0,
};

export const getCartCount = createAsyncThunk("cart/get", async () => {
  try {
    const res = await axios.get("http://localhost:5001/cart/allItems");
    console.log(res);
    return res.data.length;
  } catch (error) {
    console.error(error);
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartCount.fulfilled, (state, action) => {
      state.cartCount = action.payload;
    });
  },
});

export default cartSlice.reducer;
