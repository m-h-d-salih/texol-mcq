import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';
import cookieParser from 'cookie-parser';
import { main } from './config/db.config';
import authRouter from './routes/authRoutes';
import questionRouter from './routes/questionRoutes';
import feedbackRouter from './routes/feedBackRoutes';

dotenv.config();
const app = express();
const corsOptions = {
  origin: process.env.FRONT_END_URL as string, 
  credentials: true, 
  allowedHeaders: ["Content-Type", "Authorization"], 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth',authRouter);
app.use('/api/question',questionRouter);
app.use('/api/feedback',feedbackRouter);
const port =process.env.PORT || 5000;
main().catch(err => console.log(err));

app.use(
  errorHandler as (
      err: any,
      req: Request,
      res: Response,
      next: NextFunction
  ) => void
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});