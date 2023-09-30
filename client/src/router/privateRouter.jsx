import Layout from '../components/Layout';
import AreaChart from '../pages/AreaChart';
import Dashboard from '../pages/Dashboard';
import LineChart from '../pages/LineChart';
import Permission from '../pages/Permission';
import Role from '../pages/Role';
import User from '../pages/User';
import PrivateGard from './gard/PrivateGard';
import BarChart from '../pages/BarChart';
import PieChart from '../pages/PieChart';
import DoughnutChart from '../pages/DoughnutChart';
import PolarChart from '../pages/PolarChart';
import RadarChart from '../pages/RadarChart';
import StackedBarChart from '../pages/StackedBarChart';

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
            path: '/bar-chart',
            element: <BarChart />,
          },
          {
            path: '/area-chart',
            element: <AreaChart />,
          },
          {
            path: '/line-chart',
            element: <LineChart />,
          },
          {
            path: '/pie-chart',
            element: <PieChart />,
          },
          {
            path: '/doughnut-chart',
            element: <DoughnutChart />,
          },
          {
            path: '/polar-area-chart',
            element: <PolarChart />,
          },
          {
            path: '/radar-chart',
            element: <RadarChart />,
          },
          {
            path: '/stacked-bar-chart',
            element: <StackedBarChart />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
