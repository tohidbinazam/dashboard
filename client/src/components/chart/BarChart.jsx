import { Bar } from 'react-chartjs-2';

// eslint-disable-next-line react/prop-types
const BarChart = ({ data, options }) => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
