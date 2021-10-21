import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<string>;
    findAllCategory(category: string): Promise<string>;
    findAllUser(userId: string): Promise<string>;
    addItem(): Promise<string>;
    editItem(id: string): Promise<string>;
    deleteItem(id: string): Promise<string>;
}
