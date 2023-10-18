import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../utils/api';

export const getAllData = createAsyncThunk('user/getAllData', async (data) => {
  try {
    const res = await api.post('/data', data);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
