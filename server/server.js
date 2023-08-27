import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoDB from './config/mongoDB.js';
import authRoute from './router/authRoute.js';
import userRoute from './router/userRoute.js';
import errorHandler from './utility/errorHandler.js';

dotenv.config();
mongoDB();

const port = process.env.PORT || 5050;

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
