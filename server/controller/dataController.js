import expressAsyncHandler from 'express-async-handler';
import Data from '../model/dataModel.js';

// Get all roles controller
export const getAllData = expressAsyncHandler(async (req, res) => {
  const find = req.body;

  const keysWithData = {};
  const keysWithoutData = [];

  for (const key in find) {
    if (find[key] !== '') {
      keysWithData[key] = find[key];
    } else {
      keysWithoutData.push(key);
    }
  }

  const data = await Data.find(keysWithData);

  const totalData = { ...keysWithData };
  keysWithoutData.map((key) => {
    totalData[key] = [];
    data.map((item) => {
      if (
        !totalData[key].includes(item[key]) &&
        item[key] !== '' &&
        item[key] !== null
      ) {
        totalData[key].push(item[key]);
      }
    });
  });

  res.status(200).json({ data, totalData });
});

export const getFieldData = expressAsyncHandler(async (req, res) => {
  const data = await Data.find();

  const newData = [];
  data.map((item) => {
    if (
      !newData.includes(item.source) &&
      item.source !== '' &&
      item.source !== null &&
      item.source !== 'null'
    ) {
      newData.push(item.source);
    }
  });

  // const dates = await Data.find({ source: newData[5] });

  res.status(200).json({ source: newData });
});
