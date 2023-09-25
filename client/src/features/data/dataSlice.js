import { createSlice } from '@reduxjs/toolkit';
import { getAllData } from './dataApiSlice';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    allData: null,
    totalData: null,
    defaultData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setDefaultData: (state, { payload }) => {
      state.defaultData = payload;
    },
    clearTotalData: (state) => {
      state.totalData = state.defaultData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllData.fulfilled, (state, { payload }) => {
        state.allData = payload.data;
        state.totalData = payload.totalData;
        state.loading = false;
      });
  },
});

export const selectData = (state) => state.data;

export const { setDefaultData, clearTotalData } = dataSlice.actions;

export default dataSlice.reducer;
