import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Favorite {
    id: string;
    item: Item;
    user: User;
}
