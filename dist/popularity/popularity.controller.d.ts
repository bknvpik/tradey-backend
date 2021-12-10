import { Item } from 'src/items/entities/item.entity';
import UserFavoriteDto from './dtos/FavoriteDto';
import { Popularity } from './entities/popularity.entity';
import { PopularityService } from './popularity.service';
export declare class PopularityController {
    private readonly popularityService;
    constructor(popularityService: PopularityService);
    addFavorite(favorite: UserFavoriteDto): Promise<any>;
    deleteFavorite(favorite: UserFavoriteDto): Promise<void>;
    getPopularity(itemId: string): Promise<Popularity>;
    isLiked(params: {
        itemId: string;
        userId: string;
    }): Promise<boolean>;
    getUserFavorites(userId: string): Promise<Item[]>;
    incrementViews(itemId: string): Promise<void>;
}
