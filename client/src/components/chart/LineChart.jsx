import { Line } from 'react-chartjs-2';

// eslint-disable-next-line react/prop-types
const LineChart = ({ data, options }) => {
  return <Line options={options} data={data} />;
};

export default LineChart;
