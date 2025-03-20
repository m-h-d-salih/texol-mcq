import AppError from "../middlewares/AppError";
import Feedback from "../models/feedBack"
import User from "../models/userSchema";

export const addFeedBackService=async(feedback:string,score:string,userId:string)=>{
    const existfeedback=await Feedback.findOne({userId});
    if(existfeedback){
        existfeedback.feedBack.push(feedback); 
        await existfeedback.save();
    }else{
        const newfeedback = new Feedback({ userId });
        newfeedback.feedBack.push(feedback);
        await newfeedback.save();
    }
    const user=await User.findById(userId);
    if(!user){
        throw new AppError(`user not found`,404);
    }
    user.mark=Number(score);
    await user.save();
    return {feedback}
}