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
exports.CountryCode = void 0;
const typeorm_1 = require("typeorm");
const user_details_entity_1 = require("./user-details.entity");
let CountryCode = class CountryCode {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CountryCode.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, unique: true, nullable: false }),
    __metadata("design:type", String)
], CountryCode.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_details_entity_1.UserDetails, userDetails => userDetails.countryCode),
    __metadata("design:type", user_details_entity_1.UserDetails)
], CountryCode.prototype, "userDetails", void 0);
CountryCode = __decorate([
    (0, typeorm_1.Entity)()
], CountryCode);
exports.CountryCode = CountryCode;
//# sourceMappingURL=country-code.entity.js.map