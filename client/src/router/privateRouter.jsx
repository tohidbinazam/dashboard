import Layout from '../components/Layout';
import Dashboard from '../components/dashboard_component/Dashboard';
import User from '../components/dashboard_component/User';
import PrivateGard from './gard/PrivateGard';

const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Dashboard />,
          },
          {
            path: '/user',
            element: <User />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
