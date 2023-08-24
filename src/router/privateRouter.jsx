import Layout from '../components/Layout';
import Dashboard from '../components/dashboard_component/Dashboard';
import User from '../components/dashboard_component/User';

const privateRouter = [
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
];

export default privateRouter;
