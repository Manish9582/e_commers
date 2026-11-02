import { AcceptShopData, responseData } from "@/types/shop/type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SignShopkepeerThunks = createAsyncThunk<
  responseData,
  AcceptShopData,
  { rejectValue: string }
>("shopkeeper/sign", async (data, { rejectWithValue }) => {
  try {
    console.log("thibks", data);
    const response = await fetch("/api/shopkepeer/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return rejectWithValue("Server is not working");
    }
    const result: responseData = await response.json();
    return result;
  } catch {
    return rejectWithValue("Something went wrong");
  }
});
