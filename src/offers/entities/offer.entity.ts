import { Item } from 'src/items/entities/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

    @OneToMany(() => Item, item => item.offer)
    item: Item[];

    @OneToMany(() => Item, item => item.offered)
    itemOffered: Item[];

    @Column("enum", { enum: Status, default: Status.PENDING, nullable: false })
    status: string;
}
