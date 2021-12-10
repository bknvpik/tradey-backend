import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Size {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100, unique: true, nullable: false })
    size: string;

    @OneToMany(() => Item, item => item.size)
    item: Item[];
}
