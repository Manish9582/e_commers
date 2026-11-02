"use client";
import { Porfile } from "@/types/redux";
import { createSlice } from "@reduxjs/toolkit";

const PorfileSliceObject: Porfile = {
  user: [],
  shopkeeper: [],
};

const PorfileSlice = createSlice({
  name: "usersProfile",
  initialState: PorfileSliceObject,
  reducers: {},
});

export const ProfileReducers = PorfileSlice.reducer;
const {} = PorfileSlice.actions;
