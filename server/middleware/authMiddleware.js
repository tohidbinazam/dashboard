import { verifyToken } from '../utility/manageToken.js';

const authCheck = (token, clearName) => {
  return (req, res, next) => {
    if (!token) {
      res.status(401);
      throw new Error('You are not authorized');
    }
    try {
      const decoded = verifyToken(token);
      req.data = decoded;
      next();
    } catch (err) {
      res.clearCookie(clearName).status(401);
      //
      throw new Error(err.message);
    }
  };
};

// This middleware is used to check if the user is logged in or not
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  authCheck(token, 'token')(req, res, next);
};

// This middleware is used to check if the user has access to the single user or not
export const accessMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;
  authCheck(token, 'accessToken')(req, res, next);
};

export default authMiddleware;
