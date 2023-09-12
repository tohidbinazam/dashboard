import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { clearMsg } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Layout = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.auth);

  if (message) {
    toast.success(message);
    dispatch(clearMsg());
  }
  return (
    <>
      <Header />
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;
