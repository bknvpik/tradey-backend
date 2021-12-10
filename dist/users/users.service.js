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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../auth/auth.service");
let UsersService = class UsersService {
    constructor(authService, usersRepository) {
        this.authService = authService;
        this.usersRepository = usersRepository;
    }
    findAll() {
        return this.usersRepository.find();
    }
    async findOne(username) {
        return this.usersRepository.findOne({ eMail: username });
    }
    async findOneById(id) {
        const user = await (0, typeorm_2.createQueryBuilder)().select("user").from(user_entity_1.User, "user")
            .leftJoinAndSelect("user.image", "image")
            .leftJoinAndSelect("user.details", "details")
            .where("user.id = :id", { id: id })
            .getOne();
        return user;
    }
    async findUserByItemId(itemId) {
        const user = await (0, typeorm_2.createQueryBuilder)().select("user").from(user_entity_1.User, "user")
            .leftJoin("user.items", "items")
            .where("items.id = :id", { id: itemId })
            .getOne();
        const { id } = user, rest = __rest(user, ["id"]);
        return id;
    }
    async create(user) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const newUser = Object.assign(Object.assign({}, user), { password: hash });
        await this.usersRepository.save(newUser);
        return { type: 'message', text: 'Account created successfully' };
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map