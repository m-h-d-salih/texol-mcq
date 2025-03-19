import express from 'express'
import { addQuestion, getAllQuestion } from '../controllers/questionController'
import { trycatch } from '../middlewares/tryCatch'
const questionRouter = express.Router();
questionRouter.post('/add',addQuestion);
questionRouter.get('',trycatch(getAllQuestion));

export default questionRouter