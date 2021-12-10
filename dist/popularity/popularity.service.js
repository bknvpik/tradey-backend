"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("../items/entities/item.entity");
const typeorm_2 = require("typeorm");
const favorite_entity_1 = require("./entities/favorite.entity");
const popularity_entity_1 = require("./entities/popularity.entity");
let PopularityService = class PopularityService {
    constructor(favoriteRepository, popularityRepository) {
        this.favoriteRepository = favoriteRepository;
        this.popularityRepository = popularityRepository;
    }
    async createPopularity(item) {
        return await this.popularityRepository.save({ views: 0, likes: 0, item: item });
    }
    async addFavorite(favorite) {
        const fav = this.favoriteRepository.create(favorite);
        await this.favoriteRepository.save(fav);
    }
    async deleteFavorite(favorite) {
        const fav = await this.favoriteRepository.find(favorite);
        await this.favoriteRepository.remove(fav);
    }
    async incrementViews(itemId) {
        await this.popularityRepository.createQueryBuilder()
            .update(popularity_entity_1.Popularity)
            .set({ views: () => 'views + 1' })
            .where("item.id = :id", { id: itemId })
            .execute();
    }
    async isLiked(itemId, userId) {
        const liked = await this.favoriteRepository.createQueryBuilder()
            .select("favorite").from(favorite_entity_1.Favorite, "favorite")
            .leftJoin("favorite.item", "item")
            .leftJoin("favorite.user", "user")
            .where("item.id = :itemId", { itemId: itemId })
            .andWhere("user.id = :userId", { userId: userId }).getCount();
        return liked
            ? true
            : false;
    }
    async getMaxStats() {
        return await this.popularityRepository
            .createQueryBuilder()
            .select("MAX(popularity.views)", "maxViews")
            .addSelect("MAX(popularity.likes)", "maxLikes")
            .from(popularity_entity_1.Popularity, "popularity")
            .getRawOne();
    }
    async getAverageStats() {
        return await this.popularityRepository.createQueryBuilder("popularity")
            .select("AVG(popularity.views)", "avgViews")
            .addSelect("AVG(popularity.likes)", "avgLikes")
            .getRawOne();
    }
    async getItemPopularity(itemId) {
        return await this.popularityRepository.createQueryBuilder()
            .select("popularity").from(popularity_entity_1.Popularity, "popularity")
            .leftJoin("popularity.item", "item")
            .where("popularity.item = :id", { id: itemId })
            .getOne();
    }
    async calcAndUpdatePopularity(itemId) {
        const maxStats = await this.getMaxStats();
        const averageStats = await this.getAverageStats();
        const itemPopularity = await this.getItemPopularity(itemId);
        const weightViews = maxStats.maxViews !== 0 ? itemPopularity.views / maxStats.maxViews : 0;
        const weightLikes = maxStats.maxLikes !== 0 ? itemPopularity.likes / maxStats.maxLikes : 0;
        const popularity = ((weightViews * itemPopularity.views + (1 - weightViews) * averageStats.avgViews) +
            (weightLikes * itemPopularity.likes + (1 - weightLikes) * averageStats.avgLikes)) / 2;
        await this.popularityRepository.createQueryBuilder()
            .update(popularity_entity_1.Popularity)
            .set({ popularity: popularity })
            .where("item = :id", { id: itemId })
            .execute();
    }
    async getUserFavorites(userId) {
        const userFavorites = await this.favoriteRepository.createQueryBuilder()
            .select("favorite").from(favorite_entity_1.Favorite, "favorite")
            .leftJoin("favorite.user", "user")
            .leftJoinAndSelect("favorite.item", "item")
            .leftJoinAndSelect("item.images", "images")
            .where("user.id = :userId", { userId: userId })
            .getMany();
        return userFavorites.map((favorite) => favorite.item);
    }
    async findMostPopular(userId) {
        const items = await this.popularityRepository.createQueryBuilder()
            .select("popularity")
            .from(popularity_entity_1.Popularity, "popularity")
            .leftJoinAndSelect("popularity.item", "item")
            .leftJoinAndSelect("item.images", "itemImages")
            .leftJoin("item.user", "itemUser")
            .where("itemUser.id != :id", { id: userId })
            .orderBy("popularity.popularity", "DESC")
            .getMany();
        return items.map((item) => item.item);
    }
};
PopularityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorite_entity_1.Favorite)),
    __param(1, (0, typeorm_1.InjectRepository)(popularity_entity_1.Popularity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PopularityService);
exports.PopularityService = PopularityService;
//# sourceMappingURL=popularity.service.js.map