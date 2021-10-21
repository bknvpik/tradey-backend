import { Offer } from 'src/offers/entities/offer.entity';
import { UserFavorite } from 'src/users/entities/user-favorite.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
import { Category } from './category.entity';
import { Condition } from './condition.entity';
import { ItemImages } from './item-images.entity';
import { Size } from './size.entity';

@Entity()
export class Item {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 200, nullable: false })
    name: string;

    @Column("varchar", { length: 255, nullable: false })
    description: string;

    @Column("varchar", { length: 100, nullable: false })
    brand: string

    @OneToOne(() => Category, category => category.item)
    @JoinColumn()
    category: Category;

    @OneToOne(() => Condition, condition => condition.item)
    @JoinColumn()
    condition: Condition;

    @OneToOne(() => Size, size => size.item)
    @JoinColumn()
    size: Size;

    @ManyToOne(() => User, user => user.items)
    user: User;

    @Column("timestamp", { nullable: false })
    createdAt: Date;

    @Column("bool", { default: true })
    status: boolean;

    @Column("int", { default: 0 })
    likes: number;

    @Column("int", { default: 0 })
    views: number;

    @ManyToMany(() => Offer, offer => offer.item, {
        cascade: true
    })
    offer: Offer;

    @ManyToMany(() => Offer, offer => offer.itemOffered, {
        cascade: true
    })
    offered: Offer;

    @OneToMany(() => ItemImages, itemImages => itemImages.item, {
        cascade: true
    })
    images: ItemImages[]

    @OneToMany(() => UserFavorite, userFavorite => userFavorite.item, {
        cascade: true
    })
    favorites: UserFavorite[];
}
