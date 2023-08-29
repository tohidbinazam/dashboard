import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { me } from './features/auth/authApiSlice';

function App() {
  const dispatch = useDispatch();
  const cookie = Cookies.get('token');

  if (cookie) {
    dispatch(me());
  }
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
