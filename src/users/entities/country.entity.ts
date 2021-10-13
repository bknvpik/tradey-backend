import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { UserDetails } from './user-details.entity';

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200, unique: true, nullable: false })
    country: string;

    @OneToOne(() => UserDetails, userDetails => userDetails.country)
    userDetails: UserDetails;
}
