import Layout from '../components/Layout';
import AllFilter from '../pages/AllFilter';
import Country from '../pages/Country';
import Dashboard from '../pages/Dashboard';
import Permission from '../pages/Permission';
import Role from '../pages/Role';
import User from '../pages/User';
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
          {
            path: '/permission',
            element: <Permission />,
          },
          {
            path: '/role',
            element: <Role />,
          },
          {
            path: '/country',
            element: <Country />,
          },
          {
            path: '/allFilter',
            element: <AllFilter />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
