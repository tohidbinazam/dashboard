import express from 'express';
import { login, me, register } from '../controller/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(authMiddleware, me);

export default router;
