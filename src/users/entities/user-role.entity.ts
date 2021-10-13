import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

export enum Role {
    USER = "user",
    ADMIN = "admin"
}

@Entity()
export class UserRole {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("enum", { enum: Role, default: Role.USER, nullable: false })
    role: number;

    @OneToOne(() => User, user => user.role)
    user: User;
}
