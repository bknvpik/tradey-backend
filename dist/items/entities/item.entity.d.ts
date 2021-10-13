import { Offer } from 'src/offers/entities/offer.entity';
import { UserFavorite } from 'src/users/entities/user-favorite.entity';
import { User } from 'src/users/entities/user.entity';
import { Category } from './category.entity';
import { Condition } from './condition.entity';
import { ItemImages } from './item-images.entity';
import { Size } from './size.entity';
export declare class Item {
    id: string;
    name: string;
    description: string;
    brand: string;
    category: Category;
    condition: Condition;
    size: Size;
    user: User;
    createdAt: Date;
    status: boolean;
    likes: number;
    views: number;
    offer: Offer;
    offered: Offer;
    images: ItemImages[];
    favorites: UserFavorite[];
}
