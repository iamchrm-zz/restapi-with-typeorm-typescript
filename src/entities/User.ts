import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

// TODO: Add category to task
@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    name: string;
    @Column({ nullable: false })
    password: string;
    @ManyToOne(() => Task, (task) => task.id)
    @JoinColumn({ name: "task" })
    task: Task;
}
