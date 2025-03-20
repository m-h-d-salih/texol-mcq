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

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Extract token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(new AppError("Not authenticated", 401));
        }

        // Ensure token is properly formatted
        const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
    
        if (!token) {
            return next(new AppError("Invalid authentication token", 401));
        }

        // Verify token
        const decoded = verifyToken(token, process.env.JWT_SECRET as string) as JwtPayload;
        if (!decoded) {
            return next(new AppError("Invalid or expired access token", 403));
        }
      

        // Find user
        const user: IUser | null = await User.findById(decoded.id);
        if (!user) {
            return next(new AppError("User not found", 404));
        }

        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

export default authenticate;
