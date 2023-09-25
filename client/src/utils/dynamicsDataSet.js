const dynamicsDataSet = (allData, data) => {
  const newData = [];
  const color = [
    '#ff638480',
    '#35a2eb80',
    '#ff9f4080',
    '#4bc0c080',
    '#ffcd5680',
  ];
  data.forEach((element, index) => {
    newData.push({
      label: element,
      data: allData.map((data) => data[element]),
      backgroundColor: color[index],
    });
  });
  return newData;
};

export default dynamicsDataSet;
