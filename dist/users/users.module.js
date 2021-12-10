"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsersModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_details_entity_1 = require("./entities/user-details.entity");
const user_image_entity_1 = require("./entities/user-image.entity");
const user_entity_1 = require("./entities/user.entity");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
let UsersModule = UsersModule_1 = class UsersModule {
};
UsersModule = UsersModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                user_details_entity_1.UserDetails,
                user_image_entity_1.UserImage
            ])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [UsersModule_1, users_service_1.UsersService, typeorm_1.TypeOrmModule]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map