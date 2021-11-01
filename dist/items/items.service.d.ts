import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Condition } from './entities/condition.entity';
import { Item } from './entities/item.entity';
import { Size } from './entities/size.entity';
export declare class ItemsService {
    private itemsRepository;
    private categoriesRepository;
    private conditionsRepository;
    private sizesRepository;
    constructor(itemsRepository: Repository<Item>, categoriesRepository: Repository<Category>, conditionsRepository: Repository<Condition>, sizesRepository: Repository<Size>);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    findAllCategory(category: string): Promise<Item[]>;
    findAllUser(userId: string): Promise<Item[]>;
    findCategories(): Promise<Category[]>;
    findConditions(): Promise<Condition[]>;
    findSizes(): Promise<Size[]>;
}
