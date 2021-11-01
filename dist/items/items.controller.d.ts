import { Category } from './entities/category.entity';
import { Item } from './entities/item.entity';
import { Condition } from './entities/condition.entity';
import { Size } from './entities/size.entity';
import { ItemsService } from './items.service';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
export declare class ItemsController {
    private readonly itemsService;
    private readonly authService;
    constructor(itemsService: ItemsService, authService: AuthService);
    findAll(req: Request): Promise<Item[]>;
    getCategories(): Promise<Category[]>;
    getConditions(): Promise<Condition[]>;
    getSizes(): Promise<Size[]>;
    findOne(id: string): Promise<string>;
    findAllCategory(category: string): Promise<string>;
    findAllUser(userId: string): Promise<string>;
    addItem(): Promise<string>;
    editItem(id: string): Promise<string>;
    deleteItem(id: string): Promise<string>;
}
