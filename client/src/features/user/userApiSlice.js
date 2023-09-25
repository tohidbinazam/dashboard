import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPermission = createAsyncThunk(
  'user/getAllPermission',
  async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/permission', {
        withCredentials: true,
      });
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
      const res = await axios.post(
        'http://localhost:5000/api/v1/permission',
        data,
        {
          withCredentials: true,
        }
      );
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
      const res = await axios.delete(
        `http://localhost:5000/api/v1/permission/${id}`,
        {
          withCredentials: true,
        }
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
      const res = await axios.patch(
        `http://localhost:5000/api/v1/permission/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const getAllRole = createAsyncThunk('user/getAllRole', async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/role', {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const addRole = createAsyncThunk('user/addRole', async (data) => {
  try {
    const res = await axios.post('http://localhost:5000/api/v1/role', data, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteRole = createAsyncThunk('user/deleteRole', async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/role/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const updateRole = createAsyncThunk(
  'user/updateRole',
  async ({ id, data }) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/v1/role/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const getAllUser = createAsyncThunk('user/getAllUser', async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/user', {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const addUser = createAsyncThunk('user/addUser', async (data) => {
  try {
    const res = await axios.post('http://localhost:5000/api/v1/user', data, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/user/${id}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, data }) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/v1/user/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
