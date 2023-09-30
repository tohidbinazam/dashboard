import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth/authSlice';

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleExpand }) => {
  const { permissions } = useSelector(selectAuth);
  let location = useLocation();

  return (
    <div
      onMouseEnter={handleExpand}
      onMouseLeave={handleExpand}
      className='sidebar'
      id='sidebar'
    >
      <div className='sidebar-inner slimscroll'>
        <div id='sidebar-menu' className='sidebar-menu'>
          <ul>
            <li className='menu-title'>
              <span>Main</span>
            </li>
            {permissions?.some(
              (item) => item.slug == 'dashboard' && item.status
            ) && (
              <li className={location.pathname == '/' ? 'active' : undefined}>
                <Link to='/'>
                  <i className='fe fe-home'></i> <span>Dashboard</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'user' && item.status
            ) && (
              <li
                className={location.pathname == '/user' ? 'active' : undefined}
              >
                <Link to='/user'>
                  <i className='fe fe-users'></i> <span>User</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'role' && item.status
            ) && (
              <li
                className={location.pathname == '/role' ? 'active' : undefined}
              >
                <Link to='/role'>
                  <i className='fa fa-key'></i>
                  <span>Role</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'permission' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/permission' ? 'active' : undefined
                }
              >
                <Link to='/permission'>
                  <i className='fa fa-check-square-o'></i>
                  <span>Permission</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'bar-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/bar-chart' ? 'active' : undefined
                }
              >
                <Link to='/bar-chart'>
                  <i className='fa fa-bar-chart'></i>
                  <span>Bar Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'area-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/area-chart' ? 'active' : undefined
                }
              >
                <Link to='/area-chart'>
                  <i className='fa fa-area-chart'></i>
                  <span>Area Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'line-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/line-chart' ? 'active' : undefined
                }
              >
                <Link to='/line-chart'>
                  <i className='fa fa-line-chart'></i> <span>Line Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'pie-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/pie-chart' ? 'active' : undefined
                }
              >
                <Link to='/pie-chart'>
                  <i className='fa fa-pie-chart'></i>
                  <span>Pie Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'doughnut-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/doughnut-chart' ? 'active' : undefined
                }
              >
                <Link to='/doughnut-chart'>
                  <i className='fa fa-circle-o-notch'></i>
                  <span>Doughnut Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'polar-area-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/polar-area-chart'
                    ? 'active'
                    : undefined
                }
              >
                <Link to='/polar-area-chart'>
                  <i className='fa fa-snowflake-o'></i>
                  <span>Polar Area Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'radar-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/radar-chart' ? 'active' : undefined
                }
              >
                <Link to='/radar-chart'>
                  <i className='fa fa-star-o'></i> <span>Radar Chart</span>
                </Link>
              </li>
            )}
            {permissions?.some(
              (item) => item.slug == 'stacked-bar-chart' && item.status
            ) && (
              <li
                className={
                  location.pathname == '/stacked-bar-chart'
                    ? 'active'
                    : undefined
                }
              >
                <Link to='/stacked-bar-chart'>
                  <i className='fa fa-stack-exchange'></i>{' '}
                  <span>Stacked Bar Chart</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
