import { createSlice } from "@reduxjs/toolkit";
import { Messages } from "@/types/redux";
import { SignShopkepeerThunks } from "../thunks/customer";

const initialState: Messages = {
  status: null,
  message: "",
  loading: false,
  error: "",
};

const AuthSlice = createSlice({
  name: "shop/sign",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(SignShopkepeerThunks.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.error = "";
        state.status = null;
      })
      .addCase(SignShopkepeerThunks.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(SignShopkepeerThunks.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.status = false;
        state.error =
          action.payload ?? action.error.message ?? "Something went wrong";
      });
  },
});

export const AuthMessage = AuthSlice.reducer;
export const {} = AuthSlice.actions;
