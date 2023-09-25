import express from 'express';
import { getAllData, getFieldData } from '../controller/dataController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/').post(getAllData).get(getFieldData);

export default router;
