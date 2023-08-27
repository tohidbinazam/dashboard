import express from 'express';
import { getAllUsers, getUserById } from '../controller/userController.js';
import authMiddleware, {
  accessMiddleware,
} from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/').get(getAllUsers);
router.route('/:id').get(accessMiddleware, getUserById);

export default router;
