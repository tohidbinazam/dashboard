import { createSlice } from '@reduxjs/toolkit';
import { loginUser, me, registerUser } from './authApiSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: false,
    user: null,
    permissions: null,
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    clearMsg: (state) => {
      state.message = null;
      state.error = null;
    },
    logout: (state) => {
      state.token = false;
      state.user = null;
      state.permissions = null;
    },
    addToken: (state) => {
      state.token = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = true;
        state.user = payload.user;
        state.permissions = payload.user.role.permissions;
        state.message = payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(me.pending, (state) => {
        state.loading = true;
      })
      .addCase(me.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.permissions = payload.role.permissions;
      })
      .addCase(me.rejected, (state, action) => {
        state.loading = false;
        state.token = false;
        state.error = action.error.message;
      });
  },
});

export const selectAuth = (state) => state.auth;

export const { clearMsg, logout, addToken } = authSlice.actions;

export default authSlice.reducer;
