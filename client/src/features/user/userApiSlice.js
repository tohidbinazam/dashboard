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
      const res = await api.delete(
        `https://dashboard-oubj.onrender.com/api/v1/permission/${id}`
      );
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
      const res = await api.patch(
        `https://dashboard-oubj.onrender.com/api/v1/permission/${id}`,
        data
      );
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
    const res = await api.delete(
      `https://dashboard-oubj.onrender.com/api/v1/role/${id}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const updateRole = createAsyncThunk(
  'user/updateRole',
  async ({ id, data }) => {
    try {
      const res = await api.patch(
        `https://dashboard-oubj.onrender.com/api/v1/role/${id}`,
        data
      );
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
    const res = await api.delete(
      `https://dashboard-oubj.onrender.com/api/v1/user/${id}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, data }) => {
    try {
      const res = await api.patch(
        `https://dashboard-oubj.onrender.com/api/v1/user/${id}`,
        data
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
