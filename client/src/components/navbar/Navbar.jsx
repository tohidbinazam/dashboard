import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth/authSlice';

const Navbar = () => {
  const { permissions } = useSelector(selectAuth);
  let location = useLocation();

  return (
    <div className='sidebar' id='sidebar'>
      <div className='sidebar-inner slimscroll'>
        <div id='sidebar-menu' className='sidebar-menu'>
          <ul>
            <li className='menu-title'>
              <span>Main</span>
            </li>
            {/* {permissions?.map((permission) => (
              <li
                key={permission._id}
                className={
                  location.pathname == `/${permission.slug}` && 'active'
                }
              >
                <Link to={`/${permission.slug}`}>
                  <i className='fe fe-home'></i> <span>{permission.name}</span>
                </Link>
              </li>
            ))} */}
            {permissions?.some((item) => item.name == 'Dashboard') && (
              <li className={location.pathname == '/' ? 'active' : undefined}>
                <Link to='/'>
                  <i className='fe fe-home'></i> <span>Dashboard</span>
                </Link>
              </li>
            )}
            {permissions?.some((item) => item.name == 'User') && (
              <li
                className={location.pathname == '/user' ? 'active' : undefined}
              >
                <Link to='/user'>
                  <i className='fe fe-users'></i> <span>User</span>
                </Link>
              </li>
            )}
            {permissions?.some((item) => item.name == 'Role') && (
              <li
                className={location.pathname == '/role' ? 'active' : undefined}
              >
                <Link to='/role'>
                  <i className='fe fe-user-plus'></i> <span>Role</span>
                </Link>
              </li>
            )}
            {permissions?.some((item) => item.name == 'Permission') && (
              <li
                className={
                  location.pathname == '/permission' ? 'active' : undefined
                }
              >
                <Link to='/permission'>
                  <i className='fe fe-layout'></i> <span>Permission</span>
                </Link>
              </li>
            )}
            {permissions?.some((item) => item.name == 'Country') && (
              <li
                className={
                  location.pathname == '/country' ? 'active' : undefined
                }
              >
                <Link to='/country'>
                  <i className='fe fe-layout'></i> <span>Country</span>
                </Link>
              </li>
            )}
            {permissions?.some((item) => item.name == 'AllFilter') && (
              <li
                className={
                  location.pathname == '/allFilter' ? 'active' : undefined
                }
              >
                <Link to='/allFilter'>
                  <i className='fe fe-layout'></i> <span>AllFilter</span>
                </Link>
              </li>
            )}

            {/* <li>
              <a href='patient-list.html'>
                <i className='fe fe-user'></i> <span>Patients</span>
              </a>
            </li>
            <li>
              <a href='reviews.html'>
                <i className='fe fe-star-o'></i> <span>Reviews</span>
              </a>
            </li>
            <li>
              <a href='transactions-list.html'>
                <i className='fe fe-activity'></i> <span>Transactions</span>
              </a>
            </li>
            <li>
              <a href='settings.html'>
                <i className='fe fe-vector'></i> <span>Settings</span>
              </a>
            </li>
            <li className='submenu'>
              <a href='#'>
                <i className='fe fe-document'></i> <span> Reports</span>
                <span className='menu-arrow'></span>
              </a>
              <ul style={{ display: 'none' }}>
                <li>
                  <a href='invoice-report.html'>Invoice Reports</a>
                </li>
              </ul>
            </li>
            <li className='menu-title'>
              <span>Pages</span>
            </li>
            <li>
              <a href='profile.html'>
                <i className='fe fe-user-plus'></i> <span>Profile</span>
              </a>
            </li>
            <li className='submenu'>
              <a href='#'>
                <i className='fe fe-document'></i> <span> Authentication </span>
                <span className='menu-arrow'></span>
              </a>
              <ul style={{ display: 'none' }}>
                <li>
                  <a href='login.html'> Login </a>
                </li>
                <li>
                  <a href='register.html'> Register </a>
                </li>
                <li>
                  <a href='forgot-password.html'> Forgot Password </a>
                </li>
                <li>
                  <a href='lock-screen.html'> Lock Screen </a>
                </li>
              </ul>
            </li>
            <li className='submenu'>
              <a href='#'>
                <i className='fe fe-warning'></i> <span> Error Pages </span>
                <span className='menu-arrow'></span>
              </a>
              <ul style={{ display: 'none' }}>
                <li>
                  <a href='error-404.html'>404 Error </a>
                </li>
                <li>
                  <a href='error-500.html'>500 Error </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='blank-page.html'>
                <i className='fe fe-file'></i> <span>Blank Page</span>
              </a>
            </li>
            <li className='menu-title'>
              <span>UI Interface</span>
            </li>
            <li>
              <a href='components.html'>
                <i className='fe fe-vector'></i> <span>Components</span>
              </a>
            </li>
            <li className='submenu'>
              <a href='#'>
                <i className='fe fe-layout'></i> <span> Forms </span>
                <span className='menu-arrow'></span>
              </a>
              <ul style={{ display: 'none' }}>
                <li>
                  <a href='form-basic-inputs.html'>Basic Inputs </a>
                </li>
                <li>
                  <a href='form-input-groups.html'>Input Groups </a>
                </li>
                <li>
                  <a href='form-horizontal.html'>Horizontal Form </a>
                </li>
                <li>
                  <a href='form-vertical.html'> Vertical Form </a>
                </li>
                <li>
                  <a href='form-mask.html'> Form Mask </a>
                </li>
                <li>
                  <a href='form-validation.html'> Form Validation </a>
                </li>
              </ul>
            </li>
            <li className='submenu'>
              <a href='#'>
                <i className='fe fe-table'></i> <span> Tables </span>
                <span className='menu-arrow'></span>
              </a>
              <ul style={{ display: 'none' }}>
                <li>
                  <a href='tables-basic.html'>Basic Tables </a>
                </li>
                <li>
                  <a href='data-tables.html'>Data Table </a>
                </li>
              </ul>
            </li>
            <li className='submenu'>
              <a href=''>
                <i className='fe fe-code'></i> <span>Multi Level</span>
                <span className='menu-arrow'></span>
              </a>
              <ul style={{ display: 'none' }}>
                <li className='submenu'>
                  <a href=''>
                    <span>Level 1</span> <span className='menu-arrow'></span>
                  </a>
                  <ul style={{ display: 'none' }}>
                    <li>
                      <a href=''>
                        <span>Level 2</span>
                      </a>
                    </li>
                    <li className='submenu'>
                      <a href=''>
                        <span> Level 2</span>
                        <span className='menu-arrow'></span>
                      </a>
                      <ul style={{ display: 'none' }}>
                        <li>
                          <a href=''>Level 3</a>
                        </li>
                        <li>
                          <a href=''>Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href=''>
                        <span>Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=''>
                    <span>Level 1</span>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
