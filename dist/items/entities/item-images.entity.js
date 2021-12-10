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
exports.ItemImages = void 0;
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
let ItemImages = class ItemImages {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ItemImages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, unique: true, nullable: false }),
    __metadata("design:type", String)
], ItemImages.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => item_entity_1.Item, item => item.images),
    __metadata("design:type", item_entity_1.Item)
], ItemImages.prototype, "item", void 0);
ItemImages = __decorate([
    (0, typeorm_1.Entity)()
], ItemImages);
exports.ItemImages = ItemImages;
//# sourceMappingURL=item-images.entity.js.map