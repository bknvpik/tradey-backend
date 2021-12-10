import { Item } from "src/items/entities/item.entity";

export interface OfferInterface {
    item: Item[],
    itemOffered: Item[],
    status?: string
}