import express from "express";
import { Task } from "../entities/Task";

export const getTask = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const task = await Task.find();
    setTimeout(() => {
      !task
      ? res.status(404).json({ message: "No tasks found" })
      : res.json(task);
    }, 3000);
   
      
    
  } catch (error) {
    console.log(error);
    //check if error is instance of Error
    if (error instanceof Error) {
      //send a json response with the error message
      return res.status(500).json({ message: error.message });
    }
    
  }
}

