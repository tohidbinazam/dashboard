import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import { generateToken } from '../utility/manageToken.js';

export const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const check = await User.findOne({ email });
  if (check) {
    res.status(400);
    throw new Error('Email already registered');
  }

  const user = await User.create(req.body);
  res.status(201).json({ user });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.matchPassword(password)) {
    res.status(400);
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user._id, user.isAdmin, '365d');

  res
    .cookie('token', token, {
      httpOnly: true,
      maxAge: 12 * 30 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production' ? true : false,
    })
    .status(200)
    .json({ user });
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
