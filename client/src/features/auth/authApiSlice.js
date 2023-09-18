import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllPermission, getAllRole, getAllUser } from '../user/userApiSlice';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:5050/api/v1/auth/register',
        data
      );
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
      const res = await axios.post(
        'http://localhost:5050/api/v1/auth/login',
        data,
        {
          withCredentials: true,
        }
      );
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
    const res = await axios.get('http://localhost:5050/api/v1/auth/me', {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const userLogout = createAsyncThunk('auth/userLogout', async () => {
  try {
    const res = await axios.get('http://localhost:5050/api/v1/auth/logout', {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
