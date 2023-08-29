import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../model/userModel.js';
import { generateToken } from '../utility/manageToken.js';

export const register = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const check = await User.findOne({ email });
  if (check) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const data = await User.create(req.body);
  const user = data.toJSON();
  res.status(201).json({ message: 'User Registration Done', user });
});

// Login controller
export const login = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const data = await User.findOne({ email });
  if (!data || !data.matchPassword(req.body.password)) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = generateToken(data._id, data.isAdmin, '365d');
  const user = data.toJSON();

  res
    .cookie('token', token, {
      maxAge: 12 * 30 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production' ? true : false,
    })
    .status(200)
    .json({ message: 'Login successfully', user });
});

// User logout
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token').status(200).json({ message: 'Logout successfully' });
});

export const me = asyncHandler(async (req, res) => {
  const { id } = req.data;
  const user = await User.findById(id).select('-password');
  res.status(200).json({ user });
});

// this controller is used to create accessToken for access single user data
export const accessToken = asyncHandler(async (req, res) => {
  const decoded = req.data;
  const user = await User.findById(decoded.id).select('-password');
  if (!user) {
    res.status(401);
    throw new Error('You are not authorized');
  }
  const accessToken = generateToken(user._id, user.isAdmin, 90);
  res
    .cookie('accessToken', accessToken, {
      maxAge: 1.5 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production' ? true : false,
    })
    .status(200)
    .json({ user, accessToken });
});
