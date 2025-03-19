import express from 'express'
import { loginUser, registerUser } from '../controllers/authController'
import { createValidator } from 'express-joi-validation'
import { trycatch } from '../middlewares/tryCatch'
import { userAuthValidation, userLoginValidation } from '../validations/userValidation'
const authRouter = express.Router()
const validator=createValidator({passError:true})
authRouter.post('/register',validator.body(userAuthValidation),trycatch(registerUser))
authRouter.post('/login',validator.body(userLoginValidation),trycatch(loginUser))

export default authRouter