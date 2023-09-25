import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-white.png';
import useInput from '../hooks/useInput';
import { toast } from 'react-toastify';
import { loginUser } from '../features/auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearMsg } from '../features/auth/authSlice';

const LOgin = () => {
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.auth);

  const { input, inputChange } = useInput({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      return toast.error('Please fill all the fields');
    }
    dispatch(loginUser(input));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearMsg());
    }
  }, [dispatch, error, message]);

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
                <h1>Login</h1>
                <p className='account-subtitle'>Access to our dashboard</p>

                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Email'
                      name='email'
                      value={input.email}
                      onChange={inputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={input.password}
                      onChange={inputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-primary w-100' type='submit'>
                      Login
                    </button>
                  </div>
                </form>

                <div className='login-or'>
                  <span className='or-line'></span>
                  <span className='span-or'>or</span>
                </div>

                <div className='text-center forgotpass'>
                  <Link to='/forgot'>Forgot Password?</Link>
                </div>

                {/* <div className='text-center dont-have'>
                  Don’t have an account? <Link to='/register'>Register</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOgin;
