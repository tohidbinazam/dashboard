import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { me } from './features/auth/authApiSlice';
import { addToken } from './features/auth/authSlice';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import {
  getAllPermission,
  getAllRole,
  getAllUser,
} from './features/user/userApiSlice';
import {
  region,
  country,
  sector,
  topic,
  pestle,
  end_year,
  data,
  label,
} from './features/data/data';
import { setDefaultData } from './features/data/dataSlice';

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
      dispatch(
        setDefaultData({
          region,
          country,
          sector,
          topic,
          pestle,
          end_year,
          data,
          label,
        })
      );
    }
  }, [cookie, dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme='dark' />
    </>
  );
}

export default App;
