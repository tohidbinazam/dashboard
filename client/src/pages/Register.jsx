import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo-white.png';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/auth/authApiSlice';
import { toast } from 'react-toastify';
import { clearMsg } from '../features/auth/authSlice';
import { useEffect } from 'react';

const Register = () => {
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { input, handleInputChange } = useInput({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { c_password, ...rest } = input;

    if (input.password !== c_password) {
      return toast.error('Password does not match');
    }
    dispatch(registerUser(rest));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMsg());
      navigate('/');
    }

    if (error) {
      toast.error(error);
      dispatch(clearMsg());
    }
  }, [dispatch, error, message, navigate]);

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
                <h1>Register</h1>
                <p className='account-subtitle'>Access to our dashboard</p>

                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Name'
                      name='name'
                      value={input.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Email'
                      name='email'
                      value={input.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={input.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Confirm Password'
                      name='c_password'
                      value={input.c_password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group mb-0'>
                    <button className='btn btn-primary w-100' type='submit'>
                      Register
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

export default Register;
