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
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("./items.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const auth_service_1 = require("../auth/auth.service");
const popularity_service_1 = require("../popularity/popularity.service");
const add_item_dto_1 = require("./dtos/add-item.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
let ItemsController = class ItemsController {
    constructor(itemsService, authService, popularityService) {
        this.itemsService = itemsService;
        this.authService = authService;
        this.popularityService = popularityService;
    }
    async findAll(req) {
        const data = await this.authService.verifyCookie(req.cookies['jwt']);
        console.log(data);
        console.log(await this.itemsService.findAll(data.sub));
        return await this.itemsService.findAll(data.sub);
    }
    async findMostPopular(req) {
        const data = await this.authService.verifyCookie(req.cookies['jwt']);
        const items = await this.popularityService.findMostPopular(data.sub);
        console.log(items);
        return items;
    }
    async getCategories() {
        return await this.itemsService.findCategories();
    }
    async getConditions() {
        return await this.itemsService.findConditions();
    }
    async getSizes() {
        return await this.itemsService.findSizes();
    }
    async findAllCategory(category) {
        return `finds an items with category: ${category}`;
    }
    async findAllByUserId(userId) {
        return await this.itemsService.findAllByUserId(userId);
    }
    async findOne(id) {
        console.log(await this.itemsService.findOne(id));
        return await this.itemsService.findOne(id);
    }
    async checkOwner(params) {
        return await this.itemsService.checkOwner(params.itemId, params.userId);
    }
    async addItem(item, images) {
        item.images = [];
        images.forEach(img => {
            const image = {
                image: img.filename
            };
            item.images.push(image);
        });
        const itemEntity = await this.itemsService.addItem(item);
        await this.popularityService.createPopularity(itemEntity);
    }
    async editItem(id) {
        return `edits an item with id: ${id}`;
    }
    async deleteItem(id) {
        return `removes an item with id: ${id}`;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('most-popular'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findMostPopular", null);
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('conditions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "getConditions", null);
__decorate([
    (0, common_1.Get)('sizes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "getSizes", null);
__decorate([
    (0, common_1.Get)('category/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findAllCategory", null);
__decorate([
    (0, common_1.Get)('users/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findAllByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':itemId/users/:userId/check-owner'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "checkOwner", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 4, {
        storage: (0, multer_1.diskStorage)({
            destination: '../tradey-frontend/public/resources/item_images/',
            filename: (req, file, cb) => {
                const uuid = (0, uuid_1.v4)();
                cb(null, `${uuid}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_item_dto_1.AddItemDto, Array]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "addItem", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "editItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "deleteItem", null);
ItemsController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService,
        auth_service_1.AuthService,
        popularity_service_1.PopularityService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map