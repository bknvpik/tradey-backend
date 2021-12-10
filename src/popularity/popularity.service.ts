import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';
import FavoriteDto from './dtos/FavoriteDto';
import { Favorite } from './entities/favorite.entity';
import { Popularity } from './entities/popularity.entity';

@Injectable()
export class PopularityService {
    constructor(
        @InjectRepository(Favorite)
        private readonly favoriteRepository: Repository<Favorite>,
        @InjectRepository(Popularity)
        private readonly popularityRepository: Repository<Popularity>
    ) {}

    async createPopularity(item: Item): Promise<Popularity> {
        return await this.popularityRepository.save({views: 0, likes: 0, item: item });
    }

    async addFavorite(favorite: FavoriteDto): Promise<void> {
        const fav = this.favoriteRepository.create(favorite);
        await this.favoriteRepository.save(fav);
    }

    async deleteFavorite(favorite: FavoriteDto): Promise<void> {
        const fav = await this.favoriteRepository.find(favorite);
        await this.favoriteRepository.remove(fav);
    }

    async incrementViews(itemId: string): Promise<void> {
        await this.popularityRepository.createQueryBuilder()
        .update(Popularity)
        .set({ views: () => 'views + 1' })
        .where("item.id = :id", { id: itemId })
        .execute();
    }

    async isLiked(itemId: string, userId: string): Promise<boolean> {
        const liked = await this.favoriteRepository.createQueryBuilder()
        .select("favorite").from(Favorite, "favorite")
        .leftJoin("favorite.item", "item")
        .leftJoin("favorite.user" ,"user")
        .where("item.id = :itemId", { itemId: itemId })
        .andWhere("user.id = :userId", { userId: userId }).getCount();
        
        return liked
            ? true
            : false;
    }

    async getMaxStats(): Promise<{maxViews: number, maxLikes: number}> {
        return await this.popularityRepository
        .createQueryBuilder()
        .select("MAX(popularity.views)", "maxViews")
        .addSelect("MAX(popularity.likes)", "maxLikes")
        .from(Popularity, "popularity")
        .getRawOne();
    }

    async getAverageStats(): Promise<{avgViews: number, avgLikes: number}> {
        return await this.popularityRepository.createQueryBuilder("popularity")
        .select("AVG(popularity.views)", "avgViews")
        .addSelect("AVG(popularity.likes)", "avgLikes")
        .getRawOne();
    }

    async getItemPopularity(itemId: string): Promise<Popularity> {
        return await this.popularityRepository.createQueryBuilder()
        .select("popularity").from(Popularity, "popularity")
        .leftJoin("popularity.item", "item")
        .where("popularity.item = :id", { id: itemId })
        .getOne();
    }

    async calcAndUpdatePopularity(itemId: string): Promise<void> {
        const maxStats = await this.getMaxStats();
        const averageStats = await this.getAverageStats();
        const itemPopularity = await this.getItemPopularity(itemId);

        const weightViews = maxStats.maxViews !== 0 ? itemPopularity.views / maxStats.maxViews : 0;
        const weightLikes = maxStats.maxLikes !== 0 ? itemPopularity.likes / maxStats.maxLikes : 0;

        const popularity = (
            (weightViews * itemPopularity.views + (1 - weightViews) * averageStats.avgViews) +
            (weightLikes * itemPopularity.likes + (1 - weightLikes) * averageStats.avgLikes)
        ) / 2;

        await this.popularityRepository.createQueryBuilder()
        .update(Popularity)
        .set({ popularity: popularity })
        .where("item = :id", { id: itemId })
        .execute();
    }

    async getUserFavorites(userId: string): Promise<Item[]> {
        const userFavorites = await this.favoriteRepository.createQueryBuilder()
        .select("favorite").from(Favorite, "favorite")
        .leftJoin("favorite.user", "user")
        .leftJoinAndSelect("favorite.item", "item")
        .leftJoinAndSelect("item.images", "images")
        .where("user.id = :userId", { userId: userId })
        .getMany();

        return userFavorites.map((favorite) => favorite.item);
    }

    async findMostPopular(userId: string): Promise<Item[]> {
        const items = await this.popularityRepository.createQueryBuilder()
        .select("popularity")
        .from(Popularity, "popularity")
        .leftJoinAndSelect("popularity.item", "item")
        .leftJoinAndSelect("item.images", "itemImages")
        .leftJoin("item.user", "itemUser")
        .where("itemUser.id != :id", { id: userId })
        .orderBy("popularity.popularity", "DESC")
        .getMany()

        return items.map((item) => item.item);
    }
}
