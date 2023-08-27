import express from 'express';
import {
  accessToken,
  loginUser,
  registerUser,
} from '../controller/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/accessToken').get(authMiddleware, accessToken);

export default router;
