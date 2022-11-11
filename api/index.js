import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const app = express();

app.listen(8800, () => {
  connect();
  console.log("server connected!!!");
});
