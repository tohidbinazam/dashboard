import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../features/data/dataSlice';
import BarChart from '../components/chart/BarChart';
import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Country = () => {
  const { allData, loading } = useSelector(selectData);
  const dispatch = useDispatch();

  const prepareChartData = (allData) => {
    return {
      labels: allData.map((data) => data.source),
      datasets: [
        {
          label: 'intensity',
          data: allData.map((data) => data.intensity),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'relevance',
          data: allData.map((data) => data.relevance),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  };

  const chartData = allData ? prepareChartData(allData) : null;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "United States of America's of Oil",
      },
    },
  };

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  return (
    <div className='page-wrapper'>
      <div className='content container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                {!loading && chartData ? (
                  <BarChart options={options} data={chartData} />
                ) : (
                  <div>{loading ? 'Loading...' : 'No data available.'}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
