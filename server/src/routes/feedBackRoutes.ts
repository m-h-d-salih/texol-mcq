import express from 'express'
import { trycatch } from '../middlewares/tryCatch'
import { addFeedBack } from '../controllers/feedBackController'
import authenticate from '../middlewares/checkAuth'
const feedbackRouter = express.Router()

feedbackRouter.post('/submit',authenticate,trycatch(addFeedBack));

export default feedbackRouter