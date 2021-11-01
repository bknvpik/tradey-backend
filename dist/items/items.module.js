"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("./items.service");
const items_controller_1 = require("./items.controller");
const typeorm_1 = require("@nestjs/typeorm");
const item_entity_1 = require("./entities/item.entity");
const category_entity_1 = require("./entities/category.entity");
const condition_entity_1 = require("./entities/condition.entity");
const item_images_entity_1 = require("./entities/item-images.entity");
const size_entity_1 = require("./entities/size.entity");
const auth_module_1 = require("../auth/auth.module");
let ItemsModule = class ItemsModule {
};
ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                category_entity_1.Category,
                condition_entity_1.Condition,
                item_images_entity_1.ItemImages,
                item_entity_1.Item,
                size_entity_1.Size
            ]),
            auth_module_1.AuthModule
        ],
        providers: [items_service_1.ItemsService],
        controllers: [items_controller_1.ItemsController]
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=items.module.js.map