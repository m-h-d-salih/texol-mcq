import { Request, Response } from "express";

import { createQuestionService, getAllQuestionService } from "../services/questionService";

export const addQuestion=async(req:Request,res:Response)=>{
    await createQuestionService(req.body); 
    res.status(200).json({message:"question created Successfully"});
}
export const getAllQuestion=async(req:Request,res:Response)=>{
    const {page}=req.query;
    const {questions=[],totalQuestions}=await getAllQuestionService(Number(page)); 
    res.status(200).json({message:"questions fteched Successfully",data:{questions,totalQuestions}});
}
