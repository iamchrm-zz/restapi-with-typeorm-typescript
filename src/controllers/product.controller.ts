import express from "express";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const product = await Product.find({
      relations: ["category"],
    });
    !product
      ? res.status(404).json({ message: "No products found" })
      : res.json(product);
  } catch (error) {
    console.log(error);
    //check if error is instance of Error
    if (error instanceof Error) {
      //send a json response with the error message
      return res.status(500).json({ message: error.message });
    }
  }
};
