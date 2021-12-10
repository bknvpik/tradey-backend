import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Condition {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100, unique: true, nullable: false })
    condition: string;

    @OneToOne(() => Item, item => item.condition)
    item: Item[];
}
