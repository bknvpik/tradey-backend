import { Item } from 'src/items/entities/item.entity';
import { Favorite } from 'src/popularity/entities/favorite.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { UserDetails } from './user-details.entity';
import { UserImage } from './user-image.entity';
import { UserRole } from './user-role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 200, unique: true, nullable: false })
    eMail: string;

    @Column({ type: "varchar", length: 100, unique: true, nullable: false })
    username: string;

    @Column("varchar", { length: 255, nullable: false })
    password: string;

    @CreateDateColumn()
    createdAt: Date

    @Column("bool", { default: false })
    isActive: boolean;

    // @OneToOne(() => UserRole, role => role.user)
    // @JoinColumn()
    // role: UserRole;

    @OneToOne(() => UserImage, userImage => userImage.user, { cascade: true })
    image: UserImage;

    @OneToOne(() => UserDetails, userDetails => userDetails.user, { cascade: true })
    details: UserDetails;

    @OneToMany(() => Item, item => item.user, { cascade: true })
    items: Item[];

    @OneToMany(() => Favorite, favorite => favorite.user, { cascade: true })
    favorites: Favorite[];
}
