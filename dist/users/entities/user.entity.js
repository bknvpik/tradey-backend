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
exports.User = void 0;
const item_entity_1 = require("../../items/entities/item.entity");
const favorite_entity_1 = require("../../popularity/entities/favorite.entity");
const typeorm_1 = require("typeorm");
const user_details_entity_1 = require("./user-details.entity");
const user_image_entity_1 = require("./user-image.entity");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200, unique: true, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "eMail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100, unique: true, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("bool", { default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_image_entity_1.UserImage, userImage => userImage.user, { cascade: true }),
    __metadata("design:type", user_image_entity_1.UserImage)
], User.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_details_entity_1.UserDetails, userDetails => userDetails.user, { cascade: true }),
    __metadata("design:type", user_details_entity_1.UserDetails)
], User.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.Item, item => item.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.Favorite, favorite => favorite.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "favorites", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map