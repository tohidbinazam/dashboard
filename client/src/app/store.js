import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import userSlice from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
