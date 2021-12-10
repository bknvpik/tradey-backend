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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const offer_entity_1 = require("../../offers/entities/offer.entity");
const favorite_entity_1 = require("../../popularity/entities/favorite.entity");
const popularity_entity_1 = require("../../popularity/entities/popularity.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const condition_entity_1 = require("./condition.entity");
const item_images_entity_1 = require("./item-images.entity");
const size_entity_1 = require("./size.entity");
let Item = class Item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200, nullable: false }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, nullable: false }),
    __metadata("design:type", String)
], Item.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, category => category.item),
    __metadata("design:type", category_entity_1.Category)
], Item.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => condition_entity_1.Condition, condition => condition.item),
    __metadata("design:type", condition_entity_1.Condition)
], Item.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => size_entity_1.Size, size => size.item),
    __metadata("design:type", size_entity_1.Size)
], Item.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.items),
    __metadata("design:type", user_entity_1.User)
], Item.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Item.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("bool", { default: true }),
    __metadata("design:type", Boolean)
], Item.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => popularity_entity_1.Popularity, popularity => popularity.item, { cascade: true }),
    __metadata("design:type", popularity_entity_1.Popularity)
], Item.prototype, "popularity", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => offer_entity_1.Offer, offer => offer.item, {
        cascade: true
    }),
    __metadata("design:type", offer_entity_1.Offer)
], Item.prototype, "offer", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => offer_entity_1.Offer, offer => offer.itemOffered, {
        cascade: true
    }),
    __metadata("design:type", offer_entity_1.Offer)
], Item.prototype, "offered", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => item_images_entity_1.ItemImages, itemImages => itemImages.item, { cascade: true }),
    __metadata("design:type", Array)
], Item.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.Favorite, favorite => favorite.item, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Item.prototype, "favorites", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)()
], Item);
exports.Item = Item;
//# sourceMappingURL=item.entity.js.map