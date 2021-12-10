import { Item } from "src/items/entities/item.entity"

export class CreateOfferDto {
    item: Item[];
    itemOffered: Item[];
}