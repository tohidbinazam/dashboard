import ForgotPass from '../pages/ForgotPass';
import LOgin from '../pages/LOgin';
import Register from '../pages/Register';

const PublicRouter = [
  {
    path: '/login',
    element: <LOgin />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot',
    element: <ForgotPass />,
  },
];

export default PublicRouter;
