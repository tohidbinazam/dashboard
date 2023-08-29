import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../assets/img/logo.png';
import smallLogo from '../../assets/img/logo-small.png';
import photo from '../../assets/img/profiles/avatar-02.jpg';
import doctor from '../../assets/img/doctors/doctor-thumb-02.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove('token');
    dispatch(logout());
    navigate('/login');
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

      <a href='' id='toggle_btn'>
        <i className='fe fe-text-align-left'></i>
      </a>
      <div className='top-nav-search'>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search here'
          />
          <button className='btn' type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>

      <a className='mobile_btn' id='mobile_btn'>
        <i className='fa fa-bars'></i>
      </a>

      <ul className='nav user-menu'>
        <li className='nav-item dropdown noti-dropdown'>
          <a
            href='#'
            className='dropdown-toggle nav-link'
            data-bs-toggle='dropdown'
          >
            <i className='fe fe-bell'></i>
            <span className='badge rounded-pill'>3</span>
          </a>
          <div className='dropdown-menu notifications'>
            <div className='topnav-dropdown-header'>
              <span className='notification-title'>Notifications</span>
              <a href='javascript:void(0)' className='clear-noti'>
                Clear All
              </a>
            </div>
            <div className='noti-content'>
              <ul className='notification-list'>
                <li className='notification-message'>
                  <a href='#'>
                    <div className='media d-flex'>
                      <span className='avatar avatar-sm flex-shrink-0'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User Image'
                          src={doctor}
                        />
                      </span>
                      <div className='media-body flex-grow-1'>
                        <p className='noti-details'>
                          <span className='noti-title'>Dr. Ruby Perrin</span>
                          Schedule
                          <span className='noti-title'>her appointment</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='notification-message'>
                  <a href='#'>
                    <div className='media d-flex'>
                      <span className='avatar avatar-sm flex-shrink-0'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User Image'
                          src={doctor}
                        />
                      </span>
                      <div className='media-body flex-grow-1'>
                        <p className='noti-details'>
                          <span className='noti-title'>Charlene Reed</span> has
                          booked her appointment to
                          <span className='noti-title'>Dr. Ruby Perrin</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='notification-message'>
                  <a href='#'>
                    <div className='media d-flex'>
                      <span className='avatar avatar-sm flex-shrink-0'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User Image'
                          src={doctor}
                        />
                      </span>
                      <div className='media-body flex-grow-1'>
                        <p className='noti-details'>
                          <span className='noti-title'>Travis Trimble</span>{' '}
                          sent a amount of $210 for his
                          <span className='noti-title'>appointment</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='notification-message'>
                  <a href='#'>
                    <div className='media d-flex'>
                      <span className='avatar avatar-sm flex-shrink-0'>
                        <img
                          className='avatar-img rounded-circle'
                          alt='User Image'
                          src={doctor}
                        />
                      </span>
                      <div className='media-body flex-grow-1'>
                        <p className='noti-details'>
                          <span className='noti-title'>Carl Kelly</span> send a
                          message
                          <span className='noti-title'> to his doctor</span>
                        </p>
                        <p className='noti-time'>
                          <span className='notification-time'>12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='topnav-dropdown-footer'>
              <a href='#'>View all Notifications</a>
            </div>
          </div>
        </li>

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
                <h6>{user && user.name}</h6>
                <p className='text-muted mb-0'>Administrator</p>
              </div>
            </div>
            <a className='dropdown-item' href='profile.html'>
              My Profile
            </a>
            <a className='dropdown-item' href='settings.html'>
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
