import { app } from "./app";
import { AppDataSource } from "./db";
require("dotenv").config({ path: "./.env" });

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log(`Database connected successfully on port ${process.env.PORT}`);

    app.listen(process.env.PORT_APP || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT_APP}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
