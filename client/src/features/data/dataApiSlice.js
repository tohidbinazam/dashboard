import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllData = createAsyncThunk('user/getAllData', async (data) => {
  try {
    const res = await axios.post(
      'https://dashboard-oubj.onrender.com/api/v1/data',
      data,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
