import { Offer } from 'src/offers/entities/offer.entity';
import { Favorite } from 'src/popularity/entities/favorite.entity';
import { Popularity } from 'src/popularity/entities/popularity.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany, ManyToMany, CreateDateColumn, AfterInsert, getRepository } from 'typeorm';
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

    @ManyToOne(() => Category, category => category.item)
    category: Category;

    @ManyToOne(() => Condition, condition => condition.item)
    condition: Condition;

    @ManyToOne(() => Size, size => size.item)
    size: Size;

    @ManyToOne(() => User, user => user.items)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @Column("bool", { default: true })
    status: boolean;

    @OneToOne(() => Popularity, popularity => popularity.item, { cascade: true })
    popularity: Popularity;

    @ManyToMany(() => Offer, offer => offer.item, {
        cascade: true
    })
    offer: Offer;

    @ManyToMany(() => Offer, offer => offer.itemOffered, {
        cascade: true
    })
    offered: Offer;

    @OneToMany( type => ItemImages, itemImages => itemImages.item, {cascade: true })
    images: ItemImages[];

    @OneToMany(() => Favorite, favorite => favorite.item, {
        cascade: true
    })
    favorites: Favorite[];

    // @AfterInsert()
    // async createPopularity() {
    //     console.log(this.id)
    // }
}
