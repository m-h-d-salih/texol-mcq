import mongoose from'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB_URL=process.env.DB_URL as string;


export async function main() {
  await mongoose.connect(DB_URL);
    console.log(`connected to mongodb`)
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//  main();