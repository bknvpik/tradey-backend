import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';
import FavoriteDto from './dtos/FavoriteDto';
import { Favorite } from './entities/favorite.entity';
import { Popularity } from './entities/popularity.entity';
export declare class PopularityService {
    private readonly favoriteRepository;
    private readonly popularityRepository;
    constructor(favoriteRepository: Repository<Favorite>, popularityRepository: Repository<Popularity>);
    createPopularity(item: Item): Promise<Popularity>;
    addFavorite(favorite: FavoriteDto): Promise<void>;
    deleteFavorite(favorite: FavoriteDto): Promise<void>;
    incrementViews(itemId: string): Promise<void>;
    isLiked(itemId: string, userId: string): Promise<boolean>;
    getMaxStats(): Promise<{
        maxViews: number;
        maxLikes: number;
    }>;
    getAverageStats(): Promise<{
        avgViews: number;
        avgLikes: number;
    }>;
    getItemPopularity(itemId: string): Promise<Popularity>;
    calcAndUpdatePopularity(itemId: string): Promise<void>;
    getUserFavorites(userId: string): Promise<Item[]>;
    findMostPopular(userId: string): Promise<Item[]>;
}
