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
exports.UserDetails = void 0;
const typeorm_1 = require("typeorm");
const country_code_entity_1 = require("./country-code.entity");
const country_entity_1 = require("./country.entity");
const user_entity_1 = require("./user.entity");
let UserDetails = class UserDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, nullable: true }),
    __metadata("design:type", String)
], UserDetails.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, nullable: true }),
    __metadata("design:type", String)
], UserDetails.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, nullable: true }),
    __metadata("design:type", String)
], UserDetails.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200, nullable: true }),
    __metadata("design:type", String)
], UserDetails.prototype, "address1", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200, nullable: true }),
    __metadata("design:type", String)
], UserDetails.prototype, "address2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 20, nullable: true }),
    __metadata("design:type", String)
], UserDetails.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => country_code_entity_1.CountryCode, countryCode => countryCode.userDetails),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", country_code_entity_1.CountryCode)
], UserDetails.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => country_entity_1.Country, country => country.userDetails),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", country_entity_1.Country)
], UserDetails.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, user => user.details),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], UserDetails.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)("bool", { default: false }),
    __metadata("design:type", Boolean)
], UserDetails.prototype, "theme", void 0);
UserDetails = __decorate([
    (0, typeorm_1.Entity)()
], UserDetails);
exports.UserDetails = UserDetails;
//# sourceMappingURL=user-details.entity.js.map