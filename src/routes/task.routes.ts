import { Router } from "express";
import { getTask } from "../controllers/task.controller";

export const taskRouter = Router();

taskRouter.get("/getTask", getTask);
