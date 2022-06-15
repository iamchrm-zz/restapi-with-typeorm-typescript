import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
