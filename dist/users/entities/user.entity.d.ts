import { Item } from 'src/items/entities/item.entity';
import { UserDetails } from './user-details.entity';
import { UserFavorite } from './user-favorite.entity';
import { UserImage } from './user-image.entity';
export declare class User {
    id: string;
    eMail: string;
    password: string;
    createdAt: Date;
    isActive: boolean;
    image: UserImage;
    details: UserDetails;
    items: Item[];
    favorites: UserFavorite[];
}
