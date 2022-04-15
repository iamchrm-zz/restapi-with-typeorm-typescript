import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./../controllers/user.controllers";

export const userRouter = Router();

userRouter.post("/createUser", createUser);

userRouter.get("/getUsers", getUsers);

userRouter.get("/getUser/:id", getUser);

userRouter.put("/updateUser/:id", updateUser);

userRouter.delete("/deleteUser/:id", deleteUser);
