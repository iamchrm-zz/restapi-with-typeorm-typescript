import { Request, Response } from "express";
import { Task } from "../entities/Task";

export const getTask = async (
  req: Request,
  res: Response
) => {
  try {
    const task = await Task.find();
      !task
      ? res.status(404).json({ message: "No tasks found" })
      : res.json(task);
   
      
    
  } catch (error) {
    console.log(error);
    //check if error is instance of Error
    if (error instanceof Error) {
      //send a json response with the error message
      return res.status(500).json({ message: error.message });
    }
    
  }
}

export const getTaskByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Task.find({ relations: ["user"],
    where: { user: { id: parseInt(id)}}
   });
      !task
      ? res.status(404).json({ message: "No tasks found" })
      : res.json(task);

   
      
    
  } catch (error) {
    console.log(error);
    //check if error is instance of Error
    if (error instanceof Error) {
      //send a json response with the error message
      return res.status(500).json({ message: error.message });
    }
    
  }
}

export const createTask = async (
  req: Request,
  res: Response
) => {
 try {
      const { title, description, createAt, updateAt, status, user } = req.body;
      const task = new Task();
      task.title = title;
      task.description = description;
      task.createAt = createAt;
      task.updateAt = updateAt;
      task.status = status;
      task.user = user;

      await task.save();
      return res.json(task);

  
 } catch (error) {
     console.log(error);
     //check if error is instance of Error
     if (error instanceof Error) {
         //send a json response with the error message
         return res.status(500).json({ message: error.message });
     }
 }
  
}

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneBy({ id: parseInt(id) });
    if (!task) return res.status(404).json({ message: "Not user found" });

    await Task.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Task.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
