// //Request and Response interfaces of express
// import { Request, Response } from "express";
// import { User } from "../entities/User";

// export const createUser = async (req: Request, res: Response) => {
//   try {
//     // creating a new User
//     const user = new User();
//     const { name, lastname, phone, email, password } = req.body;
//     if (!name || !lastname || !phone || !password) {
//       return res.status(400).json({
//         message: "Missing parameters",
//       });
//     } else {
//       user.name = name;
//       user.lastname = lastname;
//       user.phone = phone;
//       user.email = email;
//       user.password = password;
//       await user.save();
//       res.status(201).json({
//         message: "User created",
//         user,
//       });
//     }

//     // throw new Error("custom error");
//   } catch (error) {
//     console.log(error);
//     //check if error is instance of Error
//     if (error instanceof Error) {
//       //send a json response with the error message
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     // return all users on database
//     const users = await User.find();

//     !users
//       ? res.status(404).json({ message: "No users found" })
//       : res.json(users);
//   } catch (error) {
//     console.log(error);
//     //check if error is instance of Error
//     if (error instanceof Error) {
//       //send a json response with the error message
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

// export const getUser = async (req: Request, res: Response) => {
//   try {
//     // return user by id
//     const userFound = await User.findOneBy({ id: req.params.id });
//     !userFound
//       ? res.status(404).json({ message: "[getUser]: User not found" })
//       : res.json(userFound);
//   } catch (error) {
//     console.log(error);
//     //check if error is instance of Error
//     if (error instanceof Error) {
//       //send a json response with the error message
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const { name, lastname, phone, email, password } = req.body;
//     const { id } = req.params;
//     // if users id has int value
//     // const userFound = await User.findOneBy({ id: parseInt(req.params.id) });
//     // return user by id
//     const userFound = await User.findOneBy({ id: req.params.id });

//     // if user is found
//     if (!userFound) {
//       return res.status(404).json({ message: "[updateUser]: User not found" });
//     } else {
//       //   userFound.name = name;
//       //   userFound.lastname = lastname;
//       //   userFound.phone = phone;
//       //   userFound.email = email;
//       //   userFound.password = password;

//       //   await userFound.save();
//       //alternative method to update user with all properties and id
//       await User.update(
//         { id: id },
//         {
//           name: name,
//           lastname: lastname,
//           phone: phone,
//           email: email,
//           password: password,
//         }
//       );
//     }

//     res.status(200).json({ message: "User updated " });
//   } catch (error) {
//     console.log(error);
//     //check if error is instance of Error
//     if (error instanceof Error) {
//       //send a json response with the error message
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     !id
//       ? res.status(404).json({ message: "[deleteUser]: User not found" })
//       : await User.delete({ id });
//     res.status(200).json({ message: "User deleted" });
//   } catch (error) {
//     console.log(error);
//     //check if error is instance of Error
//     if (error instanceof Error) {
//       //send a json response with the error message
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };
