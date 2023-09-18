import JWT from 'jsonwebtoken';

export const generateToken = (id, expiresIn) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

export const verifyToken = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};
