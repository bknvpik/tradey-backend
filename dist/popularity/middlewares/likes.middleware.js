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
exports.LikesMiddleware = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const popularity_entity_1 = require("../entities/popularity.entity");
const popularity_service_1 = require("../popularity.service");
let LikesMiddleware = class LikesMiddleware {
    constructor(popularityRepository, popularityService) {
        this.popularityRepository = popularityRepository;
        this.popularityService = popularityService;
    }
    use(req, res, next) {
        if (req.baseUrl.endsWith('add-favorite')) {
            this.popularityRepository.createQueryBuilder()
                .update(popularity_entity_1.Popularity)
                .set({ likes: () => 'likes + 1' })
                .where('item = :id', { id: req.body.item })
                .execute();
        }
        if (req.baseUrl.endsWith('delete-favorite')) {
            this.popularityRepository.createQueryBuilder()
                .update(popularity_entity_1.Popularity)
                .set({ likes: () => 'likes - 1' })
                .where('item = :id', { id: req.body.item })
                .execute();
        }
        if (req.baseUrl.startsWith('items')) {
            console.log("test");
            this.popularityRepository.createQueryBuilder("popularity")
                .leftJoin("popularity.item", "item")
                .leftJoin("item.user", "user")
                .update(popularity_entity_1.Popularity)
                .set({ likes: () => 'likes - 1' })
                .where('item = :itemId', { itemId: req.params.itemId })
                .andWhere('user != :userId', { userId: req.params.userId })
                .execute();
        }
        this.popularityService.calcAndUpdatePopularity(req.body.item);
        next();
    }
};
LikesMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(popularity_entity_1.Popularity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        popularity_service_1.PopularityService])
], LikesMiddleware);
exports.LikesMiddleware = LikesMiddleware;
//# sourceMappingURL=likes.middleware.js.map