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
exports.OffersController = void 0;
const common_1 = require("@nestjs/common");
const create_offer_dto_1 = require("./dtos/create-offer.dto");
const update_offer_dto_1 = require("./dtos/update-offer.dto");
const offers_service_1 = require("./offers.service");
let OffersController = class OffersController {
    constructor(offersService) {
        this.offersService = offersService;
    }
    async findAll() {
        return await this.offersService.findAll();
    }
    async findOne(id) {
        return await this.offersService.findOne(id);
    }
    async findAllUserOutgoing(userId) {
        return await this.offersService.findAllOutgoing(userId);
    }
    async findAllUserIncoming(userId) {
        return await this.offersService.findAllIncoming(userId);
    }
    async findAllStatus(status) {
        return await this.offersService.findAllByStatus(status);
    }
    async findAllUserStatus(params) {
        return await this.offersService.findAllUserStatus(params.userId, params.status);
    }
    async findAllUserStatusOutgoing(params) {
        return await this.offersService.findAllUserStatusOutgoing(params.userId, params.status);
    }
    async findAllUserStatusIncoming(params) {
        return await this.offersService.findAllUserStatusIncoming(params.userId, params.status);
    }
    async createOffer(createOfferDto) {
        return await this.offersService.createOffer(createOfferDto);
    }
    async editOffer(id, updateOfferDto) {
        return await this.offersService.editOffer(id, updateOfferDto);
    }
    async deleteOffer(id) {
        return await this.offersService.deleteOffer(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user/:userId/outgoing'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAllUserOutgoing", null);
__decorate([
    (0, common_1.Get)('user/:userId/incoming'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAllUserIncoming", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAllStatus", null);
__decorate([
    (0, common_1.Get)('user/:userId/status/:status'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAllUserStatus", null);
__decorate([
    (0, common_1.Get)('user/:userId/status/:status/outgoing'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAllUserStatusOutgoing", null);
__decorate([
    (0, common_1.Get)('user/:userId/status/:status/incoming'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "findAllUserStatusIncoming", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_offer_dto_1.CreateOfferDto]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "createOffer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_offer_dto_1.UpdateOfferDto]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "editOffer", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffersController.prototype, "deleteOffer", null);
OffersController = __decorate([
    (0, common_1.Controller)('offers'),
    __metadata("design:paramtypes", [offers_service_1.OffersService])
], OffersController);
exports.OffersController = OffersController;
//# sourceMappingURL=offers.controller.js.map