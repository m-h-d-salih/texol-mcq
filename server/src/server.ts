import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';
import cookieParser from 'cookie-parser';
import { main } from './config/db.config';
import authRouter from './routes/authRoutes';
import questionRouter from './routes/questionRoutes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth',authRouter);
app.use('/api/question',questionRouter);
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