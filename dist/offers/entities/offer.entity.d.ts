import { Item } from 'src/items/entities/item.entity';
export declare enum Status {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    IN_DELIVERY = "in delivery",
    COMPLETED = "completed"
}
export declare class Offer {
    id: string;
    item: Item[];
    itemOffered: Item[];
    status: string;
}
