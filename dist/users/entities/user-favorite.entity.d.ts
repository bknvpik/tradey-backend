import { Item } from 'src/items/entities/item.entity';
import { User } from './user.entity';
export declare class UserFavorite {
    id: string;
    item: Item;
    user: User;
}
