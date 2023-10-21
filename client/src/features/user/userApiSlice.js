import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../utils/api';

export const getAllPermission = createAsyncThunk(
  'user/getAllPermission',
  async () => {
    try {
      const res = await api.get('/permission');
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const addPermission = createAsyncThunk(
  'user/addPermission',
  async (data) => {
    try {
      const res = await api.post('/permission', data);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deletePermission = createAsyncThunk(
  'user/deletePermission',
  async (id) => {
    try {
      const res = await api.delete(`/permission/${id}`);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updatePermission = createAsyncThunk(
  'user/updatePermission',
  async ({ id, data }) => {
    try {
      const res = await api.patch(`/permission/${id}`, data);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const getAllRole = createAsyncThunk('user/getAllRole', async () => {
  try {
    const res = await api.get('/role');
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const addRole = createAsyncThunk('user/addRole', async (data) => {
  try {
    const res = await api.post('/role', data);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteRole = createAsyncThunk('user/deleteRole', async (id) => {
  try {
    const res = await api.delete(`/role/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const updateRole = createAsyncThunk(
  'user/updateRole',
  async ({ id, data }) => {
    try {
      const res = await api.patch(`/role/${id}`, data);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const getAllUser = createAsyncThunk('user/getAllUser', async () => {
  try {
    const res = await api.get('/user');
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const addUser = createAsyncThunk('user/addUser', async (data) => {
  try {
    const res = await api.post('/user', data);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
  try {
    const res = await api.delete(`/user/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, data }) => {
    try {
      const res = await api.patch(`/user/${id}`, data);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
