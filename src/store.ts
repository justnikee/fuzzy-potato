import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/slices/authSlice";
import cartReducer from "./store/slices/cartSlice";
import { productsSlice, catSlice } from "./store/slices/allProducts";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsSlice.reducer,
    catagories: catSlice.reducer
  },
});
