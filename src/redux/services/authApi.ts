// Need to use the React-specific entry point to import createApi
import { RootState } from "@redux/reducers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, UserResponse } from "mocks/handlers";
import { LoginFormState, RegisterFormState } from "./types";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
      baseUrl: "https://ukrainerefugee.free.beeceptor.com",
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) headers.set("authentication", `Bearer ${token}`);
        return headers;
      }
    }),
  
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginFormState>({
        query: (credentials) => ({
          url: "login",
          method: "POST",
          body: credentials
        })
      }),
    register: builder.mutation<UserResponse, RegisterFormState>({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials
      })
    }) 
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation } = authApi;
