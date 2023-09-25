import express from 'express';
import {
  createRole,
  deleteRoleById,
  getAllRoles,
  getRoleById,
  updateRoleById,
} from '../controller/roleController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/').get(getAllRoles).post(createRole);
router
  .route('/:id')
  .get(getRoleById)
  .delete(deleteRoleById)
  .patch(updateRoleById);

export default router;
