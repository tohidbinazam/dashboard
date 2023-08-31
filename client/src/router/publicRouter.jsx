import ForgotPass from '../pages/ForgotPass';
import LOgin from '../pages/LOgin';
import Register from '../pages/Register';
import PublicGard from './gard/PublicGard';

const PublicRouter = [
  {
    element: <PublicGard />,
    children: [
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
    ],
  },
];

export default PublicRouter;
