import asyncHandler from 'express-async-handler';
import Role from '../model/roleModel.js';

// Role create controller
export const createRole = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const findRole = await Role.findOne({ name });
  if (findRole) {
    return res.status(400).json({ message: 'Role already exists' });
  }
  // create and populate permissions key data
  const role_cr = await Role.create(req.body);
  const role = await Role.findById(role_cr._id).populate('permissions');

  res.status(201).json({ message: 'Role created successfully', role });
});

// Get all roles controller
export const getAllRoles = asyncHandler(async (req, res) => {
  const roles = await Role.find()
    .populate('permissions')
    .sort({ createdAt: -1 });
  res.status(200).json(roles);
});

// Get role by id controller
export const getRoleById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const role = await Role.findById(id);
  if (!role) {
    res.status(404);
    throw new Error('Role not found');
  }

  res.status(200).json({ role });
});

// Delete role by id controller
export const deleteRoleById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const role = await Role.findByIdAndDelete(id);
  if (!role) {
    res.status(404);
    throw new Error('Role not found');
  }

  res.status(200).json({ message: 'Role deleted successfully', role });
});

// Update role by id controller
export const updateRoleById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const role = await Role.findByIdAndUpdate(id, req.body, {
    new: true,
  }).populate('permissions');

  if (!role) {
    res.status(404);
    throw new Error('Role not found');
  }

  if (name) {
    role.slug = role.makeSlug();
    await role.save();
  }
  res.status(200).json({ message: 'Role updated successfully', role });
});
