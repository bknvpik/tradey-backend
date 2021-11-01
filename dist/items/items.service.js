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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const condition_entity_1 = require("./entities/condition.entity");
const item_entity_1 = require("./entities/item.entity");
const size_entity_1 = require("./entities/size.entity");
let ItemsService = class ItemsService {
    constructor(itemsRepository, categoriesRepository, conditionsRepository, sizesRepository) {
        this.itemsRepository = itemsRepository;
        this.categoriesRepository = categoriesRepository;
        this.conditionsRepository = conditionsRepository;
        this.sizesRepository = sizesRepository;
    }
    async findAll() {
        return await this.itemsRepository.find({
            select: ["name", "brand", "createdAt", "likes", "views"]
        });
    }
    async findOne(id) {
        return await this.itemsRepository.findOne(id);
    }
    async findAllCategory(category) {
        return await this.itemsRepository.find({
            where: {
                item: { category: category }
            },
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        });
    }
    async findAllUser(userId) {
        return await this.itemsRepository.find({
            where: {
                item: { user: userId },
            },
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        });
    }
    async findCategories() {
        return await this.categoriesRepository.find();
    }
    async findConditions() {
        return await this.conditionsRepository.find();
    }
    async findSizes() {
        return await this.sizesRepository.find();
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_entity_1.Item)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(2, (0, typeorm_1.InjectRepository)(condition_entity_1.Condition)),
    __param(3, (0, typeorm_1.InjectRepository)(size_entity_1.Size)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map