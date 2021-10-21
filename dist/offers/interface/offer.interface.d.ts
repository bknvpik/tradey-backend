import { Item } from "src/items/entities/item.entity";
export interface Offer {
    item: Item;
    itemOffered: Item;
    status: string;
}
