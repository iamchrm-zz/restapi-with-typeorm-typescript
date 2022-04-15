import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity() is a decorator that tells TypeORM that this class is a table in the database
@Entity("user")
export class User extends BaseEntity {
  // @PrimaryGeneratedColumn() is a decorator that tells TypeORM that this property is a primary key in the database
  @PrimaryGeneratedColumn()
  id: string;
  // @Column() is a decorator that tells TypeORM that this property is a column in the database
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  password: string;
}
