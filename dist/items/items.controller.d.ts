/// <reference types="multer" />
import { Category } from './entities/category.entity';
import { Item } from './entities/item.entity';
import { Condition } from './entities/condition.entity';
import { Size } from './entities/size.entity';
import { ItemsService } from './items.service';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { PopularityService } from 'src/popularity/popularity.service';
import { AddItemDto } from './dtos/add-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    private readonly authService;
    private readonly popularityService;
    constructor(itemsService: ItemsService, authService: AuthService, popularityService: PopularityService);
    findAll(req: Request): Promise<Item[]>;
    findMostPopular(req: Request): Promise<Item[]>;
    getCategories(): Promise<Category[]>;
    getConditions(): Promise<Condition[]>;
    getSizes(): Promise<Size[]>;
    findAllCategory(category: string): Promise<string>;
    findAllByUserId(userId: string): Promise<any>;
    findOne(id: string): Promise<any>;
    checkOwner(params: {
        itemId: string;
        userId: string;
    }): Promise<boolean>;
    addItem(item: AddItemDto, images: Array<Express.Multer.File>): Promise<any>;
    editItem(id: string): Promise<string>;
    deleteItem(id: string): Promise<string>;
}
