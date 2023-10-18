import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { getAllPermission, getAllRole, getAllUser } from '../user/userApiSlice';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data) => {
    try {
      const res = await api.post('/auth/register', data);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data, { dispatch }) => {
    try {
      const res = await api.post('/auth/login', data);
      if (res.data) {
        dispatch(getAllUser());
        dispatch(getAllPermission());
        dispatch(getAllRole());
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const me = createAsyncThunk('auth/me', async () => {
  try {
    const res = await api.get('/auth/me');
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const userLogout = createAsyncThunk('auth/userLogout', async () => {
  try {
    const res = await api.get('/auth/logout');
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
