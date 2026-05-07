import { configureStore } from "@reduxjs/toolkit";
import { Expand } from "lucide-react";
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    "user": userSlice,
  }
});
export default store