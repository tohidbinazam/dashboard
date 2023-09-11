import express from 'express';
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/').get(getAllUsers).post(createUser);
router
  .route('/:id')
  .get(getUserById)
  .delete(deleteUserById)
  .patch(updateUserById);

export default router;
