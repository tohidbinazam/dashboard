import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
