import { Offer } from 'src/offers/entities/offer.entity';
import { Favorite } from 'src/popularity/entities/favorite.entity';
import { Popularity } from 'src/popularity/entities/popularity.entity';
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
    popularity: Popularity;
    offer: Offer;
    offered: Offer;
    images: ItemImages[];
    favorites: Favorite[];
}
