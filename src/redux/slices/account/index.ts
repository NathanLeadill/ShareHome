import { createSlice } from "@reduxjs/toolkit";

interface UserStateType {
  user: null | {
    email: string,
    token: string,
  }
}

const initialState: UserStateType = {
  user: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload
    },
  },
});

export const { login } = accountSlice.actions;

export default accountSlice.reducer;
