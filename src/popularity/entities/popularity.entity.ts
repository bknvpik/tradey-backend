import { Item } from 'src/items/entities/item.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Popularity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Item, item => item.popularity)
    @JoinColumn()
    item: Item;

    @Column("int", { default: 0 })
    views: number;

    @Column("int", { default: 0 })
    likes: number;

    @Column("real", { default: 0 })
    popularity: number;
}
