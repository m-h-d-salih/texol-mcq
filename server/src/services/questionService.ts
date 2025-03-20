import AppError from "../middlewares/AppError";
import Question from "../models/questionSchema";
import { IQuestion } from "../types/question";

export const createQuestionService=async(data:IQuestion)=>{
    const {question,answer,options}=data;
    const existquestion=await Question.findOne({question});
    if(existquestion){
        throw new AppError(`question already exist`,400);
    }
    const questionCreate=await Question.insertOne({question,answer,options});
    if(!questionCreate){
        throw new AppError(`question didnt created`);
    }
    return questionCreate;
}

export const getAllQuestionService=async(page:number)=>{
    const questions=await Question.find()
    const totalQuestions = await Question.countDocuments();
    return {questions,totalQuestions}
}