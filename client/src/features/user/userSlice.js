import { createSlice } from '@reduxjs/toolkit';
import {
  addPermission,
  addRole,
  addUser,
  deletePermission,
  deleteRole,
  deleteUser,
  getAllPermission,
  getAllRole,
  getAllUser,
  updatePermission,
  updateRole,
  updateUser,
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
      })
      .addCase(updatePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermission.fulfilled, (state, { payload }) => {
        state.permission[
          state.permission.findIndex(
            (permission) => permission._id == payload.permission._id
          )
        ] = payload.permission;
        state.message = payload.message;
      })
      .addCase(getAllRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllRole.fulfilled, (state, { payload }) => {
        state.role = payload;
      })
      .addCase(addRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addRole.fulfilled, (state, { payload }) => {
        state.role.unshift(payload.role);
        state.message = payload.message;
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteRole.fulfilled, (state, { payload }) => {
        state.role = state.role.filter((role) => role._id !== payload.role._id);
        state.message = payload.message;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRole.fulfilled, (state, { payload }) => {
        state.role[
          state.role.findIndex((role) => role._id == payload.role._id)
        ] = payload.role;
        state.message = payload.message;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllUser.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.users.unshift(payload.user);
        state.message = payload.message;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(
          (user) => user._id !== payload.user._id
        );
        state.message = payload.message;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.users[
          state.users.findIndex((user) => user._id == payload.user._id)
        ] = payload.user;
        state.message = payload.message;
      });
  },
});

export const selectUser = (state) => state.user;

export const { clearMsg } = userSlice.actions;

export default userSlice.reducer;
