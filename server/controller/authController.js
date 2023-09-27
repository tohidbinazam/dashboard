import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import { generateToken } from '../utility/manageToken.js';

// User registration controller
export const register = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const check = await User.findOne({ email });
  if (check) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const data = await User.create(req.body);
  const user = data.removePass();
  res.status(201).json({ message: 'User Registration Done', user });
});

// User login controller
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const data = await User.findOne({ email }).populate({
    path: 'role',
    select: 'name',
    populate: {
      path: 'permissions',
      select: 'name',
    },
  });

  if (!data || !data.matchPassword(password)) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = generateToken(data._id, '365d');
  const user = data.removePass();

  res
    .cookie('token', token, {
      maxAge: 12 * 30 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production' ? true : false,
    })
    .status(200)
    .json({ message: 'Login successfully', user });
});

// User logout controller
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token').status(200).json({ message: 'Logout successfully' });
});

export const me = asyncHandler(async (req, res) => {
  const { id } = req.data;

  // populate role and permission field with name and slug
  const user = await User.findById(id)
    .populate({
      path: 'role',
      populate: {
        path: 'permissions',
        select: 'name, slug',
      },
    })
    .select('-password');

  res.status(200).json(user);
});
