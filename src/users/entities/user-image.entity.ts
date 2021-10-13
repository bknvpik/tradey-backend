import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserImage {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 255, nullable: false })
    imageUrl: string;

    @OneToOne(() => User, user => user.image)
    @JoinColumn()
    user: User;
}
