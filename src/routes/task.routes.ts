import { Router } from "express";
import { createTask, deleteTask, getTask, getTaskByUser, updateTask } from "../controllers/task.controller";

export const taskRouter = Router();

taskRouter.get("/getTask", getTask);
taskRouter.post("/createTask", createTask);
taskRouter.put("/updateUser/:id", updateTask);
taskRouter.delete("/deleteUser/:id", deleteTask);
taskRouter.get("/getTaskByUser/:id", getTaskByUser);
