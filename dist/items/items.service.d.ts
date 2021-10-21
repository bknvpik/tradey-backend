import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
export declare class ItemsService {
    private itemsRepository;
    constructor(itemsRepository: Repository<Item>);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    findAllCategory(category: string): Promise<Item[]>;
    findAllUser(userId: string): Promise<Item[]>;
}
