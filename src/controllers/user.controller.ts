import { Request, Response } from "express";
import { User } from '../entities/User';


export const getUser = async (
    req: Request,
    res: Response

) => {
    try {
        const user = await User.find();

            !user
            ? res.status(404).json({ message: "No users found" })
            : res.json(user);
        
       
    } catch (error) {
        console.log(error);
        //check if error is instance of Error
        if (error instanceof Error) {
            //send a json response with the error message
            return res.status(500).json({ message: error.message });
        }
    }
}


export const createUser = async (
    req: Request,
    res: Response
) => {
   try {
        const {name, email, password} = req.body;
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.active = false;
        await user.save();
        return  res.json(user);

    
   } catch (error) {
       console.log(error);
       //check if error is instance of Error
       if (error instanceof Error) {
           //send a json response with the error message
           return res.status(500).json({ message: error.message });
       }
   }
    
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const user = await User.findOneBy({ id: parseInt(id) });
      if (!user) return res.status(404).json({ message: "Not user found" });
  
      await User.update({ id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await User.delete({ id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "User not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
    

