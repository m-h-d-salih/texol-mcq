import { loginUserServices, registerUserServices } from "../services/authServices";
import { Request, Response } from "express";

export const registerUser = async(req:Request,res:Response)=> {
    const data=req.body;
    const register = await registerUserServices(data)
    res.status(201).json({message:"Registration Successfull",user:register})
}

export const loginUser =  async(req:Request,res:Response)=> {
    const {user,accessToken} = await loginUserServices(req.body)
    res.status(200).json({message:"Login Successfull",user,accessToken})
}