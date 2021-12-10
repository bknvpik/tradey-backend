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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const offer_entity_1 = require("./entities/offer.entity");
let OffersService = class OffersService {
    constructor(offersRepository) {
        this.offersRepository = offersRepository;
    }
    async findAll() {
        return await this.offersRepository.find({
            relations: ["item", "itemOffered"]
        });
    }
    async findOne(id) {
        return await this.offersRepository.findOne(id);
    }
    async findAllUser(userId) {
        return await this.offersRepository.find({
            where: {
                item: { user: userId },
                itemOffered: { user: userId }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async findAllOutgoing(userId) {
        return await this.offersRepository.find({
            where: {
                itemOffered: { user: userId }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async findAllIncoming(userId) {
        return await this.offersRepository.find({
            where: {
                item: { user: userId }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async findAllByStatus(status) {
        return await this.offersRepository.find({
            where: {
                offer: { status: status }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async findAllUserStatus(userId, status) {
        return await this.offersRepository.find({
            where: {
                offer: { status: status }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async findAllUserStatusOutgoing(userId, status) {
        return await this.offersRepository.find({
            where: {
                itemOffered: { user: userId },
                offer: { status: status }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async findAllUserStatusIncoming(userId, status) {
        return await this.offersRepository.find({
            where: {
                item: { user: userId },
                offer: { status: status }
            },
            relations: ["item", "itemOffered"]
        });
    }
    async createOffer(offer) {
        console.log(offer);
        console.log(await this.offersRepository.save(offer));
        await this.offersRepository.create(offer);
    }
    async editOffer(id, offer) {
        await this.offersRepository.update(id, offer);
    }
    async deleteOffer(id) {
        await this.offersRepository.delete(id);
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map