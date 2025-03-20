import { Request, Response } from "express";
import { addFeedBackService } from "../services/feedBackService";

export const addFeedBack=async(req:Request,res:Response)=>{
    const {feedback,score}=req.body;
    const {_id}:any=req.user;
    
    await addFeedBackService(feedback,score,_id);
    res.status(200).json({success:true,message:`feedback added successfully`});
}