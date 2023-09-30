import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { clearMsg } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Layout = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.auth);

  const [nav, setNav] = useState(false);
  const [expand, setExpand] = useState(false);

  if (message) {
    toast.success(message);
    dispatch(clearMsg());
  }

  const handleNav = () => {
    setNav(!nav);
  };
  const handleExpand = () => {
    if (nav) {
      setExpand(!expand);
    }
  };

  return (
    <>
      <div className={`${nav && 'mini-sidebar'} ${expand && 'expand-menu'}`}>
        {/* pass the  handleNav function in Header component*/}
        <Header handleNav={handleNav} />
        <Navbar handleExpand={handleExpand} />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
