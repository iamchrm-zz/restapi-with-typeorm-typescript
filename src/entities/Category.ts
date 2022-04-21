import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { categoryInterface } from "./categoryInterface";

// @Entity() is a decorator that tells TypeORM that this class is a table in the database
@Entity("category")
export class Category extends BaseEntity implements categoryInterface {
  // @PrimaryGeneratedColumn() is a decorator that tells TypeORM that this property is a primary key in the database
  @PrimaryGeneratedColumn()
  id: number;
  // @Column() is a decorator that tells TypeORM that this property is a column in the database
  @Column({
    nullable: true,
  })
  name: string;
}
