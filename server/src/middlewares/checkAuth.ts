import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import AppError from "./AppError";
import User from "../models/userSchema";
import { IUser } from "../types/user";
import { JwtPayload } from "jsonwebtoken";

declare module "express-serve-static-core" {
    interface Request {
      user?: IUser;
    }
  }

const authenticate=async(req:Request,res:Response,next:NextFunction)=>{

    try{
        const token=req.cookies.accessToken;
        if(!token){
            return res.status(401).json({isAuthenticated:false,message:"not autheticated"})
        }

        const decoded=verifyToken(token,process.env.JWT_SECRET as string) as JwtPayload;
        if(!decoded){
            throw new AppError('invalid or expired access token',403)
        }
        const user:IUser| null=await User.findById(decoded._id)
        if(!user){
            throw new AppError('user not found',404)
        }
        
        req.user=user; 
        next()

    }catch(err){
        console.log(err)
        next(err)
    }
}

export default authenticate;