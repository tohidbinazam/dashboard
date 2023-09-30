import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import { selectAuth } from '../features/auth/authSlice';

const Dashboard = () => {
  const { users, role, permission } = useSelector(selectUser);
  const { user } = useSelector(selectAuth);
  const activeUser = users?.filter((user) => user.status === true);

  return (
    <>
      <div className='page-wrapper'>
        <div className='content container-fluid'>
          <div className='page-header'>
            <div className='row'>
              <div className='col-sm-12'>
                <h3 className='page-title'>Welcome {user?.role.name}!</h3>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item active'>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-3 col-sm-6 col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='dash-widget-header'>
                    <span className='dash-widget-icon text-primary border-primary'>
                      <i className='fe fe-users'></i>
                    </span>
                    <div className='dash-count'>
                      <h3>{users?.length}</h3>
                    </div>
                  </div>
                  <div className='dash-widget-info'>
                    <h6 className='text-muted'>User</h6>
                    <div className='progress progress-sm'>
                      <div className='progress-bar bg-primary w-100'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='dash-widget-header'>
                    <span className='dash-widget-icon text-success'>
                      <i className='fe fe-credit-card'></i>
                    </span>
                    <div className='dash-count'>
                      <h3>{role?.length}</h3>
                    </div>
                  </div>
                  <div className='dash-widget-info'>
                    <h6 className='text-muted'>Role</h6>
                    <div className='progress progress-sm'>
                      <div className='progress-bar bg-success w-100'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='dash-widget-header'>
                    <span className='dash-widget-icon text-danger border-danger'>
                      <i className='fe fe-money'></i>
                    </span>
                    <div className='dash-count'>
                      <h3>{permission?.length}</h3>
                    </div>
                  </div>
                  <div className='dash-widget-info'>
                    <h6 className='text-muted'>Permission</h6>
                    <div className='progress progress-sm'>
                      <div className='progress-bar bg-danger w-100'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-6 col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='dash-widget-header'>
                    <span className='dash-widget-icon text-warning border-warning'>
                      <i className='fe fe-folder'></i>
                    </span>
                    <div className='dash-count'>
                      <h3>{activeUser?.length}</h3>
                    </div>
                  </div>
                  <div className='dash-widget-info'>
                    <h6 className='text-muted'>Active User</h6>
                    <div className='progress progress-sm'>
                      <div className='progress-bar bg-warning w-100'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
