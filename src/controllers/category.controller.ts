import express from "express";
import { Category } from "../entities/Category";

export const getCategories = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const category = await Category.find();
    !category
      ? res.status(404).json({ message: "No categories found" })
      : res.json(category);
  } catch (error) {
    console.log(error);
    //check if error is instance of Error
    if (error instanceof Error) {
      //send a json response with the error message
      return res.status(500).json({ message: error.message });
    }
  }
};
