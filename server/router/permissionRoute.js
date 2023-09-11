import express from 'express';
import {
  createPermission,
  deletePermissionById,
  getAllPermissions,
  getPermissionById,
  updatePermissionById,
} from '../controller/permissionController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.use(authMiddleware);

router.route('/').get(getAllPermissions).post(createPermission);
router
  .route('/:id')
  .get(getPermissionById)
  .delete(deletePermissionById)
  .patch(updatePermissionById);

export default router;
