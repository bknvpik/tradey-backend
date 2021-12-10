import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { CountryCode } from './country-code.entity';
import { Country } from './country.entity';
import { User } from './user.entity';

@Entity()
export class UserDetails {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 100, nullable: true })
    firstName: string;

    @Column("varchar", { length: 100, nullable: true })
    lastName: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    about: string;
    
    @Column("varchar", { length: 100, nullable: true })
    zipCode: string

    @Column("varchar", { length: 200, nullable: true })
    address1: string;

    @Column("varchar", { length: 200, nullable: true })
    address2: string;

    @Column("varchar", { length: 20, nullable: true })
    phone: string;
    
    @OneToOne(() => CountryCode, countryCode => countryCode.userDetails)
    @JoinColumn()
    countryCode: CountryCode;

    @OneToOne(() => Country, country => country.userDetails)
    @JoinColumn()
    country: Country;

    @OneToOne(() => User, user => user.details)
    @JoinColumn()
    user: User;

    @Column("bool", { default: false })
    theme: boolean;
}
