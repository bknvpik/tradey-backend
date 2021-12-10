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
exports.Popularity = void 0;
const item_entity_1 = require("../../items/entities/item.entity");
const typeorm_1 = require("typeorm");
let Popularity = class Popularity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Popularity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => item_entity_1.Item, item => item.popularity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", item_entity_1.Item)
], Popularity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { default: 0 }),
    __metadata("design:type", Number)
], Popularity.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { default: 0 }),
    __metadata("design:type", Number)
], Popularity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)("real", { default: 0 }),
    __metadata("design:type", Number)
], Popularity.prototype, "popularity", void 0);
Popularity = __decorate([
    (0, typeorm_1.Entity)()
], Popularity);
exports.Popularity = Popularity;
//# sourceMappingURL=popularity.entity.js.map