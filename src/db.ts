import { DataSource } from "typeorm";
import { Category } from "./entities/Category";
import { Product } from "./entities/Product";

//config of database
export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST as any,
  username: process.env.USERNAME as any,
  password: process.env.PASSWORD as any,
  port: process.env.DATABASE_PORT as any,
  database: process.env.DATABASE,
  entities: process.env.ENTITIES as any,
  logging: true,
  synchronize: false,
});
