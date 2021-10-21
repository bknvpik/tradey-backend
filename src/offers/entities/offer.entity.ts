import { Item } from 'src/items/entities/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

export enum Status {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    IN_DELIVERY = "in delivery",
    COMPLETED = "completed"
}

@Entity()
export class Offer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToMany(() => Item, item => item.offer)
    @JoinTable()
    item: Item[];

    @ManyToMany(() => Item, item => item.offered)
    @JoinTable()
    itemOffered: Item[];

    @Column("enum", { enum: Status, default: Status.PENDING, nullable: false })
    status: string;
}
