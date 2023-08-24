import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;
