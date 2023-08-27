import express from 'express';
import { login, register } from '../controller/authController.js';
// import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
// router.route('/accessToken').get(authMiddleware, accessToken);

export default router;
