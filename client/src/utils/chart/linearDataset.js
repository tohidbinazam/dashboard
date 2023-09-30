const linearDataset = (allData, data, fill = false) => {
  const newData = [];
  const color = [
    'rgba(53, 162, 235, 0.5)',
    'rgb(255, 99, 132, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(255, 206, 86, 0.5)',
  ];
  const borderColor = [
    'rgb(53, 162, 235,1)',
    'rgb(255, 99, 132,1)',
    'rgb(255, 159, 64,1)',
    'rgb(75, 192, 192,1)',
    'rgba(255, 206, 86,1)',
  ];
  data.forEach((element, index) => {
    newData.push({
      fill: fill,
      label: element,
      data: allData.map((data) => data[element]),
      borderColor: borderColor[index],
      backgroundColor: color[index],
    });
  });
  return newData;
};

export default linearDataset;
