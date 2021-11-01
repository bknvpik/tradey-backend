import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Condition } from './entities/condition.entity';
import { Item } from './entities/item.entity';
import { Size } from './entities/size.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
        @InjectRepository(Condition)
        private conditionsRepository: Repository<Condition>,
        @InjectRepository(Size)
        private sizesRepository: Repository<Size>
    ) {}

    async findAll(): Promise<Item[]> {
        return await this.itemsRepository.find({
            select: ["name", "brand", "createdAt", "likes", "views"]
        });
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemsRepository.findOne(id);
    }

    async findAllCategory(category: string): Promise<Item[]> {
        return await this.itemsRepository.find({
            where: {
                item: {category: category}
            },
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        });
    }

    async findAllUser(userId: string): Promise<Item[]> {
        return await this.itemsRepository.find({
            where: {
                item: {user: userId},
            },
            relations: [
                "category",
                "condition",
                "size",
                "user",
                "images"
            ]
        })
    }

    async findCategories(): Promise<Category[]> {
        return await this.categoriesRepository.find();
    }

    async findConditions(): Promise<Condition[]> {
        return await this.conditionsRepository.find();
    }

    async findSizes(): Promise<Size[]> {
        return await this.sizesRepository.find();
    }
}
