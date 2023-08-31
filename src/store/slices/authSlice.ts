import { createSlice } from "@reduxjs/toolkit";

const getUser = localStorage.getItem("user");
const user = getUser ? JSON.parse(getUser) : null;

const initialState = {
  user: user ? user : null,
  token: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
