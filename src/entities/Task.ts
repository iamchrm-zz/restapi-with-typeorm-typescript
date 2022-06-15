import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

// TODO: Add category to task
@Entity("task")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    title: string;
    @Column({ nullable: false })
    description: string;
    @Column({ nullable: false })
    createAt: Date;
    @Column({ nullable: false })
    updateAt: Date;
    @Column({ nullable: false })
    status: boolean;
    @ManyToOne(() => User, (user) => user.task, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: "user" })
    user: User;

}
