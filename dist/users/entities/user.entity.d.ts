import { Item } from 'src/items/entities/item.entity';
import { Favorite } from 'src/popularity/entities/favorite.entity';
import { UserDetails } from './user-details.entity';
import { UserImage } from './user-image.entity';
export declare class User {
    id: string;
    eMail: string;
    username: string;
    password: string;
    createdAt: Date;
    isActive: boolean;
    image: UserImage;
    details: UserDetails;
    items: Item[];
    favorites: Favorite[];
}
