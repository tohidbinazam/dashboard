import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPermission = createAsyncThunk(
  'user/getAllPermission',
  async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/v1/permission', {
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
        'http://localhost:5050/api/v1/permission',
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
        `http://localhost:5050/api/v1/permission/${id}`,
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
        `http://localhost:5050/api/v1/permission/${id}`,
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
