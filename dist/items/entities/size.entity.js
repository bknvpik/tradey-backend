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
exports.Size = void 0;
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./item.entity");
let Size = class Size {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Size.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, unique: true, nullable: false }),
    __metadata("design:type", String)
], Size.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => item_entity_1.Item, item => item.size),
    __metadata("design:type", item_entity_1.Item)
], Size.prototype, "item", void 0);
Size = __decorate([
    (0, typeorm_1.Entity)()
], Size);
exports.Size = Size;
//# sourceMappingURL=size.entity.js.map