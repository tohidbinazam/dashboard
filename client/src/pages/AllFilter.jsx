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
import { clearTotalData, selectData } from '../features/data/dataSlice';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import useInput from '../hooks/useInput';
import { getAllData } from '../features/data/dataApiSlice';
import {
  region,
  country,
  sector,
  topic,
  pestle,
  end_year,
  data,
  label,
} from '../features/data/data';
import dynamicsDataSet from '../utils/dynamicsDataSet';

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

const AllFilter = () => {
  const { allData, totalData, loading } = useSelector(selectData);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  const [loadData, setLoadData, , clearData] = useInput({
    region,
    country,
    sector,
    topic,
    pestle,
    end_year,
    data,
    label,
  });

  const [input, , inputChange, clearFrom] = useInput({
    region: '',
    country: '',
    sector: '',
    topic: '',
    pestle: '',
    end_year: '',
  });

  const [chart, setChart, chartChange] = useInput({
    data: ['intensity', 'likelihood'],
    label: 'source',
  });

  const handleCheckbox = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setChart((prev) => ({
        ...prev,
        data: [...prev.data, value],
      }));
    } else {
      setChart((prev) => ({
        ...prev,
        data: prev.data.filter((item) => item !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputChange(e);
    dispatch(getAllData({ ...input, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    clearFrom();
    clearData();
    dispatch(clearTotalData());
  };

  const prepareChartData = (allData, chart, input) => {
    const data = {
      labels: allData.map((data) => data[chart.label]),
      datasets: dynamicsDataSet(allData, chart.data),
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `${input.topic} of the ${input.country} in the ${input.pestle} sector`,
        },
      },
    };
    setChartData(data);
    setChartOptions(options);
    return;
  };

  useEffect(() => {
    if (allData && allData.length > 0) {
      setLoadData(totalData);
      prepareChartData(allData, chart, input);
    } else {
      setChartData(null);
      setChartOptions(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allData, chart]);

  return (
    <div className='page-wrapper'>
      <div className='content container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <form>
                  <div className='row form-row'>
                    <div className='col-2 col-sm-2'>
                      <div className='form-group'>
                        <label>Region</label>
                        <select
                          name='region'
                          onChange={handleSubmit}
                          value={input.region}
                          className='form-control'
                        >
                          <option value=''>Select Region</option>
                          {typeof loadData.region === 'string' ? (
                            <option value={loadData.region}>
                              {loadData.region}
                            </option>
                          ) : (
                            loadData.region?.map((region) => (
                              <option key={region} value={region}>
                                {region}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                    <div className='col-2 col-sm-2'>
                      <div className='form-group'>
                        <label>Country</label>
                        <select
                          name='country'
                          onChange={handleSubmit}
                          value={input.country}
                          className='form-control'
                        >
                          <option value=''>Select Country</option>
                          {typeof loadData.country === 'string' ? (
                            <option value={loadData.country}>
                              {loadData.country}
                            </option>
                          ) : (
                            loadData.country?.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                    <div className='col-2 col-sm-2'>
                      <div className='form-group'>
                        <label>Sector</label>
                        <select
                          name='sector'
                          onChange={handleSubmit}
                          value={input.sector}
                          className='form-control'
                        >
                          <option value=''>Select Sector</option>
                          {typeof loadData.sector === 'string' ? (
                            <option value={loadData.sector}>
                              {loadData.sector}
                            </option>
                          ) : (
                            loadData.sector?.map((sector) => (
                              <option key={sector} value={sector}>
                                {sector}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                    <div className='col-2 col-sm-2'>
                      <div className='form-group'>
                        <label>Topic</label>
                        <select
                          name='topic'
                          onChange={handleSubmit}
                          value={input.topic}
                          className='form-control'
                        >
                          <option value=''>Select Topic</option>
                          {typeof loadData.topic === 'string' ? (
                            <option value={loadData.topic}>
                              {loadData.topic}
                            </option>
                          ) : (
                            loadData.topic?.map((topic) => (
                              <option key={topic} value={topic}>
                                {topic}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                    <div className='col-2 col-sm-2'>
                      <div className='form-group'>
                        <label>Pestle</label>
                        <select
                          name='pestle'
                          onChange={handleSubmit}
                          value={input.pestle}
                          className='form-control'
                        >
                          <option value=''>Select Pestle</option>
                          {typeof loadData.pestle === 'string' ? (
                            <option value={loadData.pestle}>
                              {loadData.pestle}
                            </option>
                          ) : (
                            loadData.pestle?.map((pestle) => (
                              <option key={pestle} value={pestle}>
                                {pestle}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                    <div className='col-2 col-sm-2'>
                      <div className='form-group'>
                        <label>End Year</label>
                        <select
                          name='end_year'
                          onChange={handleSubmit}
                          value={input.end_year}
                          className='form-control'
                        >
                          <option value=''>Select End Year</option>
                          {typeof loadData.end_year === 'string' ? (
                            <option value={loadData.end_year}>
                              {loadData.end_year}
                            </option>
                          ) : (
                            loadData.end_year?.map((end_year) => (
                              <option key={end_year} value={end_year}>
                                {end_year}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-6 col-sm-6'>
                      <div className='form-group'>
                        <button
                          type='button'
                          onClick={handleReset}
                          className='btn btn-secondary w-100'
                        >
                          Clear Selected Data
                        </button>
                      </div>
                    </div>
                    <div className='col-6 col-sm-6'>
                      <div className='form-group mt-2'>
                        <label className='me-3'>Chart Data |</label>
                        {data?.map((item, index) => (
                          <div
                            key={index}
                            className='form-check form-check-inline'
                          >
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value={item.slug}
                              id={index}
                              checked={chart.data?.includes(item.slug)}
                              onChange={handleCheckbox}
                            />
                            <label className='form-check-label' htmlFor={index}>
                              {item.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>

                <div className='row form-row'>
                  <div className='col-12 col-sm-12'>
                    <div className='form-group'>
                      <label className='me-3'>Chart Label |</label>
                      {label?.map((item) => (
                        <div
                          key={item.slug}
                          className='form-check form-check-inline'
                        >
                          <input
                            className='form-check-input'
                            type='radio'
                            name='label'
                            value={item.slug}
                            id={item.slug}
                            checked={chart.label == item.slug ? true : false}
                            onChange={chartChange}
                          />
                          <label
                            className='form-check-label'
                            htmlFor={item.slug}
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                {chartData ? (
                  <Bar options={chartOptions} data={chartData} />
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

export default AllFilter;
