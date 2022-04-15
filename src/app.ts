// express is used to create the server
import express from "express";
//morgan is used to log the requests
import morgan from "morgan";
//cors is used to allow cross origin requests
import cors from "cors";
import { userRouter } from "./routes/user.routes";

export const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(userRouter);
