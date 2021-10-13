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
exports.Offer = exports.Status = void 0;
const item_entity_1 = require("../../items/entities/item.entity");
const typeorm_1 = require("typeorm");
var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["CONFIRMED"] = "confirmed";
    Status["IN_DELIVERY"] = "in delivery";
    Status["COMPLETED"] = "completed";
})(Status = exports.Status || (exports.Status = {}));
let Offer = class Offer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Offer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.Item, item => item.offer),
    __metadata("design:type", Array)
], Offer.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.Item, item => item.offered),
    __metadata("design:type", Array)
], Offer.prototype, "itemOffered", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { enum: Status, default: Status.PENDING, nullable: false }),
    __metadata("design:type", String)
], Offer.prototype, "status", void 0);
Offer = __decorate([
    (0, typeorm_1.Entity)()
], Offer);
exports.Offer = Offer;
//# sourceMappingURL=offer.entity.js.map