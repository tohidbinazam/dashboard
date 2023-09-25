import { Schema, model } from 'mongoose';

const dataModel = Schema({
  title: {
    type: String,
  },
  source: {
    type: String,
  },
  pestle: {
    type: String,
  },
  country: {
    type: String,
  },
  published: {
    type: String,
  },
  relevance: {
    type: Number,
  },
  impact: {
    type: Number,
  },
  start_year: {
    type: Number,
  },
  end_year: {
    type: Number,
  },
  intensity: {
    type: Number,
  },
  likelihood: {
    type: Number,
  },
  added: {
    type: String,
  },
  region: {
    type: String,
  },
  url: {
    type: String,
  },
  insight: {
    type: String,
  },
  topic: {
    type: String,
  },
  sector: {
    type: String,
  },
});

export default model('Data', dataModel);
