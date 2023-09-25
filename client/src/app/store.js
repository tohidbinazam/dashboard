import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import userSlice from '../features/user/userSlice';
import dataSlice from '../features/data/dataSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    data: dataSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
