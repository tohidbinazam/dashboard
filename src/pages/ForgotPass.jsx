import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-white.png';

const ForgotPass = () => {
  return (
    <div className='main-wrapper login-body'>
      <div className='login-wrapper'>
        <div className='container'>
          <div className='loginbox'>
            <div className='login-left'>
              <img className='img-fluid' src={logo} alt='Logo' />
            </div>
            <div className='login-right'>
              <div className='login-right-wrap'>
                <h1>Forgot Password</h1>
                <p className='account-subtitle'>Access to our dashboard</p>

                <form action='https://doccure.dreamguystech.com/html/template/admin/index.html'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-primary w-100' type='submit'>
                      Send Mail
                    </button>
                  </div>
                </form>

                <div className='login-or'>
                  <span className='or-line'></span>
                  <span className='span-or'>or</span>
                </div>

                <div className='text-center dont-have'>
                  Already have an account? <Link to='/login'>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
