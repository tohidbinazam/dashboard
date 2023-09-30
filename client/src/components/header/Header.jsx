import logo from '../../assets/img/logo.png';
import smallLogo from '../../assets/img/logo-small.png';
import photo from '../../assets/img/profiles/avatar-01.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../features/auth/authApiSlice';

// eslint-disable-next-line react/prop-types
const Header = ({ handleNav }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };

  return (
    <div className='header'>
      <div className='header-left'>
        <a href='index.html' className='logo'>
          <img src={logo} alt='Logo' />
        </a>
        <a href='index.html' className='logo logo-small'>
          <img src={smallLogo} alt='Logo' width='30' height='30' />
        </a>
      </div>

      <a href='#' onClick={handleNav} id='toggle_btn'>
        <i className='fe fe-text-align-left'></i>
      </a>

      <ul className='nav user-menu'>
        <li className='nav-item dropdown has-arrow'>
          <a
            href='#'
            className='dropdown-toggle nav-link'
            type='button'
            data-bs-toggle='dropdown'
          >
            <span className='user-img'>
              <img
                className='rounded-circle'
                src={photo}
                width='31'
                alt='Ryan Taylor'
              />
            </span>
          </a>
          <div className='dropdown-menu'>
            <div className='user-header dropdown-item'>
              <div className='avatar avatar-sm'>
                <img
                  src={photo}
                  alt='User Image'
                  className='avatar-img rounded-circle'
                />
              </div>
              <div className='user-text'>
                <h6>{user?.name}</h6>
                <p className='text-muted mb-0'>{user?.role.name}</p>
              </div>
            </div>
            <a className='dropdown-item' href='#'>
              My Profile
            </a>
            <a className='dropdown-item' href='#'>
              Settings
            </a>
            <a className='dropdown-item' onClick={handleLogout} to='/login'>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
