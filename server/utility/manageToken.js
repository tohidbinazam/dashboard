import JWT from 'jsonwebtoken';

export const generateToken = (id, isAdmin, expiresIn) => {
  return JWT.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn });
};

export const verifyToken = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};
