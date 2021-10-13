import { Item } from 'src/items/entities/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserDetails } from './user-details.entity';
import { UserFavorite } from './user-favorite.entity';
import { UserImage } from './user-image.entity';
import { UserRole } from './user-role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 200, unique: true, nullable: false })
    eMail: string;

    @Column("varchar", { length: 255, nullable: false })
    password: string;

    @Column("timestamp", { nullable: false })
    createdAt: Date

    @Column("bool", { default: false })
    isActive: boolean;

    @OneToOne(() => UserRole, role => role.user)
    @JoinColumn()
    role: UserRole;

    @OneToOne(() => UserImage, userImage => userImage.user, {
        cascade: true
    })
    image: UserImage;

    @OneToOne(() => UserDetails, userDetails => userDetails.user, {
        cascade: true
    })
    details: UserDetails;

    @OneToMany(() => Item, item => item.user, {
        cascade: true
    })
    items: Item[];

    @OneToMany(() => UserFavorite, userFavorite => userFavorite.user, {
        cascade: true
    })
    favorites: UserFavorite[];
}
