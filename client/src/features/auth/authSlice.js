import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authApiSlice';

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
      });
  },
});

export const { clearMsg } = authSlice.actions;

export default authSlice.reducer;
