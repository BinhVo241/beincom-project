import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ActionLogin, AuthState } from "./types";

const initialState = {
  accessToken: "",
  isAuthenticated: false,
  userInfo: null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.accessToken = null;
      state.isAuthenticated = false;
      state.userInfo = null;
    },
    login(state, action: PayloadAction<ActionLogin>) {
      const { token, userInfo } = action.payload;
      state.accessToken = token;
      state.isAuthenticated = true;
      state.userInfo = userInfo;
    },
  },
});

export const authActions = authSlice.actions;
