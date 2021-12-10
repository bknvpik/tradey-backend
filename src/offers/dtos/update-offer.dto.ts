import { Item } from "src/items/entities/item.entity";

export class UpdateOfferDto {
    item: Item[];
    itemOffered: Item[];
    status: string;
}