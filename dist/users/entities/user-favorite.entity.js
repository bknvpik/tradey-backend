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
exports.UserFavorite = void 0;
const item_entity_1 = require("../../items/entities/item.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserFavorite = class UserFavorite {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserFavorite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item, item => item.favorites),
    __metadata("design:type", item_entity_1.Item)
], UserFavorite.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.favorites),
    __metadata("design:type", user_entity_1.User)
], UserFavorite.prototype, "user", void 0);
UserFavorite = __decorate([
    (0, typeorm_1.Entity)()
], UserFavorite);
exports.UserFavorite = UserFavorite;
//# sourceMappingURL=user-favorite.entity.js.map