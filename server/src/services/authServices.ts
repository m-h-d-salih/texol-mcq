import bcrypt from "bcrypt";
import AppError from "../middlewares/AppError";
import { generateAccessToken } from "../utils/jwt";
import User from "../models/userSchema";
import { IUser } from "../types/user";

export const registerUserServices = async (value: IUser) => {

  const { fullName, email, password, mobile, status } = value;
  const existEmail = await User.findOne({ email });
  const existNumber = await User.findOne({ mobile });
  if (existEmail) throw new AppError("Email already registered", 400);
  if (existNumber) throw new AppError("Mobile Number already registered", 400);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.insertOne({
    fullName,
    email,
    password:hashedPassword,
    mobile,
    status,
  });
  return {
    _id: user._id,
    email: user.email,
    mobile,
    status,
    name:user.fullName
  };
};

export const loginUserServices = async(userData:IUser) => {
  const {mobile,password} = userData;
  const user:IUser | null = await User.findOne({mobile});
  if(!user) throw new AppError('Invalid Mobile Number',400);
  const validPassword = await bcrypt.compare(password,user.password);
  if(!validPassword) throw new AppError('Incorrect password', 400);
  const accessToken = generateAccessToken(user);
  return {
    user,accessToken
    
  }
}