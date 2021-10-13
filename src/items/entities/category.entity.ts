import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100, unique: true, nullable: false })
    category: string;

    @OneToOne(() => Item, item => item.category)
    item: Item;
}
