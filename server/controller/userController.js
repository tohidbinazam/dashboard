import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ me: req.data.id, users });
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json({ user });
});
