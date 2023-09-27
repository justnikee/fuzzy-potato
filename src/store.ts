import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/slices/authSlice";
import cartReducer from "./store/slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
