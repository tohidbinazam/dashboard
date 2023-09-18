import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { me } from './features/auth/authApiSlice';
import { addToken } from './features/auth/authSlice';
import { useEffect } from 'react';
import {
  getAllPermission,
  getAllRole,
  getAllUser,
} from './features/user/userApiSlice';

function App() {
  const dispatch = useDispatch();
  const cookie = Cookies.get('token');

  if (cookie) {
    dispatch(addToken());
    dispatch(me());
  }
  useEffect(() => {
    if (cookie) {
      dispatch(getAllUser());
      dispatch(getAllPermission());
      dispatch(getAllRole());
    }
  }, [cookie, dispatch]);

  return (
    <>
      <ToastContainer theme='dark' />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
