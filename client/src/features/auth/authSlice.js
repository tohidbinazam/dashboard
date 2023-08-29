import { createSlice } from '@reduxjs/toolkit';
import { loginUser, me, registerUser } from './authApiSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: false,
    user: null,
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.token = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(me.pending, (state) => {
        state.loading = true;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = true;
      })
      .addCase(me.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMsg, logout } = authSlice.actions;

export default authSlice.reducer;
