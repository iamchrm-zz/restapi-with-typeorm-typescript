import { DataSource } from "typeorm";
import { Category } from "./entities/Category";
import { Product } from "./entities/Product";

//config of database
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  username: "bsale_test",
  password: "bsale_test",
  port: 3306,
  database: "bsale_test",
  entities: [Product, Category],
  logging: true,
  synchronize: false,
});

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   username: "root",
//   password: "",
//   port: 3306,
//   database: "javaapp",
//   entities: [User],
//   logging: true,
//   synchronize: true,
// });
