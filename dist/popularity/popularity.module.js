"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PopularityModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularityModule = void 0;
const common_1 = require("@nestjs/common");
const popularity_service_1 = require("./popularity.service");
const popularity_controller_1 = require("./popularity.controller");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const favorite_entity_1 = require("./entities/favorite.entity");
const popularity_middleware_1 = require("./middlewares/popularity.middleware");
const popularity_entity_1 = require("./entities/popularity.entity");
let PopularityModule = PopularityModule_1 = class PopularityModule {
    configure(consumer) {
        consumer
            .apply(popularity_middleware_1.PopularityMiddleware)
            .forRoutes('popularity/items/add-favorite', 'popularity/items/delete-favorite');
    }
};
PopularityModule = PopularityModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favorite_entity_1.Favorite, popularity_entity_1.Popularity])],
        providers: [popularity_service_1.PopularityService],
        exports: [PopularityModule_1, popularity_service_1.PopularityService, typeorm_1.TypeOrmModule],
        controllers: [popularity_controller_1.PopularityController]
    })
], PopularityModule);
exports.PopularityModule = PopularityModule;
//# sourceMappingURL=popularity.module.js.map