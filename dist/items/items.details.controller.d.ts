import { Category } from './entities/category.entity';
import { Condition } from './entities/condition.entity';
import { Size } from './entities/size.entity';
import { ItemsService } from './items.service';
export declare class ItemsDetailsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    getCategories(): Promise<Category[]>;
    getConditions(): Promise<Condition[]>;
    getSizes(): Promise<Size[]>;
}
