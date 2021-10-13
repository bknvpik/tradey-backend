import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class ItemImages {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 255, unique: true, nullable: false})
    image: string;

    @ManyToOne(() => Item, item => item.images)
    item: Item;
}
