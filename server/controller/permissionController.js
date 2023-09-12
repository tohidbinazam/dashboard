import asyncHandler from 'express-async-handler';
import Permission from '../model/permissionModel.js';

// Permission create controller
export const createPermission = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const findPermission = await Permission.findOne({ name });
  if (findPermission) {
    return res.status(400).json({ message: 'Permission already exists' });
  }

  const permission = await Permission.create({ ...req.body });
  res
    .status(201)
    .json({ message: 'Permission created successfully', permission });
});

// Get all permissions controller
export const getAllPermissions = asyncHandler(async (req, res) => {
  // find all permissions and reverse the array to get the latest permission first
  const permission = await Permission.find({}).sort({ createdAt: -1 });
  res.status(200).json(permission);
});

// Get permission by id controller
export const getPermissionById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const permission = await Permission.findById(id);
  if (!permission) {
    res.status(404);
    throw new Error('Permission not found');
  }

  res.status(200).json({ permission });
});

// Delete permission by id controller
export const deletePermissionById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const permission = await Permission.findByIdAndDelete(id);
  if (!permission) {
    res.status(404);
    throw new Error('Permission not found');
  }

  res
    .status(200)
    .json({ message: 'Permission deleted successfully', permission });
});

// Update permission by id controller
export const updatePermissionById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const permission = await Permission.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!permission) {
    res.status(404);
    throw new Error('Permission not found');
  }

  if (name) {
    permission.slug = permission.makeSlug();
    await permission.save();
  }

  res
    .status(200)
    .json({ message: 'Permission updated successfully', permission });
});
