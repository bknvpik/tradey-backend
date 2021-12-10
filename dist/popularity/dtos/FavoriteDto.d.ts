import { Item } from "src/items/entities/item.entity";
import { User } from "src/users/entities/user.entity";
export default class FavoriteDto {
    id: string;
    user: User;
    item: Item;
}
