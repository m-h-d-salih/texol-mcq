import jwt from 'jsonwebtoken';
import { IUser } from '../types/user';


export const generateAccessToken = (user:IUser) => {
  const payload = { id: user._id,email:user.email,  role: user.status };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '3d' }); 
};

export const generateRefreshToken = (user:IUser) => {
  const payload = { id: user._id };
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' }); 
};

export const verifyToken = (token:string, secret:string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};