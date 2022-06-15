import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

// TODO: Add category to task
@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    name: string;
    @Column({ nullable: true })
    email: string;
    @Column({ nullable: false })
    password: string;
    @Column({ nullable: false, default: false })
    active: boolean;
    @OneToMany('Task', (task: Task) => task.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    task: Array<Task>;
}
