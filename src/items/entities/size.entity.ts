import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Size {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100, unique: true, nullable: false })
    size: string;

    @OneToOne(() => Item, item => item.size)
    item: Item;
}
