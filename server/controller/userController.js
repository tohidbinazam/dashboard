import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';

// User create controller
export const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const findUser = await User.findOne({ email });
  if (findUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = await User.create({ ...req.body });
  const user = newUser.removePass();
  res.status(201).json({ message: 'User created successfully', user });
});

// Get all users controller
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// Get user by id controller
export const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({ user });
});

// Delete user by id controller
export const deleteUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await User.findByIdAndDelete(id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({ message: 'User deleted successfully', user });
});

// Update user by id controller
export const updateUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const data = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!data) {
    res.status(404);
    throw new Error('User not found');
  }
  const user = data.removePass();
  res.status(200).json({ message: 'User updated successfully', user });
});
