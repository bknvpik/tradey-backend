import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { UserDetails } from './user-details.entity';

@Entity()
export class CountryCode {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100, unique: true, nullable: false })
    countryCode: string;

    @OneToOne(() => UserDetails, userDetails => userDetails.countryCode)
    userDetails: UserDetails;
}
