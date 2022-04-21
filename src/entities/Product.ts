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
import { Category } from "./Category";
import { productInterface } from "./productInterface";

// @Entity() is a decorator that tells TypeORM that this class is a table in the database
@Entity("product")
export class Product extends BaseEntity {
  // @PrimaryGeneratedColumn() is a decorator that tells TypeORM that this property is a primary key in the database
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;
  // @Column() is a decorator that tells TypeORM that this property is a column in the database
  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  url_image: string;

  @Column({
    nullable: true,
  })
  price: number;

  @Column({
    nullable: true,
  })
  discount: number;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: "category" })
  category: Category;
}
