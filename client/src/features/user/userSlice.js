import { createSlice } from '@reduxjs/toolkit';
import {
  addPermission,
  deletePermission,
  getAllPermission,
} from './userApiSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: null,
    permission: null,
    role: null,
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
      .addCase(getAllPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllPermission.fulfilled, (state, { payload }) => {
        state.permission = payload;
      })
      .addCase(addPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addPermission.fulfilled, (state, { payload }) => {
        state.permission.unshift(payload.permission);
        state.message = payload.message;
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePermission.fulfilled, (state, { payload }) => {
        state.permission = state.permission.filter(
          (permission) => permission._id !== payload.permission._id
        );
        state.message = payload.message;
      });
  },
});

export const selectUser = (state) => state.user;

export const { clearMsg } = userSlice.actions;

export default userSlice.reducer;
