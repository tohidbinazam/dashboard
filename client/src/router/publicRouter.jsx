import ForgotPass from '../pages/ForgotPass';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PublicGard from './gard/PublicGard';

const PublicRouter = [
  {
    element: <PublicGard />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/forgot',
        element: <ForgotPass />,
      },
    ],
  },
];

export default PublicRouter;
