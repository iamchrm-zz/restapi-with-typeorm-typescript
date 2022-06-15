import { createUser, deleteUser, getUser, updateUser } from './../controllers/user.controller';
import { Router } from "express";

export const userRouter = Router();

userRouter.get("/getUser", getUser);
userRouter.post("/createUser", createUser);
userRouter.put("/updateUser/:id", updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);