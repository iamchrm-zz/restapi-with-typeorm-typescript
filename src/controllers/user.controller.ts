import express from 'express';
import { User } from '../entities/User';


export const getUser = async (
    req: express.Request,
    res: express.Response

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