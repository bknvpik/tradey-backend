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
exports.PopularityController = void 0;
const common_1 = require("@nestjs/common");
const item_entity_1 = require("../items/entities/item.entity");
const items_service_1 = require("../items/items.service");
const users_service_1 = require("../users/users.service");
const FavoriteDto_1 = require("./dtos/FavoriteDto");
const popularity_service_1 = require("./popularity.service");
let PopularityController = class PopularityController {
    constructor(popularityService) {
        this.popularityService = popularityService;
    }
    async addFavorite(favorite) {
        return await this.popularityService.addFavorite(favorite);
    }
    async deleteFavorite(favorite) {
        return await this.popularityService.deleteFavorite(favorite);
    }
    async getPopularity(itemId) {
        return await this.popularityService.getItemPopularity(itemId);
    }
    async isLiked(params) {
        return await this.popularityService.isLiked(params.itemId, params.userId);
    }
    async getUserFavorites(userId) {
        return await this.popularityService.getUserFavorites(userId);
    }
    async incrementViews(itemId) {
        await this.popularityService.incrementViews(itemId);
        await this.popularityService.calcAndUpdatePopularity(itemId);
    }
};
__decorate([
    (0, common_1.Post)('items/add-favorite'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FavoriteDto_1.default]),
    __metadata("design:returntype", Promise)
], PopularityController.prototype, "addFavorite", null);
__decorate([
    (0, common_1.Delete)('items/delete-favorite'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FavoriteDto_1.default]),
    __metadata("design:returntype", Promise)
], PopularityController.prototype, "deleteFavorite", null);
__decorate([
    (0, common_1.Get)('items/:itemId/get-popularity'),
    __param(0, (0, common_1.Param)('itemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PopularityController.prototype, "getPopularity", null);
__decorate([
    (0, common_1.Get)('items/:itemId/users/:userId/is-liked'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PopularityController.prototype, "isLiked", null);
__decorate([
    (0, common_1.Get)('users/:userId/get-favorites'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PopularityController.prototype, "getUserFavorites", null);
__decorate([
    (0, common_1.Put)('items/:itemId/views'),
    __param(0, (0, common_1.Param)('itemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PopularityController.prototype, "incrementViews", null);
PopularityController = __decorate([
    (0, common_1.Controller)('popularity'),
    __metadata("design:paramtypes", [popularity_service_1.PopularityService])
], PopularityController);
exports.PopularityController = PopularityController;
//# sourceMappingURL=popularity.controller.js.map