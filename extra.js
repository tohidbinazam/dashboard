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
