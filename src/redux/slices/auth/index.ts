import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as {
    user: null | any;
    token: null | string;
  },
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
    ) => {
        state.user = user;
        state.token = token;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: (builder) => {},
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
