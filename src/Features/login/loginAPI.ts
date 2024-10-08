import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the types for login request and response
export interface logInUser {
  email: string;
  password: string;
}

export interface User {
    userId: number;
    fullName: string;
    contactPhone: string;
    email: string;
    location: string;
    street: string;
    dateOfBirth: string;
    gender: string;
    role: 'admin' | 'user'; // Add any other roles if necessary
}

// export interface LoginResponse {
//     token: string;
//     user: User;
// }

export interface LoginResponse {
  id: string;
  user: User;
  email: string;
  token: string;
}

// Define the types for registration request and response
export interface RegisterUser {
  fullName: string;
  email: string;
  contactPhone: string;
  address: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  fullName: string;
  email: string;
  contactPhone: string;
  address: string;
  token: string;
}

export const loginAPI = createApi({
  reducerPath: 'loginAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://car-rental-backend-1.onrender.com/api' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, Partial<logInUser>>({
      query: (user) => ({
        url: 'login',
        method: 'POST',
        body: user,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),
    registerUser: builder.mutation<RegisterResponse, Partial<RegisterUser>>({
      query: (user) => ({
        url: 'register',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useLogoutMutation, useRegisterUserMutation } = loginAPI;
