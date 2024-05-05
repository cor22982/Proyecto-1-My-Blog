import jwt from 'jsonwebtoken';

const SECRET = 'es un secreto tu mirada y la mia';

const generateToken = (user) => jwt.sign(user, SECRET, { expiresIn: '50h', algorithm: 'HS256' });

const validateToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (e) {
    console.error('Invalid token', e);
    return false;
  }
};

const decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
};

export { generateToken, validateToken, decodeToken };
