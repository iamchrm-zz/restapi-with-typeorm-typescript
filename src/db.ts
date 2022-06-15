import { DataSource } from "typeorm";
import { Task } from "./entities/Task";
import { User } from "./entities/User";

//config of database
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgrespw",
  port: 49153,
  database: "postgres",
  entities: [Task, User],
  logging: false,
  synchronize: true,

});
